import Image from "next/image";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

interface ImageData {
    src: string;
    alt: string;
}

const posterImgs: ImageData[] = [

    {
        src: "/art_images/posters/HystericsWitches.png",
        alt: "Hysterics Witches comedy show poster"
    },
    {
        src: "/art_images/posters/mnl_11.png",
        alt: "MNL 11 comedy show poster"
    },
    {
        src: "/art_images/posters/mnl_12.png",
        alt: "MNL 12 comedy show poster"
    },
    {
        src: "/art_images/posters/mnl_13.png",
        alt: "MNL 13 comedy show poster"
    },
    {
        src: "/art_images/posters/mnl_13_bark.png",
        alt: "MNL 13 comedy show barking card"
    },

];

export default function PosterImages() {
    return (
        <div>
            {posterImgs.map((image, index) => (
                <Image key={index} src={image.src} alt={image.alt} height="500" />
            ))}
        </div>

    );
}