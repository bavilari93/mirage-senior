import React, { useEffect, useState } from "react";
import { useAppSelector } from "redux/store";
import { useDispatch } from "react-redux";
import { StaticMap as ImageMapper } from "react-easy-maps";

import Instructions from "components/instructions";
import image from "../../assets/map.png";

const StaticMap = () => {
  const {
    common: { viewedStatic },
  } = useAppSelector((state) => state);
  const dispatch = useDispatch();
  const [view, setView] = useState("initial");

  const AREAS = [
    {
      id: "Area 1",
      coords: [210, 170, 20],
      link: {
        href: "https://adobeaero.app.link/PXHan2v5cyb",
        target: "_blank"
      },
    },
    {
      id: "Area 2",
      coords: [230, 350, 20],
      link: {
        href: "https://adobeaero.app.link/WRQTAp5ddyb",
        target: "_blank"
      },
    },
  ];

  useEffect(() => {
    if (viewedStatic) setView("map");
  }, []);

  const renderView = () => {
    switch (view) {
      case "initial":
        return <Instructions setNext={setView} type="static" />;
      case "map":
        return (
          <map
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={image} alt="Clickable Image" style={{ position: "relative", top: 0, left: 0, zIndex: 1, height:"inherit", width:"inherit" }} />
            {AREAS.map((area) => (
              <area key={area.id} shape="circle" coords={area.coords.join(",")} href={area.link.href} target={area.link.target} style={{border:'red solid 1px', position:'absolute', zIndex:"100", width:"50px", height:"50px", borderRadius: "50%" }} />
            ))}
          </map>
        );
    }
  };

  return <>{renderView()}</>;
};

export default StaticMap;