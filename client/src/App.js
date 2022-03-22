import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavigationBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
