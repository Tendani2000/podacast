import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Podcast from './components/Podcast';
import { Carousel } from './Carousel';

function App() {
  return (
    <div>
      <Header/>
      <Search />
      <Carousel/>
      <Podcast/>
    </div>
  );
}

export default App;
