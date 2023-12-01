import "./App.css";
import UserPage from "./Components/UserPage";
// import AddItem from "./Components/add-item/AddItem";
// import Login from "./Components/auth/login";
// import Signup from "./Components/auth/signup";
// import Items from "./Components/dashboard/Items";
// import Holemenue from "./Components/holemenue";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserPage />} />
          {/* <Route path="/admin-items-table" element={<Items />} />
          <Route path="/add-item/:id" element={<AddItem />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/menu" element={<Holemenue />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
