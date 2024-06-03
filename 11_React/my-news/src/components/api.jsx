import { useState } from "react";
import axios, { Axios } from "axios";


function api() {
  const api =  async (id) =>{
    try{
      let res = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=cd744db8d35f45859f6b88856c5e9bfe`);
      setData(res.data);
    } catch(err) {
      console.error(err);
    }
  }


  const [data, setData] = useState(null);
  return (
    <>
    
    </>
  );
};

export default api;