import React, { useState } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import ClearIcon from "@mui/icons-material/Clear";
const ImageUploader = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => [...prevImages, ...imageUrls]);
  };

  const removeImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div>
      <label className="font-semibold text-[13px]    text-gray-600">
        Télécharger des photos
      </label>
      <div className="flex items-center justify-center w-full">
        <div
          for="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-2 text-yellow-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Ajouter photos</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Jusqu’à 5 photos, format JPG, PNG et GIF, jusqu’à 3 Mo chacune .
            </p>
          </div>
          <input
            type="file"
            multiple
            accept=".jpg, .png, .gif"
            onChange={handleImageUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
      </div>

      <div>
        <div className="mt-4 flex ">
          {selectedImages.map((imageUrl, index) => (
            <div
              key={index}
              className="flex items-center mr-5 p-2 rounded-md mt-2"
            >
              <img
                src={imageUrl}
                alt={`Image ${index + 1}`}
                className="w-16 h-16  bg-gray-100 rounded-md object-cover"
              />

              <ClearIcon
                onClick={() => removeImage(index)}
                className=" absolute mb-14 ml-16 cursor-pointer text-gray-500 hover:text-yellow-500"
                style={{ fontSize: "1.3rem" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
