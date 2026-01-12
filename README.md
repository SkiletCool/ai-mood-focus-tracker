# ai-mood-focus-tracker

# 🧠 AI Mood / Focus Tracker

A modern, lightweight **frontend-only web application** for tracking daily mood and focus levels, visualizing productivity trends, and receiving simple AI-style recommendations.

This project is built **without any frameworks** and is designed as a **portfolio-ready example** of clean Vanilla JavaScript architecture, UI/UX thinking, and incremental development with Git commits.

---

## ✨ Features

- 📅 Daily mood & focus check-in
- 💾 Persistent data storage using `localStorage`
- 📜 History of all entries
- 📈 Interactive focus progress chart (Chart.js)
- 🤖 Mocked AI advice based on mood
- 🎨 Modern glassmorphism UI
- 📱 Fully responsive (desktop & mobile)
- ⚡ Smooth interactions & clean layout

---

## 🛠️ Tech Stack

- **HTML5** – semantic markup
- **CSS3** – glassmorphism, soft shadows, responsive layout
- **Vanilla JavaScript (ES6+)** – clean modular logic
- **Chart.js** – data visualization
- **localStorage API** – persistent state

❌ No React
❌ No Vue
❌ No frameworks

---

## 📂 Project Structure

```
ai-mood-focus-tracker/
│
├── index.html          # App layout & structure
├── css/
│   └── style.css       # UI styling (glassmorphism)
├── js/
│   └── script.js       # App logic & state management
└── README.md
```

---

## 🚀 How It Works

1. User selects:

   - **Mood** (happy / neutral / sad)
   - **Focus level** (1–10)

2. On clicking **Add Entry**:

   - Entry is saved to `localStorage`
   - History list updates
   - Chart re-renders with new data
   - AI advice updates based on mood

3. On page reload:

   - Stored data is restored automatically
   - Chart and history are re-rendered

---

## 📈 Progress Chart Explained

The **Progress Chart** visualizes the user's **focus level over time**.

Why it matters:

- Turns raw numbers into insights
- Helps detect productivity trends
- Builds foundation for future AI analytics

Without the chart → static tracker
With the chart → **behavior analysis tool**

---

## 🤖 AI Advice (Mocked)

The AI advice system is rule-based and simulates intelligent feedback:

| Mood    | Advice                          |
| ------- | ------------------------------- |
| Happy   | Encourages deep work            |
| Neutral | Promotes consistency            |
| Sad     | Suggests rest and lighter tasks |

> This logic can later be replaced with a real AI model or API.

---

## 🧪 Local Development

Simply open `index.html` in your browser.

No build tools, no dependencies, no setup required.

---

## 📦 Commit Strategy

The project was developed in **6 logical commits**, demonstrating real-world workflow:

1. Project setup & base HTML
2. UI layout & glassmorphism styling
3. Mood & focus input logic
4. localStorage & history
5. Chart.js visualization
6. AI advice & final polish

This makes the repository easy to review for recruiters.

---

## 🎯 Why This Project?

This project demonstrates:

- Clean code structure
- State management without frameworks
- UI/UX awareness
- Data visualization skills
- Incremental development mindset

Ideal for **Junior → Middle Frontend portfolio**.

---

## 🔮 Possible Improvements

- Mood-based chart colors
- Weekly / monthly analytics
- Real AI API integration
- Authentication & cloud sync
- Export data to CSV

---

## 👤 Author

Created by **SkiletCool**

> Frontend Developer in training, focused on clean UI, logic, and scalable architecture.

---

⭐ If you like this project — give it a star!
