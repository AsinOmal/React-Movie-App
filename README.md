# React Movie App

[![React](https://img.shields.io/badge/React-18-blue?logo=react\&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-blue?logo=tailwind-css\&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

A movie search and discovery web app built with React. The app fetches movie data from TMDb and lets you search, browse popular movies, and view trending movies stored in Appwrite. It works on both desktop and mobile.

> **Note:** This was my first React project, built to learn React and integrate APIs with a backend.

---

## 📦 Features

* Search movies with debounce to reduce API calls
* Displays trending movies fetched from Appwrite
* Shows popular movies by default using TMDb API
* Reusable `MovieCard` components to show movie details and posters
* Loading spinner while fetching data
* Error handling for API failures or empty results
* Mobile-friendly UI with Tailwind CSS

---

## 🛠️ Installation

**1. Clone the repository:**

```bash
git clone https://github.com/AsinOmal/-React-Movie-App.git
cd -React-Movie-App
```

**2. Install dependencies:**

```bash
npm install
```

**3. Create environment variables:**
Create a `.env.local` file in the root folder with your TMDb API key:

```
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

**4. Run the development server:**

```bash
npm run dev
```

The app will be available at `http://localhost:5173/` (default Vite port).

---

## 🔑 Environment Variables

* `VITE_TMDB_API_KEY`: Your TMDb API key
* Appwrite endpoint and project ID are set in the code (`src/appwrite.js`)

---

## 🤝 Contributing

Contributions are welcome:

1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Added feature"`)
4. Push to your branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

* [React](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Appwrite](https://appwrite.io/)
* [TMDb API](https://www.themoviedb.org/)
