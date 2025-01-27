import { Navbar } from "./components/Navbar.jsx";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default App;
