import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS so our frontend on port 5173 can query the API
app.use(cors());
app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    startup: 'VOXOR LAB API Services'
  });
});

// Contact form submission endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, budget, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }

  // Simulate storing in a database or forwarding emails
  console.log(`\n--- NEW LEAD INBOUND FOR VOXOR LAB ---`);
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Budget Tier: ${budget}`);
  console.log(`Message: ${message}`);
  console.log(`--------------------------------------\n`);

  res.status(201).json({
    success: true,
    message: 'Form submitted successfully to VOXOR LAB database node.',
    receivedLead: { name, email, budget }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 VOXOR LAB Backend Server running on port ${PORT}`);
});
