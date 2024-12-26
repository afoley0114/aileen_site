
"use client";
import { ImageGallery } from "react-image-grid-gallery";
import { ImageData, posterImgs, logoImgs } from "./art_imgs";


function ImageGrid(imgsArray: ImageData[]) {
  return (
      <div>
      <ImageGallery
    imagesInfoArray={imgsArray}
    columnCount="auto"
    columnWidth={300}
    gapSize={24} />
      </div>
  );
}


export default function Home() {
  const posterGallery = ImageGrid(posterImgs);
  const logoGallery = ImageGrid(logoImgs);

  return (
    <div className="h-full flex flex-col">
        
        { posterGallery }
        { logoGallery }
       
      
    </div>
  );
}
