import TabBar from "../components/TabBar";
import DexButton from "../components/1DexButton";
import SwapCard from "../components/SwapCard";
import ContractAddress from "../components/ContractAddress";
import BottomTabBar from "../components/BottomTabBar";
import LineChart from "../components/LineChart";
const Home = () => {
  return (
    <div className="bg-lightblue dark:bg-darkMain w-full flex flex-col items-center justify-center">
      <TabBar />
      <DexButton />
      <SwapCard />
      <ContractAddress />
      <DexButton />
      <BottomTabBar />
      <LineChart />
    </div>
  );
};

export default Home;
