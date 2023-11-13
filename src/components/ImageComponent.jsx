import React from "react";
import Image from "next/image";
const ImageComponent = React.forwardRef((props, ref) => {
  return <Image {...props} ref={ref} />;
});
// Add a displayName property
ImageComponent.displayName = "ImageComponent";
export default ImageComponent;
