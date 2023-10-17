import logo from './logo.svg';

//Import all components
import Navigation from './components/Navigation'
import Home from './components/Home'
import ProductDescription from './components/ProductDescription'
import ColdEmails from './components/ColdEmails'
import Tweets from './components/Tweets'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <body>
      <div className="App">
      <Navigation/>

        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/product-description" exact element={<ProductDescription/>} />
          <Route path="/product-description" exact element={<ProductDescription/>} />
          <Route path="/cold-emails" exact element={<ColdEmails/>} />
          <Route path="/tweets" exact element={<Tweets/>} />
        </Routes>
      </div>
      </body>
    </Router>

  );
}

export default App;
