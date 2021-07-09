import React from "react";
// import Slider from "infinite-react-carousel";

const ImageSlider = ({ images }) => {
  return (
    <>
      {/* <Slider
        nextArrow={<button type="button">{"->"}</button>}
        prevArrow={<button type="button">{"<-"}</button>}
        slidesToShow={1}
      >
        {false
          ? []
          : Array.from(new Array(8)).map((_, i) => (
              <div className="container_image">
                <div
                  className="image_item"
                  key={i}
                  style={{
                    height: 200,
                    // background: "url(https://placeimg.com/380/200/nature)"
                  }}
                >
                  {images &&
                    images.length > 0 &&
                    JSON.parse(images).map((image, index) => (
                      <>
                        <img src={image.image} alt={image.name} />
                      </>
                    ))}
                </div>
              </div>
            ))}
      </Slider> */}
    </>
  );
};

export default ImageSlider;
