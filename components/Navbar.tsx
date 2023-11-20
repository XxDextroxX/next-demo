
import style from "./Navbar.module.css";
import { ActiveLink } from ".";

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contacts'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={style['menu-container']}>

      {
        menuItems.map(({text, href}) => (
          <ActiveLink key={href} text={text} href={href} />
        ))
      }
      
    </nav>
  )
}
