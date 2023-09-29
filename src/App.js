import Home from "./Component/Home";
import Home2 from "./Component/Home2";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home3 from "./Component/Home3";
import NavBar from "./Component/NavBar";
import OlxHome from "./Component/OLX/OlxHome";
import OlxUpload from "./Component/OLX/OlxUpload";
import { AuthProvider } from "./Context.js/ContexT";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <NavBar />
          <br />
          <br />
          <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/getinshop" element={<Home />} />
            <Route path="/olx" element={<OlxHome />} />
            <div>hi</div>
            <Route path="/upload" element={<OlxUpload />} />

          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
