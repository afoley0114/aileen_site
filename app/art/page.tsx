
"use client";
import { ImageGallery } from "react-image-grid-gallery";
import { ImageData, posterImgs, logoImgs, tradImgs, digitalImgs, posterImgsCard } from "./art_imgs";

//New
import ImageCard from "components/ImageCard"
import ImageCardProps from "components/ImageCard"



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



/*
function ImageCard(imgData: ImageData) {
  return(
    <div className= "max-w-9/10 w-full shadow-lg bg-slate-300">
      <img className="w-"
      ></img>

    </div>

  );
}*/


export default function Home() {
  const posterGallery = ImageGrid(posterImgs);
  const logoGallery = ImageGrid(logoImgs);
  const tradGallery = ImageGrid(tradImgs);
  const digitalGallery = ImageGrid(digitalImgs);

  const testImageCard = ImageCard(posterImgsCard);

  return (
    
    <div className="h-full flex flex-col">
      <h1>Art and Design</h1>
        

        <h2>Posters</h2>
        <p>Posters, some illustrated, some designed, done for various events.</p>
        
        { testImageCard }
        
        
        { posterGallery }

        <h2>Logos</h2>
        { logoGallery }

        <h2>Traditional Art</h2>
        { tradGallery }

        <h2>Digital Art</h2>
        { digitalGallery }
       
      
    </div>
  );
}
