



export interface ImageData {
    src: string;
    alt: string;
    caption: string
}

export const posterImgs: ImageData[] = [

    {
        src: "/art_images/posters/mnl_14.png",
        alt: "MNL 14 comedy show poster",
        caption: "MNL 14 comedy show poster"
    },

    {
        src: "/art_images/posters/HystericsWitches.png",
        alt: "Hysterics Witches comedy show poster",
        caption: "Witch-themed comedy show poster for Hysterics"
    },
    /*
    {
        src: "/art_images/posters/mnl_11.png",
        alt: "MNL 11 comedy show poster",
        caption: "MNL 11 comedy show poster"
    },
    */
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

    /*
    {
        src: "/art_images/posters/mnl_13_bark.png",
        alt: "MNL 13 comedy show barking card",
        caption: "MNL 13 comedy show barking card"
    },
    */

   

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

export const tradImgs: ImageData[] = [

    {
        src: "/art_images/traditional/dogprint.png",
        alt: "Dog screenprint",
        caption: "Four layer screenprint of a dog."
    },
    {
        src: "/art_images/traditional/family.png",
        alt: "Family relief print",
        caption: "One-layer relief print of some miniature toys."
    },
    {
        src: "/art_images/traditional/kingofdiamonds.png",
        alt: "King of Diamonds print",
        caption: '"King of Diamonds", a four layer relief print.'
    },

];

export const digitalImgs: ImageData[] = [

    {
        src: "/art_images/digital/kyuuri.jpg",
        alt: "Kyuuri drawing",
        caption: "Illustration of my cat done in Clip Studio Paint."
    },
    {
        src: "/art_images/digital/kabocha.png",
        alt: "Kabocha edit",
        caption: "Image of cat edited in Photoshop."
    },
    {
        src: "/art_images/digital/kyuurismall.png",
        alt: "Kyuuri Pokemon drawing",
        caption: 'Illustration of my cat done in the style of Pokémon artist Ken Sugimori.'
    },

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