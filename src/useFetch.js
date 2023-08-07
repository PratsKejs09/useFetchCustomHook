import { useEffect, useState } from "react";

const useFetch = (url = "", options = null) => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, options]);

  return { loading, error, data };
};

export default useFetch;
