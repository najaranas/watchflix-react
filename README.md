
# 🎬 WatchFlix

A modern, responsive movie streaming platform built with React that provides users with a Netflix-like experience for discovering and exploring movies.

> ⚠️ **Note:** This project was created as part of my early journey in learning React. It showcases my foundational skills and growth in frontend development.


## 🌐 Live Demo

**[WatchFlix Live Demo](https://watchflix-react.netlify.app/)**

## ✨ Features

- **🎯 Movie Discovery**: Browse trending, top-rated, upcoming, and popular movies
- **🎭 Genre-based Filtering**: Explore movies by different genres (Action, Comedy, Drama, etc.)
- **🔍 Advanced Search**: Search for movies by title with real-time results
- **📱 Responsive Design**: Fully responsive design that works on desktop, tablet, and mobile
- **🎬 Movie Details**: Comprehensive movie information including:
  - Plot summaries
  - Cast and crew information
  - Release dates and ratings
  - Movie trailers and videos
  - Similar movie recommendations
- **⚡ Fast Loading**: Optimized performance with loading states and smooth transitions
- **🎨 Modern UI/UX**: Beautiful, intuitive interface with smooth animations
- **🔄 Dynamic Routing**: Clean URL structure with React Router

## 🛠️ Technologies Used

- **Frontend Framework**: React 18.3.1
- **Routing**: React Router DOM 6.24.1
- **Styling**: CSS3 with custom animations
- **API Integration**: The Movie Database (TMDB) API
- **Build Tool**: Create React App
- **Deployment**: Netlify
- **Icons**: Font Awesome

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/najaranas/watchflix-react/.git
   cd watchflix
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
watchflix/
├── public/
│   ├── assets/
│   │   ├── logo.png
│   │   └── not-found-bg.jpg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Genre/           # Genre-specific movie listings
│   │   ├── Header/          # Main header component
│   │   ├── Main/            # Homepage component
│   │   ├── MovieCategory/   # Movie category components
│   │   ├── MovieDetails/    # Detailed movie information
│   │   ├── MovieShowcase/   # Movie display components
│   │   ├── NavBar/          # Navigation bar
│   │   ├── PageNotFound/    # 404 error page
│   │   ├── SearchMovie/     # Search functionality
│   │   └── script/          # API integration scripts
│   ├── App.js               # Main application component
│   ├── App.css              # Main application styles
│   └── index.js             # Application entry point
├── package.json
└── README.md
```

## 🎯 Key Components

### Main Components
- **Header**: Navigation and branding
- **NavBar**: Genre-based navigation menu
- **Main**: Homepage with featured movies
- **MovieShowcase**: Movie card displays
- **MovieDetails**: Comprehensive movie information
- **SearchMovie**: Movie search functionality
- **Genre**: Genre-specific movie listings

### API Integration
The application uses The Movie Database (TMDB) API for:
- Trending movies
- Top-rated movies
- Upcoming releases
- Popular movies
- Genre-based filtering
- Movie details and credits
- Search functionality
- Similar movie recommendations

## 🎨 Features in Detail

### Homepage
- **Trending Movies**: Weekly trending movies carousel
- **Top Rated**: Highest-rated movies section
- **Upcoming**: Soon-to-be-released movies
- **Popular**: Currently popular movies

### Movie Details
- **Comprehensive Information**: Plot, cast, crew, ratings
- **Media Gallery**: Trailers and video content
- **Similar Movies**: Recommendations based on current selection
- **Responsive Layout**: Optimized for all screen sizes

### Search Functionality
- **Real-time Search**: Instant results as you type
- **Pagination**: Browse through multiple pages of results
- **Error Handling**: Graceful handling of no results

## 🔧 Configuration

The application uses the TMDB API for movie data. The API key is configured in `src/components/script/FetchScript.js`.

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

This project is deployed on Netlify and can be accessed at:
**[https://watchflix-react.netlify.app/](https://watchflix-react.netlify.app/)**

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [React](https://reactjs.org/) for the amazing frontend framework
- [Font Awesome](https://fontawesome.com/) for the beautiful icons

## 📞 Contact

If you have any questions or suggestions, feel free to reach out!

---

## 🚀 Made with ❤️ by Najar Anas
