import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Privateroute from './components/Privateroute';
import UserDashboard from './pages/UserDashboard';
import Us from './pages/Us';
import CodeChef from './pages/CodeChef';
import Leetcode from './pages/LeetCode';
import About1 from './pages/About1';
import Login1 from './pages/Login1';
import Register from './pages/Register';
import Contact1 from './pages/Contact1';
import Video from './pages/Video';
import Video1 from './pages/Video1';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    {/* <Route path="/login" element={<Login/>}></Route> */}
    <Route path="/register" element= { <Register/>} />
    <Route path="/login1" element= { <Login1/>} />
    <Route path="/contact" element={<Us/>}></Route>
    <Route path="/code" element={<CodeChef/>}></Route>
    <Route path="/contact1" element={<Contact1/>}></Route>
    <Route path="/about1" element={<About1/>}></Route>
    <Route path="/leet" element={<Leetcode/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/video" element={<Video/>}></Route>
    <Route path="/video1" element={<Video1/>}></Route>
    <Route path="/user" element={<Privateroute/>}>
      <Route path="dashboard" element={<UserDashboard/>}></Route>
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
