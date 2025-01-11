import { useRef } from "react";
import { FaRegUserCircle } from "react-icons/fa";

const SentimentComponent = ({tabs, sectionRefs }) => {

  return (
    <div key={tabs.Sentiments} ref={sectionRefs.Sentiments} className="p-6 bg-white my-5 rounded shadow-lg font-sans">
      <h2 className="text-xl font-semibold mb-4">Sentiment on Ethereum</h2>

      {/* Key Events Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Key Events</h3>
        <div className="md:flex gap-4 overflow-x-auto">
          {/* Blue Card */}
          <div className="flex items-start bg-blue-100 p-4 rounded-lg md:min-w-[40vw] my-2">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white font-bold rounded-full mr-3">
              <FaRegUserCircle className="h-8 w-8"/>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">
                Ethereum 2.0 Launch
              </h4>
              <p className="text-gray-600 text-sm">
                Ethereum's transition to Proof-of-Stake (PoS) with the launch of Ethereum 2.0 has generated significant interest. This move aims to make Ethereum more scalable, secure, and sustainable. The Ethereum 2.0 upgrade is expected to significantly reduce energy consumption and enhance the overall network performance.
              </p>
            </div>
          </div>

          {/* Green Card */}
          <div className="flex items-start bg-green-100 p-4 rounded-lg md:min-w-[40vw] my-2">
            <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white font-bold rounded-full mr-3">
              <FaRegUserCircle className="h-8 w-8"/>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">
                Institutional Adoption of Ethereum
              </h4>
              <p className="text-gray-600 text-sm">
                Institutional interest in Ethereum has surged in recent months. Major financial institutions and corporations are integrating Ethereum's blockchain technology for various applications, including decentralized finance (DeFi), smart contracts, and NFTs. This adoption could drive the price and utility of Ethereum to new heights.
              </p>
            </div>
          </div>

          {/* Green Card */}
          <div className="flex items-start bg-green-100 p-4 rounded-lg min-w-[40vw] my-2">
            <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white font-bold rounded-full mr-3">
              <FaRegUserCircle className="h-8 w-8"/>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">
                Ethereum's Role in DeFi Growth
              </h4>
              <p className="text-gray-600 text-sm">
                Ethereum remains the backbone of the decentralized finance (DeFi) ecosystem. With smart contracts enabling financial applications without intermediaries, Ethereum has become the preferred blockchain for DeFi projects. The rise of decentralized exchanges (DEXs), lending protocols, and yield farming platforms continues to fuel the growth of Ethereum's ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Analyst Estimates Section */}
      <div className="">
        <h3 className="text-lg font-medium mb-4">Analyst Estimates</h3>
        <div className="flex items-center gap-6">
          {/* Circle Chart */}
          <div className="relative flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 font-semibold rounded-full">
            85%
          </div>

          {/* Bars */}
          <div className="flex-1">
            {/* Buy Bar */}
            <div className="flex items-center mb-4">
              <span className="w-16 text-sm font-medium">Buy</span>
              <div className="flex-1 bg-gray-200 h-2 rounded-lg overflow-hidden">
                <div className="bg-green-500 h-2" style={{ width: '85%' }}></div>
              </div>
            </div>

            {/* Hold Bar */}
            <div className="flex items-center mb-4">
              <span className="w-16 text-sm font-medium">Hold</span>
              <div className="flex-1 bg-gray-200 h-2 rounded-lg overflow-hidden">
                <div className="bg-yellow-400 h-2" style={{ width: '10%' }}></div>
              </div>
            </div>

            {/* Sell Bar */}
            <div className="flex items-center">
              <span className="w-16 text-sm font-medium">Sell</span>
              <div className="flex-1 bg-gray-200 h-2 rounded-lg overflow-hidden">
                <div className="bg-red-500 h-2" style={{ width: '5%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentComponent;
