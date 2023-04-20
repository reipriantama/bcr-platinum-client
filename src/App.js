import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/Home';
import Search from './components/page/Search';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
        <Route path='find' element={<Search />} />
    </Routes>
    </>
  );
}

export default App;
