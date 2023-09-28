import { useRoutes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/Home';
import Search from './components/page/Search';
import Playground from './components/page/Playground';
import Result from './components/page/Result';
import Login from './components/page/Admin/Login';
import DashboardAdmin from './components/page/Admin/Dashboard';
import AddCar from './components/page/Admin/AddCar';
import EditCar from './components/page/Admin/EditCar';
import ProtectedRouteAdmin from './components/page/Admin/ProtectedRouteAdmin';
import Register from './components/page/Admin/Registration/';

// Protected Route



function App() {
  let element = useRoutes([
    { path: "/", element:<Layout />},
    { path: "find", element:<Search />},
    { path: "playground", element:<Playground />},
    { path: "result/:id", element:<Result />},
    { path: "register", element:<Register />},


    // for admin role
    { path: "login-admin", element:<Login />},
    { path: "dashboard", element:<ProtectedRouteAdmin> <DashboardAdmin /> </ProtectedRouteAdmin> },
    { path: "add-car", element:<ProtectedRouteAdmin> <AddCar /> </ProtectedRouteAdmin>},
    { path: `edit-car/:id`, element:<ProtectedRouteAdmin> <EditCar /> </ProtectedRouteAdmin>},
  ])

  return element;
    // <>
    // <Routes>
    //   <Route path="/" element={<Layout />} />
    //     <Route path='find' element={<Search />} />
    //     <Route path='playground' element={<Playground />} />
    //     <Route path='result/:id' element={<Result />} />

    //     {/* for Admin Role */}
    //     <Route path='login-admin' element={<Login />} />
    //     <Route path='dashboard' element={<DashboardAdmin />} />
    //     <Route path='add-car' element={<AddCar />} />
    //     <Route path='edit-car/:id' element={<EditCar />} />

    // </Routes>
    // </>
}

export default App;
