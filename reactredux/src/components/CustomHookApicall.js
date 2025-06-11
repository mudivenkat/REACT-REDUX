


import React, { useEffect } from 'react'
import useFetch from './CustomHookPractise'
import UseLocalStorage from './UseLocalStorage';

function CustomHookApicall() {
  const { data, error, loading } = useFetch("https://fakestoreapi.in/api/products");

  const [localdata, setLocalData] = UseLocalStorage("Product", [])

  useEffect(() => {
    if (data) {
      setLocalData(data?.products)
    }
  }, [data])
  console.log(data, "ooooooooo")

  console.log(localdata, "localData")
  if (loading) return <div>Loading...</div>;

  // Handle error state
  if (error) return <div>Error: {error.message}</div>;

  // Handle case when data is null or undefined
  if (!data.products) return <div>No data available</div>;


  return (
    <div>
      <h1>show the Products after listing</h1>

      <ul>
        {
          data.products.map((product) => {
            return (
              <li>
                <h2>{product.title}</h2>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
                <img src={product.image} alt={product.title} style={{ maxWidth: '200px' }} />
              </li>
            )


          })
        }
      </ul>

    </div>
  )
}

export default CustomHookApicall
