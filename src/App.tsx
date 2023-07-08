import React from 'react';
import {NavBar} from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import {Course} from "./screens/Course";
import {Auth} from "./screens/Auth";
import {About} from "./screens/About";
import {Galery} from "./screens/Galerie";
import {Home} from "./screens/Home";

function App() {
  return (
    <>
      <NavBar/>
      <div style={{paddingTop: 110, height: '100vh'}}>
        <Routes>
          <Route path="cours" element={<Course/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Course/>}/>
          <Route path="galerie" element={<Galery/>}/>
          <Route path="auth" element={<Auth/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
