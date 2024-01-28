import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Detail() {
  const [products, setProducts] = useState([]);
  let { id } = useParams();
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);

  useEffect(() => {
    fetch("http://localhost:9000/" + id)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Detail Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="containerDetail">
        <div className="detail">
          <div className="card">
            <div className="image">
              <img src={products.image} alt="" />
            </div>

            <div className="texts">
              <h3>{products.name}</h3>
              <p>${products.price}.00</p>
              <div className="add">
                <p className="addTo" onClick={() => addBasket(products)}>
                  + ADD TO CART
                </p>
                <i
                  className={`${
                    checkIsWishlist(products)
                      ? "fa-solid fa-heart"
                      : "fa-regular fa-heart"
                  }`}
                  onClick={() => addRemoveWishlist(products)}
                ></i>
              </div>
              <p>
                Lorem ipsum dolor, ipsummagnam deleniti tempora, optio molestiae
                accusantium explicabo cum tenetur velit repudiandae molestias
                similique, minus atque officia excepturi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
