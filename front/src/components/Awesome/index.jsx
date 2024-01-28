import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";
import { NavLink } from "react-router-dom";

function Awesome() {
  const [products, setProducts] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist,checkIsWishlist} = useContext(WishlistContext)

  useEffect(() => {
    fetch("http://localhost:9000/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="containerAwesome">
        <div className="awesome">
          <div className="header">
            <h1>Awesome</h1>
          </div>
          <div className="cardSection">
            <div className="cards">
              {products.map((x) => (
                <div className="card" key={x._id}>
                  <img src={x.image} alt="" />
                  <div className="texts">
                    <h3>{x.name}</h3>
                    <p>${x.price}.00</p>
                    <div className="add">
                      <p className="addTo" onClick={() => addBasket(x)}>
                        + ADD TO CART
                      </p>
                      <i className={`${checkIsWishlist(x) ? "fa-solid fa-heart":"fa-regular fa-heart"}`} onClick={() => addRemoveWishlist(x)}></i>
                      <NavLink to={"/detail/"+x._id}><i className="fa-regular fa-eye"></i>
                        </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Awesome;
