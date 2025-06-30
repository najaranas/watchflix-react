import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import React, { useEffect, useState } from "react";
import {
  CategoriesData,
  MovieDetailsData,
} from "./components/script/FetchScript";
import Genre from "./components/Genre/Genre";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFOund/PageNotFOund";
import SearchMovie from "./components/SearchMovie/SearchMovie";

function App() {
  const [categories, setCategories] = useState(null);
  const [pathName, setPathName] = useState(null);
  const [nextData, setNewData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const Categories = await CategoriesData();
        setCategories(Categories.genres);
      } catch (error) {
        console.error("Error fetching Categories data:", error);
      }
    }

    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  if (!categories) {
    return (
      <div className="nav-bar">
        <div className="icon">
          <i className="fa-solid fa-circle-notch circle-animation active "></i>
        </div>{" "}
      </div>
    );
  }

  const UpdatePathName = (name) => {
    setPathName(name);
  };

  const UpdateData = (id) => {
    async function fetchData() {
      try {
        const movieDetails = await MovieDetailsData(id);
        setNewData(movieDetails);
      } catch (error) {
        console.error("Error fetching movie Details data:", error);
      }
    }
    setTimeout(() => {
      fetchData();
    }, 2000);
  };

  function Layout({ children }) {
    const location = useLocation();
    const isNotFoundPage = location.pathname === "*";

    return (
      <div className="main-container">
        <Header />
        <div className="main-page">
          {!isNotFoundPage && <NavBar categories={categories} />}
          {children}
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Main UpdatePathName={UpdatePathName} UpdateData={UpdateData} />
            </Layout>
          }
        />
        {categories.length ? (
          categories.map((item) => {
            const path = "/" + item.name.toLowerCase().replace(/ /g, "-");
            return (
              <Route
                key={item.id}
                path={path}
                element={
                  <Layout>
                    <Genre
                      title={item.name}
                      genreId={item.id}
                      UpdatePathName={UpdatePathName}
                      UpdateData={UpdateData}
                    />
                  </Layout>
                }
              />
            );
          })
        ) : (
          <span>No Categories Found</span>
        )}
        <Route
          path={`/search`}
          element={
            <Layout>
              <SearchMovie
                UpdatePathName={UpdatePathName}
                UpdateData={UpdateData}
              />
            </Layout>
          }
        />
        <Route
          path={`/movies/${pathName}`}
          element={
            <Layout>
              <MovieDetails
                pathName={pathName}
                UpdatePathName={UpdatePathName}
                data={nextData}
                UpdateData={UpdateData}
              />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <div className="main-container">
              <Header />
              <PageNotFound />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
