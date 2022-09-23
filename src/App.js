import NewsFeed from "./components/NewsFeed";
import CurrencyConverter from "./components/CurrencyConverter";

const App = () => {
  return (
    <div className="app">
      <h2>Crypro Dashboard</h2>
      <div className="app-wrapper">
      <CurrencyConverter/>
      <NewsFeed/>
      </div>
    </div>
  );
}

export default App;

/*
<CurrencyConverter/> is father of <ExchangeRate/> 

*/