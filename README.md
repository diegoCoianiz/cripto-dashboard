This React-App cripto dashboard was created with the lessons of the youtube influencer Ania Kubow, you can follow her gitHub profile ( https://github.com/kubowania ) to see her news.

For this lesson i create a currency converter with diferent foreing exchange rates that use Axios to fetch the data throw rapidApi ( https://rapidapi.com/ ) directly to AlphaVantage inc. ( https://rapidapi.com/alphavantage/api/alpha-vantage ). At the same time, it shows you diferent "cripto news" from the ( 'https://crypto-news-live3.p.rapidapi.com/news' ) API both with the rapidApi sistem.

The importance of this lesson consisted in learn the basic elements of react, such as components and states, and lern how to create basic fetchs using Axios library.

You can simple pull this proyect into your local repository how ever you will have to create an account at rapidApi for the password ( rapidapi-key ) and set your own as the value of the https protocol in the Headers property as you can see in the components : CurrencyConverter and NewsFeed.

headers: {
    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_APIKEY
}

Once you setup your own rapidapi-key at both components you will be ready to run this app!
You can do it with the command " npx react-scripts start "