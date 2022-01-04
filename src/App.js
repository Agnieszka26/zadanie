import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styledComponents from "styled-components";
import {createGlobalStyle} from "styled-components";

import Blog from "../src/components/Blog/Blog";
import Home from "../src/components/HomePage/Home";
import Users from "../src/components/Users/Users";

const GlobalStyle = createGlobalStyle`
body {
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    fontFamily: 'Roboto', sans-serif !important;
    margin:0;
    padding:0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
