import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";
const FetchData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default FetchData;
