import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/Home';
import Search from './components/page/Search';
import Playground from './components/page/Playground';
import Result from './components/page/Result';
import Login from './components/page/Admin/Login';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
        <Route path='find' element={<Search />} />
        <Route path='playground' element={<Playground />} />
        <Route path='result/:id' element={<Result />} />

        {/* for Admin Role */}
        <Route path='login' element={<Login />} />

    </Routes>
    </>
  );
}

export default App;
