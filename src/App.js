import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from "./components/Navbar"
import Summary from './components/Summary';


function App() {
    return (
        <div className="App">
            <Navbar />
            <Main/>
            <Summary/>
            <Footer/>
        </div>
    );
}

export default App;
