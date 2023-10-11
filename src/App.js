import Header from "./components/header";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
