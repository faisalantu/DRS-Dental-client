import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import { Toaster } from "react-hot-toast";
import Blog from "./components/Blog/Blog";
import RequiredAuth from "./components/RequiredAuth/RequiredAuth";
import Checkout from "./components/CheckOut/Checkout";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Toaster />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/blogs' element={<Blog />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route
          path='/checkout/:id'
          element={
            <RequiredAuth>
              <Checkout></Checkout>
            </RequiredAuth>
          }
        ></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
