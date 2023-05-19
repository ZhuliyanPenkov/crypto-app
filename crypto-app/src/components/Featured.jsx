import React, { useEffect, useState } from "react";
import "./Featured.css";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import axios from "axios";

const Featured = () => {
  const BASE_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en";

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!data)
    return (
      <div className="error">
        <h2>If there are no cryptocurrencies displayed below,</h2>
        <p>
          the API key has exceeded its free uses. After a quick 5 minute wait,
          they will show up after a refresh.
        </p>
      </div>
    );

  return (
    <div className="featured" id="featured">
      <div className="container">
        <div className="left">
          <h2>Explore top Crypto's Like Bitcoin, Etherium, and DogeCoin</h2>
          <p>See all avialable assets: cryptocurrencies and NFT's</p>
          <button className="btn">See More Coins</button>
        </div>

        <div className="right">
          {data.map((p) => (
            <div className="card">
              <div className="top">
                <img src={p.image} alt="/" />
              </div>
              <div>
                <h5>{p.name}</h5>
                <p>${p.current_price.toLocaleString()}</p>
              </div>
              <span>
                {p.market_cap_change_percentage_24h < 0 ? (
                  <span className="red">
                    <FiArrowDown className="icon" />
                    {p.market_cap_change_percentage_24h.toFixed(2)}
                  </span>
                ) : (
                  <span className="green">
                    <FiArrowUpRight className="icon" />
                    {p.market_cap_change_percentage_24h.toFixed(2)}
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
