import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { SearchPage, ShowPage } from "./pages";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/show" element={<ShowPage />}  />
        </Routes>
    </Router>
  );
}

export default App;
