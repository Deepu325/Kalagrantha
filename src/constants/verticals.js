export const VERTICALS = [
  {
    id: 'art-hub',
    path: '/art-hub',
    shortName: 'Art Hub',
    name: 'Art & Movement Studio',
    theme: 'theme-art-hub',
    nav: [
      { label: 'Overview', path: 'overview' },
      { label: 'Classes', path: 'classes' },
      { label: 'Faculty', path: 'faculty' },
      { label: 'Timetable', path: 'timetable' },
      { label: 'Enroll', path: 'enroll' }
    ],
    cta: 'Train. Perform. Transform.',
    description: 'A sanctuary for classical and contemporary movement forms, bridging the gap between student and artist.',
    features: [
      { title: 'Classical Roots', text: 'Deeply researched curricula in traditional movement forms, taught with modern pedagogical techniques.' },
      { title: 'Contemporary Edge', text: 'Workshops and classes in avant-garde and experimental movement to push creative boundaries.' },
      { title: 'Performance Ready', text: 'Regular showcases and institutional support for emerging performing artists.' }
    ],
    stats: [
      { value: '25+', label: 'Disciplines' },
      { value: '15', label: 'Resident Faculty' },
      { value: '500+', label: 'Active Students' }
    ],
    faculty: [
      { name: 'Dr. Elena Rossi', role: 'Classical Ballet Head', bio: 'Former soloist at La Scala with 20 years of teaching excellence.' },
      { name: 'Kiran Deshmukh', role: 'Contemporary Lead', bio: 'Specialist in fluid floorwork and contact improvisation.' },
      { name: 'Ananya Iyer', role: 'Abhinaya Specialist', bio: 'Preserving the narrative soul of classical movement through facial gesture.' }
    ],
    classes: [
      { name: 'Pre-Professional Ballet', level: 'Advanced', schedule: 'Mon, Wed, Fri' },
      { name: 'Modern Floorwork', level: 'Open Level', schedule: 'Tue, Thu' },
      { name: 'Cultural Narrative', level: 'Intermediate', schedule: 'Sat' }
    ]
  },
  {
    id: 'movement-epics',
    path: '/movement-epics',
    shortName: 'Movement & Epics',
    name: 'Movement & Epics Curriculum',
    theme: 'theme-movement-epics',
    nav: [
      { label: 'Curriculum', path: 'curriculum' },
      { label: 'Philosophy', path: 'philosophy' },
      { label: 'Modules', path: 'modules' },
      { label: 'Institutions', path: 'institutions' },
      { label: 'Apply', path: 'apply' }
    ],
    cta: 'Cultural Heritage in Motion.',
    description: 'An academic approach to the preservation and performance of global cultural narratives through movement.',
    features: [
      { title: 'Research-First', text: 'Every module is backed by extensive field-work and historical research.' },
      { title: 'Global Standards', text: 'Curriculum designed for international schools, universities, and cultural centers.' },
      { title: 'Digital Archive', text: 'Access to the world\'s first digital movement notation database for cultural epics.' }
    ],
    stats: [
      { value: '10k+', label: 'Pages of Research' },
      { value: '50+', label: 'Cultural Modules' },
      { value: '12', label: 'Partner Institutions' }
    ],
    modules: [
      { title: 'Epic Foundations', duration: '12 Weeks', focus: 'Mythology & Physicality' },
      { title: 'Regional Dialects', duration: '8 Weeks', focus: 'Geographic Movement Variation' },
      { title: 'Institutional Pedagogy', duration: '16 Weeks', focus: 'Teaching Cultural Movement' }
    ]
  },
  {
    id: 'yoga-ttc',
    path: '/yoga-ttc',
    shortName: 'Yoga TTC',
    name: 'Yoga Teacher Training',
    theme: 'theme-yoga-ttc',
    nav: [
      { label: 'Program', path: 'program' },
      { label: 'Certification', path: 'certification' },
      { label: 'Faculty', path: 'faculty' },
      { label: 'Eligibility', path: 'eligibility' },
      { label: 'Register', path: 'register' }
    ],
    cta: 'Elevate Your Practice.',
    description: 'International standard certifications for the next generation of yoga instructors, rooted in ancient wisdom.',
    features: [
      { title: 'Yoga Alliance Certified', text: 'Accredited programs (RYT 200/500) recognized globally in over 150 countries.' },
      { title: 'Ancient Pedagogy', text: 'Authentic teaching methods combined with modern anatomical science.' },
      { title: 'Post-Grad Support', text: 'Mentorship and placement assistance within our global partner network.' }
    ],
    stats: [
      { value: '2500+', label: 'Certified Teachers' },
      { value: '30+', label: 'Batches Graduated' },
      { value: '100%', label: 'Placement Support' }
    ],
    curriculum: [
      { subject: 'Asana Alignment', hours: 100 },
      { subject: 'Pranayama & Kriya', hours: 40 },
      { subject: 'Yoga Philosophy', hours: 30 },
      { subject: 'Teaching Methodology', hours: 30 }
    ]
  },
  {
    id: 'creative-hub',
    path: '/creative-hub',
    shortName: 'Creative Hub',
    name: 'Creative Hub',
    theme: 'theme-creative-hub',
    nav: [
      { label: 'Residency', path: 'residency' },
      { label: 'Collaborations', path: 'collaborations' },
      { label: 'Studio Space', path: 'studio-space' },
      { label: 'Gallery', path: 'gallery' },
      { label: 'Connect', path: 'connect' }
    ],
    cta: 'Where Ideas Take Root.',
    description: 'A collaborative incubator for multi-disciplinary artists, designers, and innovators.',
    features: [
      { title: 'Artist Residencies', text: 'Fully equipped studio spaces and mentorship for experimental projects.' },
      { title: 'Cross-Pollination', text: 'Join a community where movement meets technology, film, and digital art.' },
      { title: 'Open Gallery', text: 'Regular exhibitions and pop-up shows to showcase new-age creative work.' }
    ],
    stats: [
      { value: '150+', label: 'Collaborators' },
      { value: '20', label: 'Resident Projects' },
      { value: '5k sqft', label: 'Studio Space' }
    ],
    spaces: [
      { name: 'The Blackbox', type: 'Performance/Rehearsal', tech: 'Full Light Rig' },
      { name: 'Neural Forge', type: 'Tech/Media Lab', tech: '8K Projection' },
      { name: 'The Attic', type: 'Design/Craft', tech: 'Natural Light' }
    ]
  },
  {
    id: 'events-entertainment',
    path: '/events-entertainment',
    shortName: 'Events',
    name: 'Events & Entertainment',
    theme: 'theme-events',
    nav: [
      { label: 'Services', path: 'services' },
      { label: 'Past Events', path: 'past-events' },
      { label: 'Artists', path: 'artists' },
      { label: 'Clients', path: 'clients' },
      { label: 'Book Us', path: 'book-us' }
    ],
    cta: 'We design experiences, not events.',
    description: 'Bespoke event programming, artist management, and world-class production for global audiences.',
    features: [
      { title: 'Boutique Curation', text: 'Bespoke artistic programming tailored to your brand\'s vision and values.' },
      { title: 'Elite Artist Pool', text: 'Direct access to the ecosystem\'s top-performing artists and choreographers.' },
      { title: 'Full Production', text: 'From sound and light to stage design, we manage every layer of the experience.' }
    ],
    stats: [
      { value: '500+', label: 'Events Curated' },
      { value: '2M+', label: 'Audience Reach' },
      { value: '200+', label: 'Corporate Clients' }
    ],
    clients: ['Global Tech Summits', 'International Film Festivals', 'Luxury Heritage Brands', 'State Cultural Galas']
  }
];
