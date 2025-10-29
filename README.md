# ⏳ Angular — Deadline Countdown Demo

A clean, modern **Angular 20** application demonstrating a real-time countdown timer that retrieves data from a mock API endpoint and updates seamlessly.  
This project highlights scalability, performance, and maintainable architecture.

---

## 🚀 Live Demo  
👉 [View the deployed app](https://sharifkhangit.github.io/deadline-countdown-app/)

---

## 🔍 Project Overview  
This demo showcases **modern Angular best practices** —  
including **standalone components**, **OnPush change detection**, and **mock API integration** — all wrapped within a clean and extensible project structure.

---

## 🧩 Tech Stack
- ⚡ **Angular 20 (Standalone APIs)**
- 🔁 **RxJS** for reactive data streams  
- 🎨 **SCSS** for modular styling  
- 🧪 **Mock API** via HTTP Interceptor  

---

## 🏗️ Architecture Highlights
| Layer | Responsibility |
|-------|----------------|
| **Core Services** | Handle mock API and data flow |
| **Countdown Feature** | Isolated logic and UI for countdown timer |
| **HTTP Interceptor** | Simulates backend responses |
| **Shared Styles** | Centralized theme variables and responsive design |

---

## ✨ Key Features
- 🚀 Built with **Angular Standalone Components**
- ⚙️ **Performance optimized** using OnPush change detection
- 💎 **Fully responsive** minimalist layout
- ✅ **Clean, warning-free** build
- 🧱 **Scalable structure** ready for real API integration

---

## 💡 How It Works
1. The **landing page** introduces the project and provides a link to the countdown view.  
2. The **countdown component** makes a call to `/api/deadline` (mocked via HTTP interceptor).  
3. The **mock API** returns a `secondsLeft` value, which initializes a live timer.  
4. The timer **decrements every second** until the deadline is reached, then updates the view accordingly.

---

## 🧠 Local Setup

Clone the repository:
```bash
git clone https://github.com/sharifkhangit/deadline-countdown-app.git
cd deadline-countdown-app
