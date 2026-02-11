const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'kalagrantha_secure_key_2024';

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Create uploads directory
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/kalagrantha';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Admin Schema
const AdminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Admin = mongoose.model('Admin', AdminSchema);

// Hero Images Schema
const HeroImageSchema = new mongoose.Schema({
    vertical: { type: String, required: true }, // 'home', 'art-hub', 'yoga-ttc', etc.
    imageUrl: { type: String, required: true },
    title: { type: String, default: '' },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

const HeroImage = mongoose.model('HeroImage', HeroImageSchema);

// Gallery Schema
const GallerySchema = new mongoose.Schema({
    title: { type: String, required: true },
    vertical: { type: String, required: true },
    subsection: { type: String, default: 'main' },
    imageUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Gallery = mongoose.model('Gallery', GallerySchema);

// Enquiry Model
const EnquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    vertical: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Enquiry = mongoose.model('Enquiry', EnquirySchema);

// Multer Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only JPG, PNG, and WebP files are allowed'), false);
    }
};

const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Auth Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    });
};

// Create default admin (run once)
const createDefaultAdmin = async () => {
    try {
        const existingAdmin = await Admin.findOne({ email: 'admin@kalagrantha.com' });
        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash('KA2024@secure', 12);
            const admin = new Admin({
                email: 'admin@kalagrantha.com',
                password: hashedPassword
            });
            await admin.save();
            console.log('Default admin created: admin@kalagrantha.com / KA2024@secure');
        }
    } catch (error) {
        console.error('Error creating default admin:', error);
    }
};

// Admin Routes
app.post('/api/admin/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isValidPassword = await bcrypt.compare(password, admin.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: admin._id, email: admin.email },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({ token, message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});

// Hero Images Routes
app.post('/api/admin/hero/upload', authenticateToken, upload.single('image'), async (req, res) => {
    try {
        const { vertical, title, order } = req.body;
        
        if (!req.file) {
            return res.status(400).json({ error: 'No image file provided' });
        }

        const imageUrl = `/uploads/${req.file.filename}`;
        
        const heroImage = new HeroImage({
            vertical,
            imageUrl,
            title: title || '',
            order: parseInt(order) || 0
        });

        await heroImage.save();
        res.status(201).json({ message: 'Hero image uploaded successfully', heroImage });
    } catch (error) {
        res.status(500).json({ error: 'Upload failed' });
    }
});

app.get('/api/hero/:vertical', async (req, res) => {
    try {
        const { vertical } = req.params;
        const images = await HeroImage.find({ vertical, isActive: true }).sort({ order: 1, createdAt: -1 });
        res.json(images);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch hero images' });
    }
});

app.delete('/api/admin/hero/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const heroImage = await HeroImage.findById(id);
        
        if (!heroImage) {
            return res.status(404).json({ error: 'Hero image not found' });
        }

        const filePath = path.join(__dirname, heroImage.imageUrl);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        await HeroImage.findByIdAndDelete(id);
        res.json({ message: 'Hero image deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Delete failed' });
    }
});

app.get('/api/admin/hero', authenticateToken, async (req, res) => {
    try {
        const images = await HeroImage.find().sort({ vertical: 1, order: 1, createdAt: -1 });
        res.json(images);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch hero images' });
    }
});

// Gallery Routes
app.post('/api/admin/gallery/upload', authenticateToken, upload.single('image'), async (req, res) => {
    try {
        const { title, vertical, subsection } = req.body;
        
        if (!req.file) {
            return res.status(400).json({ error: 'No image file provided' });
        }

        const imageUrl = `/uploads/${req.file.filename}`;
        
        const galleryItem = new Gallery({
            title,
            vertical,
            subsection: subsection || 'main',
            imageUrl
        });

        await galleryItem.save();
        res.status(201).json({ message: 'Image uploaded successfully', galleryItem });
    } catch (error) {
        res.status(500).json({ error: 'Upload failed' });
    }
});

app.get('/api/gallery/:vertical', async (req, res) => {
    try {
        const { vertical } = req.params;
        const images = await Gallery.find({ vertical }).sort({ createdAt: -1 });
        res.json(images);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch gallery' });
    }
});

app.delete('/api/admin/gallery/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const galleryItem = await Gallery.findById(id);
        
        if (!galleryItem) {
            return res.status(404).json({ error: 'Image not found' });
        }

        // Delete file from filesystem
        const filePath = path.join(__dirname, galleryItem.imageUrl);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        await Gallery.findByIdAndDelete(id);
        res.json({ message: 'Image deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Delete failed' });
    }
});

app.get('/api/admin/gallery', authenticateToken, async (req, res) => {
    try {
        const images = await Gallery.find().sort({ createdAt: -1 });
        res.json(images);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch gallery' });
    }
});

// Enquiry Routes
app.post('/api/enquiry', async (req, res) => {
    try {
        const { name, email, vertical, message } = req.body;
        const newEnquiry = new Enquiry({ name, email, vertical, message });
        await newEnquiry.save();
        res.status(201).json({ message: 'Enquiry submitted successfully' });
    } catch (error) {
        console.error('Error saving enquiry:', error);
        res.status(500).json({ error: 'Failed to submit enquiry' });
    }
});

app.get('/api/admin/enquiries', authenticateToken, async (req, res) => {
    try {
        const enquiries = await Enquiry.find().sort({ createdAt: -1 });
        res.json(enquiries);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch enquiries' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    createDefaultAdmin();
});
