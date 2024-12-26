
"use client";
import { ImageGallery } from "react-image-grid-gallery";
import { ImageData, posterImgs } from "./art_imgs";


function ImageGrid(imgsArray: ImageData[]) {
  return (
      <div>
      <ImageGallery
    imagesInfoArray={imgsArray}
    columnCount={"auto"}
    columnWidth={230}
    gapSize={24} />
      </div>
  );
}


export default function Home() {
  const posterGallery = ImageGrid(posterImgs);
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        { posterGallery }
       
      </main>
      
    </div>
  );
}
