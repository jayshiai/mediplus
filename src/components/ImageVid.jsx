import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ImageComponent from "./ImageComponent";

const MotionImage = motion(ImageComponent);
const ImageVid = () => {
  const [image, setImage] = useState(1);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the state by incrementing the current value
      setImage((prevImage) => (prevImage === 6 ? 1 : prevImage + 1));
    }, 3000); // 3000 milliseconds = 3 seconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="w-full h-[50vh] px-4 py-5">
      <div className="relative overflow-hidden bg-two h-full w-full rounded-3xl">
        <AnimatePresence>
          <MotionImage
            key={image}
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            exit={{
              filter: "blur(10px)",
            }}
            src={"/" + image + ".jpeg"}
            fill={true}
            className="rounded-3xl object-cover"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageVid;
