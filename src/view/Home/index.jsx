import React, { useEffect, useState } from "react";
import { fetchRequest } from "../../utils/request";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetchRequest({
      url: "https://jsonplaceholder.typicode.com/todos",
    });
    setData(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <h1 className="text-3xl">Fetch APi</h1>
      <button className="p-2 bg-gray-200 rounded-md" onClick={fetchData}>
        Fetch Data
      </button>

      <div className="flex flex-col gap-2">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.map((item) => (
            <div className="p-2 flex gap-3" key={"posts---" + item.id}>
              <div className="id">{item.id}</div>
              <div className="id">{item.title}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
