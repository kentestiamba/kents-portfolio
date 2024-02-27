import Link from "next/link";
import { AiOutlineLinkedin } from 'react-icons/ai';
import {
  RiInstagramLine,
  RiFacebookLine,
  RiPinterestLine,
  RiLinkedinLine,
} from 'react-icons/ri';

const Socials = () => {
  return <div className="flex flex-items-center gap-x-12 text-lg">
    <Link href="https://www.linkedin.com/in/kent-matthew-estiamba" className="hover:text-accent transition-all duration-300" style={{ fontSize: '25px' }}>
      <AiOutlineLinkedin />
    </Link>
    <Link href="https://www.instagram.com/kentestiamba?igsh=ZW5lZTFtbjg2cHU3&utm_source=qr" className="hover:text-accent transition-all duration-300" style={{ fontSize: '25px' }}>
      <RiInstagramLine />
    </Link>
    <Link href="https://www.facebook.com/kent.estiamba?mibextid=LQQJ4d" className="hover:text-accent transition-all duration-300" style={{ fontSize: '25px' }}>
      <RiFacebookLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300" style={{ fontSize: '25px' }}>
      <RiPinterestLine />
    </Link>
  </div>;
};

export default Socials;
