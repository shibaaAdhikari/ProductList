import Image from 'next/image';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import Card from '@/Components/card';
import withAuth from '@/Components/Auth';




const Navbar = dynamic(() => import('@/Components/navbar'));


const inter = Inter({ subsets: ['latin'] });

 function Home() {
  return ( 
    <div >
      <Navbar />
      <Card/>
    </div>
  
  );
}

export default withAuth(Home)