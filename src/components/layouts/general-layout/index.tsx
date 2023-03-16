import React, { useEffect, useState } from 'react';
import { LayoutProps } from 'models/layouts';
import { Portal } from 'components/portal';
import { useAppSelector } from 'redux/store';
import NavBar from 'components/navigation';
import { Modal } from 'components/modal/modal';
import NavOverlay from 'components/nav-overlay';

const colors = ['rgba(255, 255, 255, 0.5)', 'rgba(255, 197, 242, 0.5)', 'rgba(139, 142, 243, 0.5)'];


// this wrapper will handle general page styling 
const GeneralPagesLayout : React.FC<LayoutProps> = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const {
    // show menu 
    common: { showModal,showNav },
  } = useAppSelector((state) => state);


  function getBackgroundColor(scrollPosition:any) {
    const colorIndex = Math.floor((scrollPosition / window.innerHeight) * (colors.length - 1));
    const color = colors[colorIndex];
    return color;
  }
  
  const backgroundColor = getBackgroundColor(scrollPosition);
  const whitePercentage = 90;
  const colorPercentage = (100 - whitePercentage) / 2;
  return (
    <div style={{ 
      background: `
      linear-gradient(to bottom, ${backgroundColor} 0%, ${backgroundColor} ${colorPercentage}%, #FFFFFF ${colorPercentage}%, ${backgroundColor} ${100 - colorPercentage}%, ${backgroundColor} 100%)
    `,
  backgroundPosition: `left top, right top`,
  backgroundSize: `10% 100%`,
  backgroundRepeat: `no-repeat`,
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      transition: 'background-color 0.5s ease',
    }}>
        <NavBar/>
        {children}
        {showModal && <Portal component={<Modal/>} portalId="generic-modal"/> }
        {showNav   && <Portal component={<NavOverlay/>} portalId="nav-overlay"/>}

        
    </div>
  )
}

export default GeneralPagesLayout;