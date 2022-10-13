import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsGallery from "./components/NewsGallery/NewsGallery";
import SingleStory from "./components/SingleStory/SingleStory";

function App() {
  const [newsArticles, setArticleData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((res) => {
        const ids = res.data.filter((id, index) => {
          if (index < 20) {
            return id;
          }
        });
        console.log(ids);
        axios
          .all(
            ids.map((id) =>
              axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            )
          )
          .then((data) => {
            const articles = data.flat().map((item) => item.data);
            setArticleData(articles);
            setLoading(false);
          });
      });
  }, []);

  console.log(newsArticles);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <NewsGallery isLoading={isLoading} newsArticles={newsArticles} />
            }
          />
          <Route
            path="/:id"
            element={<SingleStory newsArticles={newsArticles} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
