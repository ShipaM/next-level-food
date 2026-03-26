"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const ImagePicker = ({ label, name }: { label: string; name: string }) => {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handlePickClick = () => {
    imageInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="flex items-center gap-6 mb-4">
        <div className="w-40 h-40 border-2 border-[#a4abb9] flex justify-center items-center text-center text-[#a4abb9] relative">
          {!pickedImage && <p className="m-0 p-4">No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              className="object-cover"
              fill
            />
          )}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#a4abb9] opacity-50"></div>
        </div>
        <input
          className="hidden"
          type="file"
          id={name}
          accept="image/png, image/jpg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
        />
        <button
          type="button"
          onClick={handlePickClick}
          className="border-0 px-6 py-2.5 bg-[#a4abb9] rounded cursor-pointer font-inherit hover:bg-[#b3b9c6] active:bg-[#b3b9c6]"
        >
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
