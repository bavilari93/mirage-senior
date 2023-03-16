import Instructions from 'components/instructions';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from 'redux/store';

const StaticMap = () => {
    const {
        common: {viewedStatic},
      } = useAppSelector((state) => state);
    const [view, setView] = useState('initial')

    useEffect(()=>{
        if(viewedStatic)setView('map')
    }, [])

    const renderView = () =>{
        switch(view){
            case 'initial':
                return <Instructions setNext = {setView} type="static"/>
            case 'map' : 
                return  <>static map </>
        }
    }
    return (
        <>
            {renderView()}
        </>
    );
};

export default StaticMap;