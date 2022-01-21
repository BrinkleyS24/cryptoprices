import React from "react";

const Price = (props) => {

  const apiKey = '4B5EF75B-C0BC-4598-82CE-A3E70E4C2192';

  // Grabbing the Currency symbol from the URL Param
  const symbol = props.match.params.symbol;

  // Using the other two variables to create our URL
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;


  //state to hold the coin data
  const [coin, setCoin] = React.useState(null);

  //function to fetch coin data
  const getCoin = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCoin(data)
  }

  // useEffect to run getCoin when component mounts
  React.useEffect(() => {
    getCoin();
  }, [])

  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  }

  return coin ? loaded() : loading()
};

export default Price;
