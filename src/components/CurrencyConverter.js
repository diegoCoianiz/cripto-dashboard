/* CurrencyConverter is the first component of the father component APP.its a table with a child component
called ExchangeRate at the end of the division */

import { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";

const CurrencyConverter = () => {
    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA', 'ARS', 'EUR']
    const [chosenPrimaryCurrency, setChosen] = useState("BTC")
    const [chosenSecondaryCurrency, setChosen2] = useState("BTC")
    const [amount, setAmount] = useState("") // for td input <currency amount 1>
    const [exchangeRate, setExchange] = useState(0) // for the child component
    const [result, setResult] = useState(0) // for the td input <currency amount 2>
    const [primarySelectedCurrencyRate, setPrimarySelectedCurrencyRate] = useState('BTC')
    const [secondarySelectedCurrencyRate, setSecondarySelectedCurrencyRate] = useState('BTC')
    //primary and secondary Selected for the ExchangeRate component props
    
    const convert = () => {
        const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
        headers: {
            'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_APIKEY
            }
        }
        axios.request(options).then((response) => {
            console.log(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
	        setExchange(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
            setResult(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] * amount)
            setPrimarySelectedCurrencyRate(chosenPrimaryCurrency)
            setSecondarySelectedCurrencyRate(chosenSecondaryCurrency)
        }).catch((error) => {
	    console.error(error)
        })
    }

    return (
      <div className="currency-converter">
        <h2>Currency Converter</h2>
        <div className="input-box">
        <table>
            <tbody>

                <tr>
                    <td>Primary Currency:</td>
                    <td>
                        <input
                        typeof="number"
                        name="currency-amount-1"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                        />
                    </td>
                    <td>
                        <select
                            value={chosenPrimaryCurrency}
                            name="currency-option-1"
                            className="currency-options"
                            onChange={(event) => setChosen(event.target.value)}
                            >
                                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                        </select>
                    </td>
                </tr>
                 
                <tr>
                    <td>Secondary Currency:</td>
                    <td>
                        <input
                        name="currency-amount-2"
                        value={result}
                        />
                    </td>
                    <td>
                        <select
                            value={chosenSecondaryCurrency}
                            name="currency-option-2"
                            className="currency-options"
                            onChange={(event) => setChosen2(event.target.value)}
                            >
                                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
        <button id="convert-button" onClick={convert}>Convert</button>
        </div>
        
        <ExchangeRate 
            exRt={exchangeRate}
            cprim={primarySelectedCurrencyRate}
            csec={secondarySelectedCurrencyRate}/>
      </div>
    );
  }
  
  export default CurrencyConverter

/*
When we use the <TABLE> tag we need to put a <BODY> tag in it before the
<TR> table rows and the <TD> table data cell
*/
