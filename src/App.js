import { useEffect } from "react";
import "./App.css";
import { Navbar, Carousel, Main } from "./components";
import { Modal } from "./components/modal/Modal";
import { useCurrency } from "./context/currencyContext";
import { useModal } from "./context/modalContext";
function App() {
  const { getCurrencyData } = useCurrency();
  const { isModalOpen } = useModal();
  useEffect(() => {
    getCurrencyData();
  }, []);
  return (
    <>
      {isModalOpen && <Modal />}
      <div
        className="App"
      >
        <div style={
          isModalOpen
            ? { 
              opacity: 0.3 ,pointerEvents: "none" }
            : {  pointerEvents: "auto",
            opacity: 1 }
        }>
        <Navbar />
        <Carousel />
        <Main />
        </div>
      </div>
    </>
  );
}

export default App;
