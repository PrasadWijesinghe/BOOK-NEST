import express from "express";
import cors from "cors";
import admin from "firebase-admin";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import authRoutes from "./routes/auth.js";

dotenv.config();

// Initialize Firebase Admin SDK
let db;
try {
  // Check if service account key file exists
  const serviceAccountPath = "./serviceAccountKey.json";
  if (fs.existsSync(serviceAccountPath)) {
    const serviceAccount = JSON.parse(
      fs.readFileSync(serviceAccountPath, "utf8")
    );
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    
    db = admin.firestore();
    console.log("Firebase Admin initialized successfully");
  } else {
    console.warn("Service account key file not found. Please add serviceAccountKey.json to initialize Firebase Admin.");
    console.warn("You can download it from your Firebase project settings.");
  }
} catch (error) {
  console.error("Error initializing Firebase Admin:", error);
}

const app = express();
app.use(cors());
app.use(express.json());

// Authentication routes
app.use('/api/auth', authRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ 
    message: 'BookStore Backend API is running!',
    firebaseConnected: !!db
  });
});

// Test Firebase connection route
app.get('/test-firebase', async (req, res) => {
  if (!db) {
    return res.status(500).json({ 
      error: 'Firebase not initialized. Please check your service account key.' 
    });
  }
  
  try {
    // Try to read from a test collection
    const testRef = db.collection('test');
    res.json({ 
      message: 'Firebase connection successful!',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Firebase connection failed',
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to test the API`);
});
