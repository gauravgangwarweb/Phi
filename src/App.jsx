import DexButton from "./components/1DexButton";
import ContractAddress from "./components/ContractAddress";
import Navbar from "./components/Navbar";
import SwapCard from "./components/SwapCard";
import TabBar from "./components/TabBar";

function App() {
  return (
    <div className="bg-lightblue dark:bg-darkMain w-full flex flex-col items-center justify-center">
      <Navbar />
      {/* main page */}
      <>
        <TabBar />
        <DexButton />
        <SwapCard />
        <ContractAddress />
        <DexButton />
      </>
    </div>
  );
}

export default App;
