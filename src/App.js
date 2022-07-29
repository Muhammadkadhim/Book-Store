import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="container md:w-10/12 md:mx-auto">
            <Navbar />
            <Hero />
        </div>
    );
}

export default App;
