import Header from "./components/header";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navigation from "./components/navigation";
import Banner from "./components/banner";
import Profil from "./components/profil";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <Profil />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
