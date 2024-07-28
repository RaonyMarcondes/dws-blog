import { Routes, Route, useLocation } from "react-router-dom";

import Posts from "./Pages/Posts";
import Details from "./Pages/Details";

const App = () => {
  const location = useLocation();

  return (
    <div className="content">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
