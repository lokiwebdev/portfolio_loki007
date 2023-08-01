import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/layout/Header"
import Features from "./component/pages/Features/Features"
import Home from "./component/pages/Hero/Home"
import Portfolio from "./component/pages/Portfolio/Portfolio"
import Resume from "./component/pages/Resume/Resume"
import Testimonial from "./component/pages/Testimonial/Testimonial"
import Blog from "./component/pages/Blog/Blog"
import Contact from "./component/pages/Contact/Contact"
import Footer from "./component/layout/Footer"
import "./App.css"
import BackToTopBtn from "./component/BackToTopBtn"
import Errorpage from "./component/Errorpage";

import Projects from "./component/pages/projectPage/Projects";
import Calculator from "./component/projects/calculator/Calculator";
import Todo from "./component/projects/todo/TodoList";
import TodoPage from "./component/projects/todo2/TodoPage";
import Clock from "./component/projects/clock/Clock";



const App = () => {
  return (
    <Router>
      <>
        <Header />
        {/* <Home /> */}
        <div className="main">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/features" exact element={<Features />} />
            <Route path="/portfolio" exact element={<Portfolio />} />
            <Route path="/resume" exact element={<Resume />} />
            <Route path="/clients" exact element={<Testimonial />} />
            <Route path="/blog" exact element={<Blog />} />
            <Route path="/contact" exact element={<Contact />} />

            <Route path="/projects" exact element={<Projects />} />
            <Route path="/calculator" exact element={<Calculator />} />
            <Route path="/todo" exact element={<Todo />} />
            <Route path="/todofb" exact element={<TodoPage />} />
            <Route path="/clock" exact element={<Clock />} />

            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
        <BackToTopBtn />
        <Footer />

      </>
    </Router>
  )
}

export default App
