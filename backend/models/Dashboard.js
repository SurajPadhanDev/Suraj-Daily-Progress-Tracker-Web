/*Generate a complete Next.js frontend for a “Daily Progress Tracker” web app with these requirements:

1. Use **React functional components**, **TailwindCSS**, and **Framer Motion** for animations.
2. Structure the components individually for each section:
   - Header: Logo, app title.
   - MorningRoutine: Toggle “Woke up by 3 AM”, dropdown “Had morning salad” or “Skipped”.
   - Breakfast: Input for food items + quantity, AI-powered calorie calculator fetching from backend API.
   - StudySessions: 6 study sessions, each 80 minutes with a start/stop timer, progress bar animation, log start and end times, connected to backend.
   - Classes: Checkbox list of classes, mark “Attended”, sync with backend.
   - SnackBreak: Input snack items + quantity, AI-calorie calculation, mark junk food.
   - Exercise: Toggle “Exercise Done” with animated icon.
   - DinnerAndNightStudy: Repeat calorie tracker for dinner, plus one 80-minute night study session with timer.
   - Sleep: Time picker for bedtime and wake-up, save to backend.
3. All components should fetch/post data from the backend API endpoints you already set up in Express.js.
4. Make the UI **visually appealing**, **interactive**, **responsive**, and **full of smooth animations** (Framer Motion).
5. Generate a `components` folder and a `pages/index.js` that assembles all components into a full dashboard.
6. Include **loader animations** when fetching or posting data to backend.
7. Ensure all buttons, inputs, toggles, and timers are fully functional and update MongoDB via your Express API.
8. Use **modern design principles**, good spacing, shadows, rounded corners, and hover animations.
9. Include comments for each component explaining what it does.*/
