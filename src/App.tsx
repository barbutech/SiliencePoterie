import React from 'react';
import {NavBar} from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import {Course} from "./screens/Course";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="cours" element={<Course/>}/>
      </Routes>
    </>
  );
}

export default App;
