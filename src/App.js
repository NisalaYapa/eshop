import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Checkout route */}
          <Route path="/checkout" 
            element={(
              <>
                <Header />
                <Checkout />
              </>
            )}
          />

          {/* Home route */}
          <Route path="/" 
            element={(
              <>
                <Header />
                <Home />
              </>
            )}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
