import React from 'react';
import { LayoutProps } from 'models/layouts';
import { Portal } from 'components/portal';
import { useAppSelector } from 'redux/store';
import NavBar from 'components/navigation';
import { Modal } from 'components/modal/modal';
import NavOverlay from 'components/nav-overlay';


// this wrapper will handle general page styling 
const GeneralPagesLayout : React.FC<LayoutProps> = ({ children }) => {
  const {
    // show menu 
    common: { showModal,showNav },
  } = useAppSelector((state) => state);
  
  return (
    <>
        <NavBar/>
        {children}
        {showModal && <Portal component={<Modal/>} portalId="generic-modal"/> }
        {showNav   && <Portal component={<NavOverlay/>} portalId="nav-overlay"/>}

        
    </>
  )
}

export default GeneralPagesLayout;