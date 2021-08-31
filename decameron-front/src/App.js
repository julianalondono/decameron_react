import React from 'react';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';  


class App extends React.Component {
    render() {
        return (  
          <div className="App">
          <Header />
          <Footer />    
          </div>
        );
    }
}

export default App;