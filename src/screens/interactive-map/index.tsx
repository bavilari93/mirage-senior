import Instructions from "components/instructions";
import GoogleMapInteractive from "components/map/google-map";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "redux/store";

const InteractiveMap = () => {
  const {
    common: { viewedInteractive },
  } = useAppSelector((state) => state);
  const [view, setView] = useState("initial");
  useEffect(() => {
    if (viewedInteractive) setView("map");
  }, []);

  const renderView = () => {
    switch (view) {
      case "initial":
        return <Instructions setNext={setView} type="interactive" />;
      case "map":
        return <GoogleMapInteractive />;
    }
  };
  return <>{renderView()}</>;
};

export default InteractiveMap;
