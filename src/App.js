import './App.css';
import Home from './Components/Home';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
}

export default App;
