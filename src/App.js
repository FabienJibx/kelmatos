import './App.css';
import Site from "./containers/Site/Site";
import {BrowserRouter} from "react-router-dom";

//avec la fonction suivante j'indique le systéme de routage
function App() {
  return (
    <div>
      <BrowserRouter>
        <Site />
      </BrowserRouter>   
    </div>
  );
}

export default App;
