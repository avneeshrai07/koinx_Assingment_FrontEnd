import { useState, useEffect } from "react";

const useFetchCoinData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?x_cg_demo_api_key=CG-agp1scJQqR3JsindWUSS9ZF4&vs_currencies=usd,inr&ids=ethereum&include_24hr_change=true&precision=2");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchCoinData;
