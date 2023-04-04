import React, { useEffect, useState } from "react";
import { useAppSelector } from "redux/store";
import { Text } from "common/text";
import { promptModal } from "redux/slices/common";
import { useDispatch } from "react-redux";
import { StaticMap as ImageMapper } from "react-easy-maps";

import Instructions from "components/instructions";
import image from "assets/map.png";

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
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImageMapper
              src={image}
              map={{ areas: AREAS }}
              width={500}
              height={900}
              lineWidth={4}
              strokeColor="transparent"
            />
          </div>
        );
    }
  };

  return <>{renderView()}</>;
};

export default StaticMap;