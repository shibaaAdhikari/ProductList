import Image from 'next/image';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/Components/navbar'));
const Card = dynamic(() => import('@/Components/card'));

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return ( 
    <div>
      <Navbar />
      <Card/>
    </div>
  
  );
}
