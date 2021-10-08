import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";



/// Redux is a library that helps us to manage our state globally

function App() {
  return (
    <div className="App">

      <Header/>

      <Home/>

      <Footer/>
    
    </div>
  );
}

export default App;
