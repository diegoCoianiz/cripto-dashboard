/*  NewsFeed is the second component of the App, it shows diferent cryptocurrency
news  */

import axios from "axios";
import { useEffect, useState } from "react";

const NewsFeed = () => {

  const [articles, setArticles] = useState(null)

  useEffect(() => {
    const options = {
    method: 'GET',
    url: 'https://crypto-news-live3.p.rapidapi.com/news',
    headers: {
      'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_APIKEY
    }
  };

  axios.request(options).then((response) => {
	  console.log(response.data);
    setArticles(response.data)
  }).catch((error) =>{
	  console.error(error);
    });
  }, [])

  const firstSevenArticles = articles?.slice(0,7)
  return (
    <div className="news-feed">
      <h2>News Feed: </h2>
      {firstSevenArticles?.map((article, _id) => (
      <div key={_id}>
        <a href={article.url}target="_blank"><p>{article.title}</p></a>
        </div> ))}
    </div>
  );
}
  
  export default NewsFeed