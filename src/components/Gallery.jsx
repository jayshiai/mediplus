import React, { useEffect } from "react";
import Image from "next/image";
const Gallery = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".imageContainer");

    function clearActiveImage() {
      images.forEach(function (image) {
        image.classList.remove("active");
      });
    }

    images.forEach(function (image, index) {
      image.onclick = function (event) {
        event.stopPropagation(); //important to not call the clearActiveImage() on every click
        if (images[index].classList.contains("active")) {
          images[index].classList.remove("active");
        } else {
          clearActiveImage(index);
          images[index].classList.add("active");
        }
      };
    });

    window.addEventListener("click", (event) => {
      clearActiveImage();
    });
  }, []);
  return (
    <div className="imgMaincontainer w-full">
      <div className="relative imageContainer">
        <Image
          fill={true}
          className="img object-cover"
          src="/1.jpeg"
          alt="clinic image"
        />
      </div>
      <div className="relative imageContainer">
        <Image
          fill={true}
          className="img object-cover"
          src="/2.jpeg"
          alt="clinic image"
        />
      </div>
      <div className="relative imageContainer">
        <Image
          fill={true}
          className="img object-cover"
          src="/3.jpeg"
          alt="clinic image"
        />
      </div>
      <div className="relative imageContainer">
        <Image
          fill={true}
          className="img object-cover"
          src="/4.jpeg"
          alt="clinic image"
        />
      </div>
      <div className="relative imageContainer">
        <Image
          fill={true}
          className="img object-cover"
          src="/5.jpeg"
          alt="clinic image"
        />
      </div>
    </div>
  );
};

export default Gallery;
