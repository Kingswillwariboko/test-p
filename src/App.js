import './App.css';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Services from './components/services/Services';

const App = () =>{
  return(
    <div>
      <Navigation />
      <Services />
      <Features />
      <Footer />
    </div>
  )
}
export default App;
