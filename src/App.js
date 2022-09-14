import './App.css';
import EventsList from './features/specialevents/EventsList';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <EventsList />
      <Footer />
    </div>
  );
}

export default App;