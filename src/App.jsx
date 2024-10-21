import DexButton from "./components/1DexButton";
import BottomTabBar from "./components/BottomTabBar";
import ContractAddress from "./components/ContractAddress";
import LineChart from "./components/LineChart";
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
        <BottomTabBar />
        <LineChart />
      </>
    </div>
  );
}

export default App;
