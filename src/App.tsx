import React from 'react';
import {NavBar} from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import {Course} from "./screens/Course";
import {Auth} from "./screens/Auth";

function App() {
  return (
    <>
      <NavBar/>
      <div style={{paddingTop: 110, height: '100vh'}}>
        <Routes>
          <Route path="cours" element={<Course/>}/>
          <Route path="home" element={<Course/>}/>
          <Route path="about" element={<Course/>}/>
          <Route path="contact" element={<Course/>}/>
          <Route path="auth" element={<Auth/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
