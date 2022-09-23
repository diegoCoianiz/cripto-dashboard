/*ExchangeRate is the child of CurrencyConverter. It takes the data of the currencys from the fathers component
as a prop and returns the rate comparison */
/*exRt = EXchange Rate  ; cprim = Chosen PRIMary currency ; csec = Chosen SECondary currency */

const ExchangeRate = (props) => {
    return (
      <div className="exchange-rate">
        <h3>Exchange Rate</h3>
        <h1>{props.exRt}</h1>
        <p>{props.cprim} to {props.csec}</p> 
      </div>
    );
  }
  
  export default ExchangeRate