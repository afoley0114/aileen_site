
"use client";
import { ImageGallery } from "react-image-grid-gallery";
import { ImageData, posterImgs, logoImgs, tradImgs } from "./art_imgs";


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
  const tradGallery = ImageGrid(tradImgs);

  return (
    
    <div className="h-full flex flex-col">
      <h1>Art and Design</h1>
        
        <h2>Posters</h2>
        { posterGallery }

        <h2>Logos</h2>
        { logoGallery }

        <h2>Traditional Art</h2>
        { tradGallery }
       
      
    </div>
  );
}
