import React from 'react';
import { promptModal } from 'redux/slices/common';
import { useAppDispatch } from 'redux/store';
import { staticMapModal } from 'common/helper/modals';
import { Link } from 'react-router-dom';
import { PATH_PAGE } from 'router/paths';

const Home = ():JSX.Element => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <div onClick={()=>{dispatch(promptModal({modalData: staticMapModal}))}}>THIS IS HOME</div>
            <div style={{display:'flex', flexDirection:"column"}}>
            <Link to={PATH_PAGE.about}>About the creator</Link>
            <Link to={PATH_PAGE.mirage.root}>About mirage</Link>
            <Link to={PATH_PAGE.mirage.instructions}>Instructions about the project</Link>
            <Link to={PATH_PAGE.mirage.map.interactive}>Interactive Map</Link>
            <Link to={ PATH_PAGE.mirage.map.static}>Static Map</Link>
            </div>

        </div>
    );
};

export default Home;