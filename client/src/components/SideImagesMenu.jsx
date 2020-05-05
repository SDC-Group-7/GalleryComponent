import React from "react";

const SideImagesMenu = ({data}) => {
  const images = data.map((img, i) => {
    return (
      <div className="inner-box-item">
          <img
            src={img.image_url}
            className="imgMenuItem"
          />
    </div>
    )
  })
  return (
    <div className="inner-box2">
      <div className="inner-box2-items">
        <button>ClickTop</button>
        {images}
        <button>ClickTop</button>
      </div>
    </div>
  );
};

export default SideImagesMenu;
