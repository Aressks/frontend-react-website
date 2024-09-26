import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="page-container">
      <Navbar />
      <main className="content"></main>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
