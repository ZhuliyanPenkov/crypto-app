import React from "react";
import "./AllCoins.css";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";

const AllCoins = () => {
  const BASE_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en";

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

  if (!data) return null;

  return (
    <div className="allCoins" id="allCoins">
      <div className="container">
        <div className="titleHolder">
          <h2 className="primary">Dive right into the endless world.</h2>
          <p>Buy, Invest, Make Profit and enjoy.</p>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Icon</th>
              <th>Coin</th>
              <th>Price</th>
              <th>Market Cap</th>
              <th>Total Volume</th>
              <th>Now</th>
            </tr>
          </thead>
          <tbody>
            {data.map((p) => (
              <tr>
                <th className="coinImage">
                  <img src={p.image} alt="" />
                </th>
                <td>{p.name}</td>
                <td>${p.current_price.toLocaleString()}</td>
                <td>${p.market_cap.toLocaleString()}</td>
                <td>${p.total_volume.toLocaleString()}</td>
                <th>
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
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCoins;
