import Instructions from "components/instructions";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "redux/store";
import image from "assets/map.png";
import ImageMapper from "react-image-mapper";
import { Text } from "common/text";
import { promptModal } from "redux/slices/common";
import { useDispatch } from "react-redux";

const StaticMap = () => {
  const {
    common: { viewedStatic },
  } = useAppSelector((state) => state);
  const dispatch = useDispatch();
  const [view, setView] = useState("initial");

  const AREAS = [
    {
      name: "Area 1",
      shape: "circle",
      coords: [210, 170, 20],
      preFillColor: "transparent",
      lineWidth: 2,
      href: "https://adobeaero.app.link/PXHan2v5cyb",
      target: '_blank'
    },
    {
      name: "Area 2",
      shape: "circle",
      coords: [230, 350, 20],
      preFillColor: "transparent",
      lineWidth: 2,
      href: "https://adobeaero.app.link/WRQTAp5ddyb",
      target: '_blank'
    },
  ];
  const imageMap = {
    name: "image-map",
    areas: AREAS,
  };

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
              map={imageMap}
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
