import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChatRoom from './components/ChatRoom/ChatRoom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
        <Switch>
          <Route path="/" exact render={(routerprops) => <Home routerprops={routerprops}/>} />
          <Route path="/chat/:language" exact render={(routerprops) => <ChatRoom routerprops={routerprops}/>}/>
          <Route path="/about" exact component={() => <About />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;