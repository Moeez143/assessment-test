import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
