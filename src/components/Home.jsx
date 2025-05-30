import React from "react";
import UploadImage from "./UploadImage";
import ImagePreview from "./ImagePreview";
import { useState } from "react";
import {enhancedImageAPI} from "../utils/enhancedImageApi"
const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    //call the API to enhance the image
    try {
      // Code which may produce error
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (error) {
      // Code to handel error
      console.log(error);
    }
  };  return (
    <div className="">
      <UploadImage UploadImageHandler={UploadImageHandler} />
      <ImagePreview
        loading={loading}
        enhanced={enhancedImage}
        uploaded={uploadImage}
      />
    </div>
  );
};

export default Home;
