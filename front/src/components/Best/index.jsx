import React, { useEffect, useState } from 'react'
import "./style.scss"

function Best() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0,4)));
  }, []);

  return (
    <>
     <div className="containerBest">
        <div className="best">
          <div className="header">
            <h1>Best Sellers</h1>
          </div>
          <div className="cardSection">
            <div className="cards">
              {products.map((x) => (
                <div className="card" key={x._id}>
                  <img src={x.image} alt="" />
                  <div className="texts">
                      <h3>{x.name}</h3>
                  <p>${x.price}.00</p>
                
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Best