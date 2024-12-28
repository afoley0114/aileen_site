import Link from 'next/link';
import Image from "next/image";
import errorImage from '../public/site_images/notfoundcat.png';


 
export default function NotFound() {
  return (
    <div>
        <Image src={errorImage} alt="Cat 404 image" className = "size-3/5"/>
      <h2>Erm... awkward...</h2>
      <p>404. Page not found. Could not find requested resource.</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}