import Header from "./components/Header";
import Footer from "./components/Footer";
import './scss/style.scss'
import {Route , Routes} from "react-router-dom";
import Concerts from "./pages/Concerts";
import Entrance from "./pages/Entrance";
import Kids from "./pages/Kids";
import Music from "./pages/Music";
import Fair from "./pages/Fair";
import Sport from "./pages/Sport";
import Performances from "./pages/Performances";
import Movie from "./pages/Movie";
import Exhibitions from "./pages/Exhibitions";
import Miscellaneous from "./pages/Miscellaneous";
import Painting from "./pages/Painting";
import Main from "./components/Main";
import Company from "./components/Company";
import Contact from "./components/Contact";
import CardDetails from "./components/CardDetails";
import Order from "./pages/Order";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Main/>
            <Routes>
                <Route path="/entrance" element={<Entrance/>}/>
                <Route path="/kids" element={<Kids/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/fair" element={<Fair/>}/>
                <Route path="/sport" element={<Sport/>}/>
                <Route path="/performances" element={<Performances/>}/>
                <Route path="/concerts" element={<Concerts/>}/>
                <Route path="/movie" element={<Movie/>}/>
                <Route path="/exhibitions" element={<Exhibitions/>}/>
                <Route path="/miscellaneous" element={<Miscellaneous/>}/>
                <Route path="/painting" element={<Painting/>}/>
                <Route path="/company" element={<Company/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/cardDetails" element={<CardDetails/>}/>
                <Route path="/order" element={<Order/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
