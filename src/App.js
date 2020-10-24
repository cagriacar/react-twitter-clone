import React from 'react';
import  {Sidebar,Feed,Widgets} from './components'

import './App.css';

function App() {
  return (
    <div className="app">
      {/* SideBar */}
    <Sidebar />
    {/*  Feed -> TweetBox - Post */}
    <Feed />
    {/* Widgets */}
    <Widgets />
    </div>
  );
}

export default App;