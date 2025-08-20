const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀 with MongoDB");
});

// Import models
const MorningRoutine = require('./models/MorningRoutine');
const Breakfast = require('./models/Breakfast');
const StudySession = require('./models/StudySession');
const Class = require('./models/Class');
const SnackBreak = require('./models/SnackBreak');
const Exercise = require('./models/Exercise');
const DinnerNightStudy = require('./models/DinnerNightStudy');
const Sleep = require('./models/Sleep');

// Morning Routine
app.post('/api/morning', async (req, res) => {
  try {
    const routine = new MorningRoutine(req.body);
    await routine.save();
    res.json(routine);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get('/api/morning', async (req, res) => {
  const routines = await MorningRoutine.find();
  res.json(routines);
});

// Breakfast
app.post('/api/breakfast', async (req, res) => {
  try {
    const breakfast = new Breakfast(req.body);
    await breakfast.save();
    res.json(breakfast);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get('/api/breakfast', async (req, res) => {
  const breakfasts = await Breakfast.find();
  res.json(breakfasts);
});

// Study Sessions
app.post('/api/study', async (req, res) => {
  try {
    const session = new StudySession(req.body);
    await session.save();
    res.json(session);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get('/api/study', async (req, res) => {
  const sessions = await StudySession.find();
  res.json(sessions);
});

// Classes
app.post('/api/classes', async (req, res) => {
  try {
    const classObj = new Class(req.body);
    await classObj.save();
    res.json(classObj);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get('/api/classes', async (req, res) => {
  const classes = await Class.find();
  res.json(classes);
});

// Snack Break
app.post('/api/snack', async (req, res) => {
  try {
    const snack = new SnackBreak(req.body);
    await snack.save();
    res.json(snack);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get('/api/snack', async (req, res) => {
  const snacks = await SnackBreak.find();
  res.json(snacks);
});

// Exercise
app.post('/api/exercise', async (req, res) => {
  try {
    const exercise = new Exercise(req.body);
    await exercise.save();
    res.json(exercise);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get('/api/exercise', async (req, res) => {
  const exercises = await Exercise.find();
  res.json(exercises);
});

// Dinner & Night Study
app.post('/api/dinner-night', async (req, res) => {
  try {
    const dinnerNight = new DinnerNightStudy(req.body);
    await dinnerNight.save();
    res.json(dinnerNight);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get('/api/dinner-night', async (req, res) => {
  const dinners = await DinnerNightStudy.find();
  res.json(dinners);
});

// Sleep
app.post('/api/sleep', async (req, res) => {
  try {
    const sleep = new Sleep(req.body);
    await sleep.save();
    res.json(sleep);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get('/api/sleep', async (req, res) => {
  const sleeps = await Sleep.find();
  res.json(sleeps);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

