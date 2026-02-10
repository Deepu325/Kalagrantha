const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/imago_studio';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Enquiry Model
const EnquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    vertical: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Enquiry = mongoose.model('Enquiry', EnquirySchema);

// Routes
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

app.get('/api/enquiries', async (req, res) => {
    try {
        const enquiries = await Enquiry.find().sort({ createdAt: -1 });
        res.json(enquiries);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch enquiries' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
