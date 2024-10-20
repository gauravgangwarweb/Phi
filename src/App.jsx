import DexButton from "./components/1DexButton";
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
      </>
    </div>
  );
}

export default App;
