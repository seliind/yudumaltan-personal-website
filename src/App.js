import { BrowserRouter, Route, Routes, HashRouter} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import References from "./pages/References";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogDetails1 from "./components/BlogDetails-1";
import BlogDetails2 from "./components/BlogDetails-2";

function App() {
  return (
    <>
      <HashRouter>
       <Routes basename="/">
       <Route path="/" element={<Home/>}/>
       <Route path="/" element={<Layout/>}>
       <Route path="/referanslar" element={<References/>}/>
       <Route path="/hakkinda" element={<About/>}/>
       <Route path="/iletisim" element={<Contact/>}/>
       <Route path="/TSK-Yüksek-Disiplin-Kurulunda-Savunma" element={<BlogDetails1/>}/>
       <Route path="/lyrica-satmak-veya-kullanmak-suç-mu" element={<BlogDetails2/>}/>
       </Route>
       </Routes>
       <Footer/>
      </HashRouter>
    </>
  );
}

export default App;
