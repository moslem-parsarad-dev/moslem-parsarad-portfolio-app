import Home from "./components/Home";
import About from './components/About';
import NotFound from "./components/NotFound";
import AnimatedCursor from "react-animated-cursor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
      <div>
          <AnimatedCursor
              innerSize={8}
              outerSize={8}
              color='20,20,20'
              outerAlpha={0.2}
              innerScale={0.7}
              outerScale={5}
              clickables={[
                  'a',
                  'input[type="text"]',
                  'input[type="email"]',
                  'input[type="number"]',
                  'input[type="submit"]',
                  'input[type="image"]',
                  'label[for]',
                  'select',
                  'textarea',
                  'button',
                  '.link'
              ]}
          />
          <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={<Home/>}/>
                  <Route path={"/about"} element={<About />}/>
                  <Route path={"/contact"} element={<Contact />}/>
                  <Route path={'*'} element={<NotFound />}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
