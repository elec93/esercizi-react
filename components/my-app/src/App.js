import React from "react";
import GithubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";
import HookCounter from "./HookCounter";
import {Routes, Route} from "react-router-dom"
import Welcome from "./Welcome"
import Container from "./Container";
import Login from "./Login";
import Catalogue from "./Catalogue";
export function App (){
  
    return (
      <Container>
       <Routes >
       <Route path="/:name" element={<Welcome />}/>
       <Route path="Login" element={<Login />}/>
       <Route path="products" element={<Catalogue />}/>

       </Routes>
      </Container>
    );
}

export default App;
