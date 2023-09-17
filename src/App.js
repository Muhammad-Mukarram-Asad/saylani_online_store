import logo from "./logo.svg";
import "./App.css";
import GetStarted from "./commonScreens/getStarted/GetStarted";
import AccountSignUp from "./commonScreens/signUp/AccountSignUp";
import AccountSignIn from "./commonScreens/signIn/AccountSignIn";
import Home from "./adminScreens/adminHome/Home";
import AddItem from "./adminScreens/adminAddItem/AddItem";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/signUp" element={<AccountSignUp />} />
        <Route path="/signIn" element={<AccountSignIn />} />
        <Route path="/adminHome" element={<Home />} />
        <Route path="/adminAddItem" element={<AddItem />} />
      </Routes>
    </div>
  );
}

export default App;
