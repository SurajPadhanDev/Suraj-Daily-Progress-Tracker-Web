/*
Create a full-featured, highly interactive Daily Progress Tracker web app using Next.js (React) for frontend and Express.js + MongoDB for backend. 
Frontend features:
1. Morning Routine: toggles, dropdowns, with animations
2. Breakfast: inputs for calories, AI-powered calorie suggestion
3. 6 Study Sessions (80 min each): timers, start/end tracking, animations
4. Classes: checkboxes + animated icons
5. Snack Break: inputs for calories, junk food label, fun animation
6. Exercise: toggle, animated icons, progress bar
7. Dinner & Night Study: inputs, night timer, animated transitions
8. Sleep: time picker, bedtime reminders, sleep animation

Frontend Requirements:
- Make website visually stunning, modern, and interactive
- Use animations for all toggles, timers, progress bars, and transitions
- Responsive for mobile and desktop
- Use color-coded sections
- Track progress of each session and display logs
- Connect frontend to backend APIs automatically

Backend Requirements:
- Express.js API for each section (Morning Routine, Breakfast, Study Sessions, Classes, Snack, Exercise, Dinner/Night Study, Sleep)
- Use MongoDB Atlas for database
- Each API endpoint should store and retrieve user data
- Implement user-friendly JSON responses

Database Structure:
- MorningRoutine: { taskName: String, status: Boolean, time: Date }
- Breakfast: { items: Array, calories: Number, time: Date }
- StudySessions: { sessionNumber: Number, startTime: Date, endTime: Date, completed: Boolean }
- Classes: { className: String, status: Boolean, time: Date }
- SnackBreak: { items: Array, calories: Number, junkFood: Boolean, time: Date }
- Exercise: { type: String, completed: Boolean, duration: Number, time: Date }
- DinnerNightStudy: { dinner: Array, nightStudyTime: Date, completed: Boolean }
- Sleep: { bedtime: Date, wakeupTime: Date }

Extra:
- Use best animations for progress bars, timers, toggles, and transitions
- Add attractive color scheme and interactive buttons
- Pay attention to each small detail (like hover animations, smooth transitions, input focus effects)
- Make the UI intuitive and beautiful

Generate:
1. Full Next.js frontend code
2. Full Express.js backend API code
3. MongoDB models and database connections
4. Make frontend fully connected to backend automatically
*/
