import { Link, type To } from "react-router-dom";
import { useState, type ReactElement } from "react"
import { useTranslation } from 'react-i18next';
import { ChevronDown } from "lucide-react";
import { BadgePercent } from 'lucide-react';
import { BedDouble } from 'lucide-react';
import { Container } from 'lucide-react';
import { Grip } from 'lucide-react';
import { Cannabis } from 'lucide-react';
import { Award } from 'lucide-react';



type SubMenuItem = {
  name?: string;
  desc?: string;
  href?: string;
  icon?: ReactElement; 
};

type menu = {
    title?: string,
    href?: To,
    submeun?:boolean,
    subMenuItems?:SubMenuItem[],
}

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen)

    const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
    
    const handleSubMenuToggle = (index: number) => {
      setActiveSubMenu(prev => (prev === index ? null : index));
    };

    const { t } = useTranslation();
    const Menu: menu[] = [
    {   title : t('home'),
        href : "/"
      },

    {title : t('blog'), href : "/blog", submeun:false},

    {title : t('service.title'), href : "#",submeun:true,
      subMenuItems: [
      {
        name: t('service.name1'),
        href: "https://www.typescriptlang.org/docs/",
        icon: <BadgePercent/>,
      },
      {
        name: t('service.name2'),
        href: "https://www.typescriptlang.org/docs/",
        icon: <BedDouble/>,
      },
      {
        name: t('service.name3'),
        href: "https://www.typescriptlang.org/docs/",
        icon: <Container/>,
      },]
        
     },

    {title : t('plan'), href : "/plans"},

    {title : t('project.title'), href : "#",submeun:true,
        subMenuItems: [
      {
        name: t('project.name1'),
        href: "https://www.typescriptlang.org/docs/",
        icon: <Grip/>,
      },
      {
        name: t('project.name2'),
        href: "https://www.typescriptlang.org/docs/",
        icon: <Cannabis/>,
      },
      {
        name: t('project.name3'),
        href: "https://www.typescriptlang.org/docs/",
        icon: <Award/>,
      },]
     },
   
]
    
    return (
    <header className="h-20  p-4 text-xs">
        <div className="bg-white border-b border-neutral-400 h-16 rounded-3xl flex items-center justify-between px-9 shadow-xl">
            {/* Logo section */}
            <Link to={"/" as To} className="flex items-center space-x-2">
                <img className="h-8" src="/src/assets/logo.png" alt="" />
                <h3 className="text-xl font-bold bg-gradient-to-r 
                from-gray-400 to-gray-100 bg-clip-text
                text-transparent'">AMBAR</h3>
            </Link>

            {/* Menu Section */}
            <div className="p-2 ">
                
                <button 
                onClick={toggleMenu}
                className="p-2 bg-gray-200 rounded-xl group lg:hidden cursor-pointer hover:bg-gray-100 hover:border transition duration-300">
                    {t('menu')}
                </button>

                <div className={`${isOpen ? "flex" : "hidden"}
                    flex-col gap-3 transition duration-300
                    absolute top-full left-0 w-full backdrop-blur-md shadow-xl/30 px-6  rounded-md flex-center-between py-4
                    lg:static lg:flex lg:flex-row lg:items-center lg:shadow-none lg:bg-transparent lg:backdrop-blur-none`}>
                    {Menu.map(({title, submeun, href, subMenuItems},i)=> {
                        return(
                            <div className="relative z-50">
                                <Link className="block group rounded-xl 
                                    px-1 py py-3 sm:hover:bg-[#e5f874] transition duration-300
                                    lg:px-1 lg:py-2 lg:hover:bg-transparent" 
                                  
                                    to={href as To} 
                                    key={i}
                                    onClick={() => submeun && handleSubMenuToggle(i)}>
                                    <span className="px-3 flex group items-center gap-1 z-50">
                                        {title}
                                        <span className='absolute bottom-0 left-0 
                                        w-0 h-0.5 group-hover:w-full 
                                        bg-[#e5f874] transition-all 
                                        duration-300'></span>
                                        {submeun && (
                                            <ChevronDown className="h-3 w-3 transform group-hover:rotate-180 duration-200" />

                                        )}
                                    </span>
                                </Link>

                                {submeun && activeSubMenu === i && (
                                    <div className="relative z-100 ">
                                        <ul className="lg:mt-5 lg:absolute  rounded-md shadow-md  lg:min-w-[200px] bg-[#50db2649] top-0 right-0 left-0 space-y-2 transition duration-300">
                                        {subMenuItems?.map(({name, href, icon})=>(
                                            <a href={href}>
                                                <li
                                                    className="flex items-center p-2 flex-center hover:bg-[#ee7d7d2d] rounded-md gap-x-2 cursor-pointer transition duration-300"
                                                    >
                                                    {icon}
                                                    {name}
                                                </li>
                                            </a>
                                        ))}
                                    </ul>
                                    </div>
                                )}    
                            </div>
                    )})}
                </div>
            </div>
            <div className="hidden lg:flex gap-3">
                <a className="  py-2 group relative inline-flex hover:bg-[#e5f874] items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-transparent px-4 text-neutral-950">
                  <span className="relative inline-flex overflow-hidden">
                    <div className="absolute origin-bottom transition duration-500 [transform:translateX(-150%)_skewX(33deg)] group-hover:[transform:translateX(0)_skewX(0deg)]">
                      {t('create account')}
                    </div>
                    <div className="transition duration-500 [transform:translateX(0%)_skewX(0deg)] group-hover:[transform:translateX(150%)_skewX(33deg)]">
                      {t('create account')}
                    </div>
                  </span>
                 </a>

                <a className=" py-2 group relative inline-flex hover:bg-[#e5f874] items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-transparent px-4 text-neutral-950">
                  <span className="relative inline-flex overflow-hidden">
                    <div className="absolute origin-bottom transition duration-500 [transform:translateX(-150%)_skewX(33deg)] group-hover:[transform:translateX(0)_skewX(0deg)]">
                      {t('log in')}
                    </div>
                    <div className="transition duration-500 [transform:translateX(0%)_skewX(0deg)] group-hover:[transform:translateX(150%)_skewX(33deg)]">
                      {t('log in')}
                    </div>
                  </span>
                </a>
            </div>

             
        </div>
    </header>
  )
}

export default Navbar
