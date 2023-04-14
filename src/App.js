import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import References from "./pages/References";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
       <Routes basename="/">
       <Route path="/" element={<Home/>}/>
       <Route path="/" element={<Layout/>}>
       <Route path="/referanslar" element={<References/>}/>
       <Route path="/hakkinda" element={<About/>}/>
       <Route path="/iletisim" element={<Contact/>}/>
       </Route>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
