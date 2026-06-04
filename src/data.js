// ============================================================================
//  EDIT THIS FILE to make the portfolio yours.
//  Everything the site shows comes from here. Replace the placeholder text,
//  links, and items below. Icons use Font Awesome classes (https://fontawesome.com/icons).
// ============================================================================

export const profile = {
  name: 'Mohammad Aquil Khan',
  // Shown under your name in the hero, rotates through these:
  titles: ['AI/ML Developer', 'Full-Stack Developer', 'CSE Undergrad @ JUET'],
  tagline:
    'Computer Science undergrad building intelligent applications — from deep-learning models to full-stack web apps that put them to work.',
  // Put your image file in the /public folder and write just its filename here.
  // e.g. photo: 'me.jpg'  (the file must be at public/me.jpg)
  // Leave as '' to show a gradient monogram instead.
  photo: 'me.jpg',
  location: 'Jhansi, India',
  // Put your resume PDF in /public and write just its filename here (e.g. 'resume.pdf'),
  // or paste a full link (e.g. a Google Drive share URL). Empty = no button.
  resumeUrl: 'resume.pdf',
}

export const social = [
  { label: 'GitHub', icon: 'fa-brands fa-github', url: 'https://github.com/MDAQUILKHAN963' },
  { label: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', url: 'https://linkedin.com/in/aquil-khan-28731830b' },
  { label: 'Email', icon: 'fa-solid fa-envelope', url: 'mailto:aquilkhan963@gmail.com' },
  { label: 'WhatsApp', icon: 'fa-brands fa-whatsapp', url: 'https://wa.me/919630897780' },
]

export const about = {
  paragraphs: [
    "I'm an AI/ML and full-stack developer who enjoys taking an idea all the way from a trained model to a deployed product people can use. My recent work spans medical imaging, computer vision, and end-to-end MERN applications.",
    'I care about clean code, solid model evaluation, and shipping. When I’m not training models I’m usually exploring new datasets or building side projects.',
  ],
  education: {
    degree: 'B.Tech — Computer Science & Engineering',
    school: 'Jaypee University of Engineering and Technology (JUET)',
    year: '2023 – 2027',
    detail: '', // optional — add CGPA here, e.g. 'CGPA: 8.5 / 10'
  },
  // Small highlight stats in the about section
  stats: [
    { value: '10+', label: 'Projects Built' },
    { value: '5+', label: 'ML Models Trained' },
    { value: '2+', label: 'Years Coding' },
  ],
}

// Each skill card. `icon` is a Font Awesome class; `items` are the badges inside.
export const skills = [
  {
    icon: 'fa-solid fa-brain',
    title: 'AI / Machine Learning',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'scikit-learn', 'OpenCV', 'spaCy'],
  },
  {
    icon: 'fa-solid fa-code',
    title: 'Languages',
    items: ['Python', 'JavaScript', 'Java', 'C++', 'SQL'],
  },
  {
    icon: 'fa-brands fa-react',
    title: 'Frontend',
    items: ['React', 'Vite', 'HTML5', 'CSS3', 'Tailwind'],
  },
  {
    icon: 'fa-solid fa-server',
    title: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'Flask', 'REST APIs'],
  },
  {
    icon: 'fa-solid fa-database',
    title: 'Databases & Cloud',
    items: ['MongoDB', 'MySQL', 'Firebase', 'Docker', 'Git'],
  },
  {
    icon: 'fa-solid fa-robot',
    title: 'AI Tooling',
    items: ['LLMs / RAG', 'Gemini API', 'Hugging Face', 'LangChain', 'Prompt Eng.'],
  },
]

