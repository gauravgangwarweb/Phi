import React from "react";
import BottomTabBar from "../components/BottomTabBar";

const AboutUs = () => {
  return (
    <div className="bg-lightblue dark:bg-darkMain dark:text-white w-full flex flex-col items-center justify-center md:px-28 pb-20">
      {/* hero-section */}
      <div className="hero-bg text-white rounded-b-3xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2 px-10 pb-32 md:pb-16 mt-8 md:mt-0">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[28px] md:text-5xl font-bold leading-tight hero-text">
              IDEX - Unlimited Gains with Investment Protection
            </h2>
            <p className="text-xl md:text-2xl font-bold pr-16 md:pr-32 mt-6 md:mt-4">
              Enjoy our patent-filed IDEX, providing consistent, unlimited gains
              while protecting your investment
            </p>
            <button className="self-start py-2 px-5 trade-button flex gap-2 rounded-md b-1 text-lg font-bold mt-6 md:mt-4">
              Connect Wallet
            </button>
          </div>
          <div className="md:pl-20 mt-16">
            <img loading="lazy" src="hero-img.png" alt="hero-img" />
          </div>
        </div>
        <div className="absolute -bottom-10 -left-24 md:left-24 overflow-hidden">
          <div className="logos-bar p-1">
            <div className="border px-6 py-4">
              <div className="flex justify-between gap-10 items-center">
                <img loading="lazy" src="huoui-global.png" alt="huoui-icon" />
                <img
                  loading="lazy"
                  src="arrington-capital.png"
                  alt="arrington-icon"
                />
                <img
                  loading="lazy"
                  src="skynet-trading.png"
                  alt="skynet-icon"
                />
                <img
                  loading="lazy"
                  src="ascensive-assets.png"
                  alt="ascensive-icon"
                />
                <img
                  loading="lazy"
                  src="morningstar.png"
                  alt="morningstar-icon"
                />
                <img
                  loading="lazy"
                  src="skyvision-capital.png"
                  alt="skyvision-icon"
                />
                <img loading="lazy" src="lvt-capital.png" alt="lvt-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* purple-box-text */}
      <div className="px-2 md:px-0 mt-20">
        <div className="w-full trade-button rounded-2xl p-5">
          <p className="text-white text-xl text-justify font-medium tracking-tight">
            1DEX introduces Fair DEX, a groundbreaking concept in decentralized
            exchanges. We want to protect traders from false promises and market
            manipulations, such as pump and dump schemes. Our system aims to
            create profit opportunities for every participant. 1DEX ensures
            constant liquidity, eliminating trading barriers. Fair DEX
            encourages confident and patient trading. Increased trading activity
            contributes to sustained price appreciation. Experience a new
            standard in fair and transparent trading with 1DEX - your long-term
            partner in the evolving world of decentralized finance
          </p>
        </div>
      </div>
      {/* group-cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
        {/* card-1 */}
        <div className="flex flex-col items-center dark:hero-bg rounded-lg p-4">
          <img loading="lazy" src="invest.png" alt="invest" />
          <h4 className="text-2xl font-bold text-[#20202c] dark:text-white text-center mt-4">
            Continuous Gains
          </h4>
          <h6 className="text-lg font-bold text-[#6943e0] mt-2">
            Enjoy the Assured Growth
          </h6>
          <p className="text-lg text-[#000154] dark:text-gray-50 mt-2 text-center px-4">
            Our unique tokenomics gaurantees every trade increases the price of
            the token for all participants
          </p>
        </div>
        {/* card-2 */}
        <div className="flex flex-col items-center dark:hero-bg rounded-lg p-4">
          <img loading="lazy" src="invest.png" alt="invest" />
          <h4 className="text-2xl font-bold text-[#20202c] dark:text-white text-center mt-4">
            Your Money is Protected
          </h4>
          <h6 className="text-lg font-bold text-[#6943e0] mt-2">
            Trade with Confidence
          </h6>
          <p className="text-lg text-[#000154] dark:text-gray-50 mt-2 text-center px-4">
            Beyond entry and exit fixed operational costs, your investment is
            protected to never decrease in value, regardless of any market
            conditions or any other circumstances
          </p>
        </div>
        {/* card-3 */}
        <div className="flex flex-col items-center dark:hero-bg rounded-lg p-4">
          <img loading="lazy" src="invest.png" alt="invest" />
          <h4 className="text-2xl font-bold text-[#20202c] dark:text-white text-center mt-4">
            Liquidity is Guaranteed
          </h4>
          <h6 className="text-lg font-bold text-[#6943e0] mt-2">
            Get Paid at Every Sale Without Worry
          </h6>
          <p className="text-lg text-[#000154] dark:text-gray-50 mt-2 text-center px-4">
            Our patented 1DEX ensures 100% liquidity under all conditions
          </p>
        </div>
        {/* card-4 */}
        <div className="flex flex-col items-center dark:hero-bg rounded-lg p-4">
          <img loading="lazy" src="invest.png" alt="invest" />
          <h4 className="text-2xl font-bold text-[#20202c] dark:text-white text-center mt-4">
            Huge Income Through Referral
          </h4>
          <h6 className="text-lg font-bold text-[#6943e0] mt-2">
            Build Wealth through Referrals
          </h6>
          <p className="text-lg text-[#000154] dark:text-gray-50 mt-2 text-center px-4">
            Continuous recurring 5% income for every trade made by your
            referrals, FOREVER
          </p>
        </div>
      </div>
      {/* how-idex */}
      <div className="mt-16">
        <h2 className="text-3xl md:text-[42px] text-center font-bold md:leading-normal">
          How 1DEX Works?
        </h2>
        <p className="text-xl text-center font-medium mt-10 md:mt-4 px-4 md:px-0">
          Our patented technology ensures price increases regardless of market
          conditions, offering unlimited growth and the potential to outperform
          top cryptocurrencies. Follow our suggested trading guidelines to
          ensure profits
        </p>
      </div>
      {/* refferal-section */}
      <div className="w-full self-start px-4 md:px-0 mt-28">
        <h2 className="text-3xl md:text-[42px] font-bold md:leading-normal">
          Beating the Top Cryptos : Unprecedented <br /> Future Growth of 1DEX
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-10">
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-xl font-bold">5% Commission</h4>
              <p className="text-lg">On every trade your referrals make</p>
            </div>
            <div>
              <h4 className="text-xl font-bold">Dual Rewards</h4>
              <p className="text-lg">Profit from both buy and sell trades</p>
            </div>
            <div>
              <h4 className="text-xl font-bold">Unlimited Potential</h4>
              <p className="text-lg">No cap on referrals or earnings</p>
            </div>
            <div>
              <h4 className="text-xl font-bold">Passive Income</h4>
              <p className="text-lg">Refer once and earn continuously from your network</p>
            </div>
            <div>
              <h4 className="text-xl font-bold">Easy Tracking</h4>
              <p className="text-lg">Monitor earnings in real-time</p>
            </div>
          </div>
          <div className="flex justify-end mt-10 md:mt-0">
            <img
              className="w-full"
              loading="lazy"
              src="image.png"
              alt="commitment"
            />
          </div>
        </div>
      </div>
      <BottomTabBar />
    </div>
  );
};

export default AboutUs;
