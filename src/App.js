import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./component/Home";
import Page404 from "./component/Page404";
import About from "./component/About";

function App() {
  return (
    <div className="App">
        <BrowserRouter >
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
