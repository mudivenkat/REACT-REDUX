
// custom hooks are allow developer to reuse the logic across the componts and code will be modurla and maintainable and easier to read and understand

import { useEffect, useState } from "react";



function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null)



  useEffect(() => {
    const fetchApi = async (url) => {
      try {
        const response = await fetch(url);
        const result = await response.json()
        setData(result);
      }
      catch (err) {
        setError(err)
      }
      finally {
        setLoading(false)
      }


    }


    fetchApi(url)
  }, [url])


  return {
    data, error, loading
  }


}
export default useFetch;

