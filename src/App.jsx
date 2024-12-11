import { useState } from "react";
import "./App.css";

function App() {
  const [bitcoinPrice, setBitcoinPrice] = useState("100,000");

  async function bitcoinDisplay() {

    let response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    )
    if (response.ok) {
      let data = await response.json();
      setBitcoinPrice(data);
    }
    console.log(bitcoinPrice.bpi.USD.rate)
  }
  return (
    <>
      <h1>Bitcoin Displayer</h1>
      <button onClick={bitcoinDisplay}>Hey</button>
      <div>${bitcoinPrice} USD</div>
    </>
  );
}

export default App;
