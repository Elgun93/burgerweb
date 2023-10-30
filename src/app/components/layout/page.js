import Header from './components/header/page';
import Footer from './components/footer/page';

const Layout = ({ children }) => {
  return (
    <div className="content">
        <Header />
            { children }
        <Footer />
    </div>
  )
}

export default Layout;
