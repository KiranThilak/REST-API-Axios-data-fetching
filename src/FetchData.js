import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return <div>FetchData</div>;
};

export default FetchData;
