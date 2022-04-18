import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
