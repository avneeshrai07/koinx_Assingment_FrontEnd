import useFetchCoinData from "../hooks/useFetchCoinData";
import TradingViewWidget from "./TradingViewWidget";

const CoinHero = () => {
  const { data, loading, error } = useFetchCoinData();
  return (
    <div className="md:p-4 md:bg-white rounded">
        <div className="flex gap-2 items-center">
            <img className="h-12 w-10" src=" https://imgs.search.brave.com/bkORZEgcsOS5tR0Fd-4_O_j7eOl_-OSK5nbdYXmtv-U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzA1L0V0aGVyZXVt/X2xvZ29fMjAxNC5z/dmc" alt="" />
            <h1 className="text-2xl font-bold">ethereum</h1>
            <p className="text-gray-600">(ETH)</p>
            <div className="bg-gray-200 p-1 rounded mx-5">
                Rank #2
            </div>
        </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="bg-white pb-10 rounded p-4 my-5">
      {data && (
        <div className="mb-4">
            <div className="flex gap-5 items-center">
                <p className="text-2xl font-bold">
                  ${data.ethereum.usd.toLocaleString("en-US")}
                </p>
                <p className={`p-1 rounded-md ${
                    data.ethereum.usd_24h_change > 0
                    ? 'bg-green-50 text-green-600'
                    : 'bg-red-50 text-red-600'
                }`}>
                    {data.ethereum.usd_24h_change.toFixed(2)}%
                </p>
                <p className="text-gray-500">(24H)</p>
            </div>
          <p className="text-gray-700">
            ₹{data.ethereum.inr.toLocaleString("en-IN")}
            </p>
        </div>
      )}
      <hr />
      <div className="md:h-[50vh] h-[30vh] mt-5">
      ethereum Price Chart (USD).
        <TradingViewWidget />
      </div>
      </div>
    </div>
  );
};

export default CoinHero;
