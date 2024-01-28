import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import Slider from "react-slick";

function SliderImage() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="sliderImage">
        <Slider {...settings}>
          <div>
            <div className="photo1">
            <div className="text">
            <h1>Wood  <br />& Cloth Sofa</h1>
            <p>
                  Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Adipisci, deleniti <br /> doloremque fugiat magni labore <br />expedita.
                </p>
                <button>
                  BUY NOW
                </button>
              </div>
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png"
                alt=""
              />
            
            </div>
          </div>
          <div>
            <div className="photo2">
            <div className="text">
                <h1>Wood  <br />& Cloth Sofa</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Adipisci, deleniti <br /> doloremque fugiat magni labore <br />expedita.
                </p>
                <button>
                  BUY NOW
                </button>
              </div>
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png"
                alt=""
              />
                
            </div>
          </div>
          <div>
            <div className="photo3">
            <div className="text">
            <h1>Wood  <br />& Cloth Sofa</h1>
            <p>
                  Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Adipisci, deleniti <br /> doloremque fugiat magni labore <br />expedita.
                </p>
                <button>
                  BUY NOW
                </button>
              </div>
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png"
                alt=""
              />
                
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default SliderImage;
