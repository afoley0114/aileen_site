import React, { FC} from 'react';
import Image from "next/image";
import Link from "next/link";


export interface ImageCardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    desc: string;
    moreUrl?: URL;
}


const ImageCard: FC<ImageCardProps> = ({imgSrc, imgAlt, title, desc, moreUrl}) => {
    return(
        <div className="col-span-full grid grid-cols-1 gap-4 bg-orange-100 md:grid-cols-2 p-3 m-3">

            <Image className="object-contain" src={imgSrc} alt={imgAlt} />

            <div>
                <h1>{title}</h1>
                <p>{desc}</p>
                {moreUrl && <Link href={moreUrl}>More</Link>}

            </div>

        </div>

    );
};

export default ImageCard;