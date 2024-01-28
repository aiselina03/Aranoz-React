import React, { useContext } from "react";
import "./style.scss";
import { WishlistContext } from "../../context/wishlistContext";
import { NavLink } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";
import { Helmet } from "react-helmet-async";

function Wishlist() {
  const { wishlist, addRemoveWishlist, checkIsWishlist } =
    useContext(WishlistContext);
  const { addBasket } = useContext(BasketContext);
  return (
    <>
      <Helmet>
        <title>Wishlist</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="containerWishlist">
        <div className="nav"></div>
        <div className="wishlist">
          <div className="cards">
            {wishlist.map((x) => (
              <div className="card" key={x._id}>
                <img src={x.image} alt="" />
                <div className="texts">
                  <h3>{x.name}</h3>
                  <p>${x.price}.00</p>
                  <div className="add">
                    <p className="addTo" onClick={() => addBasket(x)}>
                      + ADD TO CART
                    </p>
                    <i
                      className={`${
                        checkIsWishlist(x)
                          ? "fa-solid fa-heart"
                          : "fa-regular fa-heart"
                      }`}
                      onClick={() => addRemoveWishlist(x)}
                    ></i>
                    <NavLink to={"/detail/" + x._id}>
                      <i className="fa-regular fa-eye"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
