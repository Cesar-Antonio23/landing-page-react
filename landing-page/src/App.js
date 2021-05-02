
import './App.css';
import Nav1 from './components/navBar'
import Jumbo from './components/jumbotron'
import Cards from './components/card'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Nav1/>
      <Jumbo/>
      <Cards/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
