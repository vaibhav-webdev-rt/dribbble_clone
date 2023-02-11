import './App.css';
import { Header } from './Components/Header/Header';
import { Cards } from './Components/Cards/Cards';
import { ScrollTopButton } from './Components/ScrollTop/ScrollTopButton';
import Footer from './Components/Footer/Footer';
import { Filter } from './Components/Filter/Filter';
import { Hero } from './Components/Hero/Hero';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Filter/>
      <Cards/>
      <ScrollTopButton />
      <Footer/>
    </div>
  );
}

export default App;
