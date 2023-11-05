import { useRoutes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/page/Search";
import Playground from "./components/page/Playground";
import Result from "./components/page/Result";
import SignInPage from "./components/page/Client/SignIn";
import SignUpPage from "./components/page/Client/SignUp";
import ChooseCar from  "./components/ChooseCar";
import Pembayaran from "./components/page/Client/Pembayaran/PilihMetode";
import SelesaikanPembayaran from "./components/page/Client/Pembayaran/SelesaikanPembayaran";
import Ticket from "./components/page/Client/eTicket";




function App() {
  let element = useRoutes([
    { path: "/", element:<Layout />},
    { path: "find", element:<Search />},
    { path: "playground", element:<Playground />},
    { path: "result/:id", element:<Result />},
    { path: "sign-in", element:<SignInPage />},
    { path: "sign-up", element:<SignUpPage />},
    { path: "choose", element:<ChooseCar />},
    { path: "pembayaran/:id", element:<Pembayaran />},
    { path: "selesaikan-pembayaran", element:<SelesaikanPembayaran />},
    { path: "eticket", element:<Ticket />},


  ]);

  return element;
    
}

export default App;
