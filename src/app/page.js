/* 
 * @author Kevin Shie <a83850066@gmail.com>
*/

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

export default function Home() {
  
  const items= [
    {
      cover:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Beigang_Wude_Temple_20160327.jpg/1280px-Beigang_Wude_Temple_20160327.jpg",
      name:"北港",
      description:"北港鎮（臺灣話：Pak-káng tìn），舊稱「笨港」，位於臺灣雲林縣西南方，東接元長鄉，北連四湖鄉，西毗水林鄉，東南隔北港溪與嘉義縣六腳鄉、新港鄉相鄰，是臺灣媽祖信仰中心，也是雲林三大區域中心之一，雲林海線的門戶及政經中心，交通、信仰、觀光、文化、醫療、教育重要的鄉鎮之一。因地理位置及歷史文化背景等因素，生活與嘉義都會區及嘉義縣海線重鎮朴子市關係密切，互通往來之交通量相當龐大，也因而帶動北港至嘉義市及朴子市間三角地帶的發展。",
    },
    {
      cover:"",
      name:"",
      description:"",
    },
    {
      cover:"",
      name:"",
      description:"",
    },
  ]; 

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
          <Card
            className="max-w-sm"
            imgAlt={item.name}
            imgSrc={item.cover}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              北港
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              321
            </p>
          
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
          </Card>
          )}
            </div>
          </div>

        </>    
  );
}

