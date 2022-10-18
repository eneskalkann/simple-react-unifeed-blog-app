import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from "./components/Navbar"
import Summary from './components/Summary';
import {motion} from 'framer-motion'


function App() {
    return (
        <motion.div className="App"
        viewport={{once : false}}
        initial={{opacity :0 , x:50}}
        whileInView={{opacity:1 , x:0}}
        transition={{type:"easeIn" , duration:.15 , delay:.15}}
        >
            <Navbar />
            <Main/>
            <Summary/>
            <Footer/>
        </motion.div>
    );
}

export default App;
