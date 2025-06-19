
# 📝 PLP Task Manager

A simple, stylish **Task Manager App** built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **localStorage** for persistent task management.

---

## 🚀 Features

- ✅ **Add Tasks** — Create new tasks with ease.
- ✅ **Toggle Completion** — Mark tasks as complete/incomplete.
- ✅ **Delete Tasks** — Remove unwanted tasks.
- ✅ **Task Filtering** — Filter by All, Active, or Completed tasks.
- ✅ **Persistent Storage** — Tasks are saved in **localStorage**.
- ✅ **Dark Mode Toggle** — Switch between light and dark themes.
- ✅ **Animated "Done" Message** — Smooth, looping animation using **Framer Motion**.
- ✅ **API Data Fetching** — Example API integration to display fetched data.
- ✅ **Responsive & Clean UI** — Styled with Tailwind CSS.

---

## 🛠️ Tech Stack

- ⚛️ React (with Hooks)
- ⚡ Vite
- 💨 Tailwind CSS
- 🎨 Framer Motion
- 🌙 Context API (for Dark Mode)
- 🗃️ localStorage (for persistence)

---

## 📦 Installation

1. **Clone this repository**:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

2. **Install dependencies**:

```bash
npm install
```

3. **Start the development server**:

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

---

## 🌍 Deployment (Netlify)

1. Push your project to GitHub.
2. Sign in to [Netlify](https://app.netlify.com).
3. Create a new site from GitHub.
4. Set the following:

| Option             | Value          |
|------------------|---------------|
| Build Command     | `npm run build` |
| Publish Directory | `dist`        |

5. Deploy and get your live URL 🎉.

---

## 🌟 Project Structure

```
/src
│
├── components/        # Reusable components (Button, Navbar, Footer, TaskManager)
├── context/           # ThemeContext for Dark Mode
├── api/               # Example API fetching component
├── App.jsx            # Main App component
├── main.jsx           # React Entry point
└── index.css          # TailwindCSS styles
```

---

## 🔥 Available Scripts

| Command          | Description                        |
|-----------------|------------------------------------|
| `npm run dev`    | Start local dev server (Vite)      |
| `npm run build`  | Build app for production          |
| `npm run preview`| Preview production build locally  |

---

## 🤝 Author

**Ken Kiragu** — _KenTech Softwares_  
[GitHub](https://github.com/CrazyCoder254) • 

---

## 📜 License

This project is **open-source** and available under the [MIT License](LICENSE).

---

## 🎨 Special Notes

- The "Done ✔️" message uses **Framer Motion** to animate text appearing and fading out in an infinite loop.
- Dark Mode is handled via **React Context API** with localStorage persistence.
