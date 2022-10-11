import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NewsGallery from "./components/NewsGallery/NewsGallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NewsGallery />} />
          {/* <Route
            path="/:id"
            element={<SingleStory />}
          /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
