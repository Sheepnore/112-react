/* 
 * @author Kevin Shie <a83850066@gmail.com>
*/

'use client';

import {useState,useEffect} from 'react';
import Link from "next/link";
import { 
  Navbar,
  NavbarBrand, 
  NavbarCollapse, 
  NavbarLink, 
  NavbarToggle,
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
  Carousel,
  Button,
  Card,
  DarkThemeToggle
} 
from "flowbite-react";
import CustomCard from "./components/Card.jsx"

export default function Home() {

  const [items,setItems] = useState([]);

  useEffect(() => {   
   async function fetchData(){
    const response = await fetch('api/items');
    const data = await response.json();
    console.log(data);
    setItems(data);
   }
   fetchData();

  },[]);

return (
        <>
        <div className="bg-cyan-800">
          <div className="container mx-auto">  
            <Navbar fluid rounded className="bg-cyan-800" /*rounded --圓角*/>        
                 
              <NavbarBrand as={Link} href="/">
                <img src="https://www-static.yuntech.edu.tw/images/website_png/Group_640.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold text-white" /*nowrap -- 不斷行, */ >Sheeping Web</span>
              </NavbarBrand>
              <NavbarToggle />
              <NavbarCollapse>

                <NavbarLink href="#" className="text-white hover:text-##e11d48-50 hover:border-b " >
                  <span className="px-4 py-2 hover:text-yellow-500">關於我們</span>
                </NavbarLink>
                <NavbarLink as={Link} href="#" className="text-white">
                  景點
                </NavbarLink>
                <NavbarLink href="#" className="text-white">交通</NavbarLink>
        
              </NavbarCollapse>
              <DarkThemeToggle>
              </DarkThemeToggle>
            </Navbar>
            </div>    
          </div>  

          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">

          <Carousel>
            <img src="./banner/1440px-Beigang02.jpg" alt="由 Solomon203 - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=47818945" />
            <img src="./banner/Bridge.jpg" alt="由 Mk2010 - 自己的作品, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=24259880" />
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
          </Carousel>
          </div>

          <div className="bg-white">
            <div className="container mx-auto">
              <Footer container>
              <FooterCopyright href="#" by="Flowbite™" year={2022} />
                <FooterLinkGroup>
                  <FooterLink href="#">About</FooterLink>
                  <FooterLink href="#">Privacy Policy</FooterLink>
                  <FooterLink href="#">Licensing</FooterLink>
                  <FooterLink href="#">Contact</FooterLink>
                </FooterLinkGroup>
              </Footer>
            </div>
          </div>

          <div className="bg-white py-16">
            <div className="container mx-auto grid grid-cols-4 gap-4">
          {items.map(item =>
          <CustomCard item = {item}/>
          )}

          <Button>
            Read more
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>

            </div>
          </div>

        </>    
  );
}

