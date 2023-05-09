import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { AdDesigner } from './components/AdDesigner/AdDesigner';
import { Votes } from './components/Votes/Votes';
import { ArraysEx } from './components/ArraysEx/ArraysEx';
import { Typing } from './components/Typing/Typing';
import { Shapes } from './components/Shapes/Shapes';
import { SocialPosts } from './components/SocialPosts/SocialPosts';
import { Home } from './components/Contacts/Home';

function App() {
  return (
    // 1st Assignment
    // <div className="App">
    //   <Header user = "Chirpus"></Header>
    //   <div className="main">
    //     <AdDesigner></AdDesigner>
    //     <Votes></Votes>
    //   </div>
    // </div>

    // second assignment
    //<ArraysEx></ArraysEx>

    //third assignment
    //<Typing></Typing>

    //4th Assignment
    //<Shapes></Shapes>

    // SocialPosts Assignment
    //<SocialPosts></SocialPosts>

    // Contacts Assignment
    <Home></Home>


  );
}

export default App;
