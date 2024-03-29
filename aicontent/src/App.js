import logo from './logo.svg';

//Import all components
import Navigation from './components/Navigation'
import Home from './components/Home'
import ProductDescription from './components/ProductDescription'
import ColdEmails from './components/ColdEmails'
import Tweets from './components/Tweets'
import InstaCaptions from './components/InstagramCaption';
import Names from './components/Names';
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
      <Navigation/>

        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/product-description" exact element={<ProductDescription/>} />
          <Route path="/insta-captions" exact element={<InstaCaptions/>} />
          <Route path="/cold-emails" exact element={<ColdEmails/>} />
          <Route path="/tweets" exact element={<Tweets/>} />
          <Route path="/names" exact element={<Names/>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
