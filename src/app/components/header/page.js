import { SiBurgerking } from 'react-icons/si';
import './header.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
        <div>
            <SiBurgerking />
        </div>
        <nav>
           <Link href="/">Home</Link>
           <Link href="/about">About</Link>
           <Link href="/review">Review</Link>
           <Link href="/burgers">Burgers</Link>
        </nav>
    </header>
  )
}

export default Header;
