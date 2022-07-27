import './App.css';
import Features from './components/features/Features';
import Navigation from './components/Navigation/Navigation';
import Services from './components/services/Services';

const App = () =>{
  return(
    <div>
      <Navigation />
      <Services />
      <Features />
    </div>
  )
}
export default App;
