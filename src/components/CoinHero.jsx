import useFetchCoinData from "../hooks/useFetchCoinData";
import TradingViewWidget from "./TradingViewWidget";

const CoinHero = () => {
  const { data, loading, error } = useFetchCoinData();
  return (
    <div className="md:p-4 md:bg-custom-black-300 rounded">
        <div className="flex gap-2 items-center">
            <img className="h-12 w-10" src=" https://imgs.search.brave.com/bkORZEgcsOS5tR0Fd-4_O_j7eOl_-OSK5nbdYXmtv-U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzA1L0V0aGVyZXVt/X2xvZ29fMjAxNC5z/dmc" alt="" />
            <h1 className="text-2xl font-bold text-white">ethereum</h1>
            <p className="text-white">(ETH)</p>
            <div className="bg-white p-1 rounded mx-5">
                Rank #2
            </div>
        </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="bg-custom-black-300 pb-10 rounded p-4 my-5">
      {data && (
        <div className="mb-4">
            <div className="flex gap-5 items-center text-white">
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
                <p className="text-white">(24H)</p>
            </div>
          <p className="text-white">
            ₹{data.ethereum.inr.toLocaleString("en-IN")}
            </p>
        </div>
      )}
      <hr />
      <div className="md:h-[50vh] h-[30vh] mt-5 text-white">
      ethereum Price Chart (USD).
        <TradingViewWidget />
      </div>
      </div>
    </div>
  );
};

export default CoinHero;
