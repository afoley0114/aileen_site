



export interface ImageData {
    src: string;
    alt: string;
    caption: string
}

export const posterImgs: ImageData[] = [

    {
        src: "/art_images/posters/HystericsWitches.png",
        alt: "Hysterics Witches comedy show poster",
        caption: "Hysterics Witches comedy show poster"
    },
    {
        src: "/art_images/posters/mnl_11.png",
        alt: "MNL 11 comedy show poster",
        caption: "MNL 11 comedy show poster"
    },
    {
        src: "/art_images/posters/mnl_12.png",
        alt: "MNL 12 comedy show poster",
        caption:  "MNL 12 comedy show poster"
    },
    {
        src: "/art_images/posters/mnl_13.png",
        alt: "MNL 13 comedy show poster",
        caption:  "MNL 13 comedy show poster"
    },
    {
        src: "/art_images/posters/mnl_13_bark.png",
        alt: "MNL 13 comedy show barking card",
        caption: "MNL 13 comedy show barking card"
    },

];


export const logoImgs: ImageData[] = [

    {
        src: "/art_images/logos/extinct.png",
        alt: "Extinct Comedy Logo",
        caption: "Logo design for Extinct Comedy, a digital sketch group."
    },
    {
        src: "/art_images/logos/witif.png",
        alt: "WITIF Logo",
        caption: "Logo design for Well I Think It's Funny, a digital sketch group."
    }

];

/*export default function PosterImages() {
    return (
        <div>
        <ImageGallery
      imagesInfoArray={posterImgs}
      columnCount={"auto"}
      columnWidth={230}
      gapSize={24} />
        </div>
    );
}*/