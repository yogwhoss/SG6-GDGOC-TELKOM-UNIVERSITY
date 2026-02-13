import { HashRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Todo from "./pages/Todo";
import Navbar from "./assets/components/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
