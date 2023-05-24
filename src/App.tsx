import React, { useState } from 'react';
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
import { getAll } from './services/FirstService';
import { CompleteFame } from './models/CompleteFame/CompleteFame';
import { useEffect } from 'react';
import { getAllWeather } from "./services/WeatherService"
import { WeatherForcast } from './components/WeatherForcast/WeatherForcast';
import { Quotes } from './components/Quotes/Quotes';
import { Navigate, Route , Routes} from 'react-router-dom';
import { First } from './components/Routing/First';
import { Second } from './components/Routing/Second';
import { Dog } from './components/Routing/Dog';
import { Cat } from './components/Routing/Cat';


function App() {

  // fames assignment
  // const [ fames, setFames] = useState<CompleteFame[]>();  
  // useEffect (() => {
  //   getAll().then(data => setFames(data.complete));
  // },[])


  return (

    <div className="App">
        {<Routes>
          <Route path="/dog" element={<Dog />} />
          <Route path="/Cat" element={<Cat />} />
          <Route path="*" element={<Navigate to="/Cat" />} />
        </Routes>}
    </div>


    // first, second Routes assignment
    // <div className="App">
    //     {<Routes>
    //       <Route path="/" element={<First />} />
    //       <Route path="/second" element={<Second />} />
    //       <Route path="*" element={<Navigate to="/first" />} />
    //     </Routes>}
    // </div>

    // WeatherForcast Asignment 
    // <div className="App">
    //   <WeatherForcast></WeatherForcast>
    // </div>

    // quotes assignment
    // <div className="App">
    //   <Quotes></Quotes>
    // </div>

    // fames API Call
    // <div className="App">
    //   {fames?.map(fame => <h3>{fame.firstName} {fame.lastName}</h3>)}
    // </div>

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
    //<Home></Home>


  );
}

export default App;