// Featured projects. `featured: true` gives a wider highlighted card.
export const projects = [
  {
    title: 'AI Doctor — Multimodal Medical Assistant',
    description:
      'A multimodal medical AI: ResNet for image diagnosis, spaCy for clinical text, RAG for grounded answers, and Gemini for explanations — wrapped in a MERN web app.',
    tech: ['PyTorch', 'ResNet', 'spaCy', 'RAG', 'Gemini', 'MERN'],
    github: 'https://github.com/MDAQUILKHAN963/ai-multimodal-doctor',
    demo: '',
    icon: 'fa-solid fa-user-doctor',
    featured: true,
  },
  {
    title: 'SwachhCity — AI Waste Management Platform',
    description:
      'A React + Python platform that uses YOLOv8 to automatically classify waste from images, Random Forest on historical data to predict garbage hotspots, and an AI-based filtering + routing algorithm to optimize path planning for sanitation workers.',
    tech: ['YOLOv8', 'Deep Learning', 'Random Forest', 'Python', 'MERN'],
    github: 'https://github.com/MDAQUILKHAN963/SwachhCity',
    demo: '',
    icon: 'fa-solid fa-recycle',
    featured: true,
  },
  {
    title: 'Plant Disease Detection',
    description:
      'CNN that classifies plant leaf diseases from photos, served through a FastAPI backend with a React frontend for instant predictions.',
    tech: ['TensorFlow', 'CNN', 'FastAPI', 'React', 'Docker'],
    github: 'https://github.com/MDAQUILKHAN963/Plant-disease-detection-',
    demo: '',
    icon: 'fa-solid fa-leaf',
  },
  {
    title: 'TalentSync — AI-Powered Secure Hiring Platform',
    description:
      'An AI-powered recruitment platform that parses resumes with NLP, matches and ranks candidates against jobs, and enables real-time recruiter–candidate communication — making hiring faster, smarter, and unbiased.',
    tech: ['MERN', 'Socket.io', 'FastAPI', 'spaCy', 'Gemini API', 'JWT', 'MongoDB'],
    github: 'https://github.com/MDAQUILKHAN963/TalentSync-AI-Powered-Secure-Hiring-Platform',
    demo: '',
    icon: 'fa-solid fa-user-tie',
  },
  {
    title: 'Facial Emotion Detection',
    description:
      'Real-time facial emotion recognition from webcam feed using a CNN trained on FER data.',
    tech: ['Deep Learning', 'OpenCV', 'CNN'],
    github: 'https://github.com/MDAQUILKHAN963/AI-human-emotion-detection',
    demo: '',
    icon: 'fa-solid fa-face-smile',
  },
]

// Vertical timeline. Newest first. Use whatever roles/internships you have.
export const experience = [
  {
    role: 'Machine Learning Intern',
    org: 'NASA Harvest (Remote) · Tools: Python, TensorFlow, Deep Learning',
    period: 'June 2025 — July 2025',
    points: [
      'Processed and validated large-scale geospatial datasets using the USDA Cropland Data Layer (CDL) for ground-truth labeling and model evaluation.',
      'Trained a 1D Convolutional Neural Network (CNN) in TensorFlow/Keras for time-series spectral analysis, achieving 87% training and 83% validation accuracy across diverse crop categories.',
      'Collaborated in a remote agile environment, using version control and cloud-based computation (Databricks) to deliver scalable technical solutions.',
    ],
  },
]

export const achievements = [
  {
    icon: 'fa-solid fa-code',
    title: 'Algorithmic Proficiency',
    detail: 'Solved 100+ LeetCode problems focusing on optimized Data Structures & Algorithms.',
  },
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'CodeSrijan Hackathon',
    detail:
      'Participated in the 72-hour national-level CodeSrijan Hackathon at JUET Guna, building an AI-powered resume screening & job matching system.',
  },
  {
    icon: 'fa-solid fa-satellite',
    title: 'NASA Harvest ML Internship',
    detail: 'Selected for a remote Machine Learning internship working on real geospatial crop data.',
  },
  {
    icon: 'fa-solid fa-certificate',
    title: 'AI & ML Certified',
    detail: 'Completed AI Foundation and Machine Learning using Python certifications.',
  },
]

export const certifications = [
  { name: 'Artificial Intelligence Foundation Certification', issuer: 'Infosys Springboard', url: '' },
  { name: 'Machine Learning using Python', issuer: 'Infosys Springboard', url: '' },
]

export const contact = {
  email: 'aquilkhan963@gmail.com',
  phone: '+91 96308 97780',

  // ---- Receive messages straight to your inbox via Web3Forms (free, no account) ----
  // 1. Go to https://web3forms.com
  // 2. Type your email (aquilkhan963@gmail.com) and click "Create Access Key"
  // 3. They email you an access key (a long string). Paste it below.
  // Once filled in, every form submission is emailed to you automatically.
  // Leave it empty to fall back to opening the visitor's email app (mailto).
  web3formsAccessKey: '6f02c3c8-5d59-43e3-bb04-7a5d2df19933',
}
