import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  MarkerClusterer,
  useLoadScript,
} from "@react-google-maps/api";
import { configVars } from "common/config/enviroment-variables";
import { useDispatch } from "react-redux";
import { promptModal } from "redux/slices/common";

import { Text } from "common/text";


const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 32.07313268439657,
  lng: -81.09285765010242,
};

const markersList = [
  { lat: 32.066309, lng: -81.096695 , icon:require('assets/fountain.png'), url:"https://adobeaero.app.link/WRQTAp5ddyb", staticPath:"/mirage/interactive-map/park"},//park
  { lat: 32.05901901551292, lng: -81.09454088927525, icon:require('assets/house.png'),  url:"",  staticPath:"/mirage/interactive-map/room"},//home
  { lat: 32.08077622437831, lng: -81.09693603132317, icon:require('assets/lulu.png'),  url:"https://adobeaero.app.link/PXHan2v5cyb",staticPath:"/mirage/interactive-map/cheesecake" }, //lulu
  { lat: 32.06629756709852, lng: -81.0924795773721, icon:require('assets/kroger.png'),  url:"" }, //kroger
];

const options = {
  imagePath:
    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
};

declare const google: any;

const GoogleMapInteractive = () => {
  const [userLocation, setUserLocation] = useState<null | { lat: number; lng: number }>(null);
  const [markers, setMarkers] = useState(markersList);
  const [options, setOptions] = useState({ imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m" });
  const dispatch = useDispatch()



  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: configVars.GOOGLE_API_KEY,
    mapIds: [configVars.GOOGLE_MAP_ID],
    id: "mirage",
    libraries:["geometry"]
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        () => null,
        { enableHighAccuracy: true }
      );
    }
  }, []);

  const isMarkerCloseToUser = (marker: any) => {
    if (!userLocation || !google) return false;
    const distance = google.maps.geometry.spherical.computeDistanceBetween(
      new google.maps.LatLng(userLocation),
      new google.maps.LatLng(marker)
    );
    return distance < 1;
  };


  const onMapClick = (event: any) => {
    setMarkers((current) => [...current, { lat: event.latLng.lat(), lng: event.latLng.lng() , icon: event.icon, url: event.url }]);
  };

  const displayModal = (marker:any, url:string, staticPath:string) =>{
    if(configVars.IS_MAP_VIEW_ENABLED  || isMarkerCloseToUser(marker) ){
      dispatch(promptModal({modalData: {...Text.mapModal, redirectLink:url, staticPath}}))

    }else{
      //display modal get witin a 50 meter radius
      dispatch(promptModal({modalData: Text.errorModal}))
    }
  }

  if (loadError) return <>"Error loading maps"</>;
  if (!isLoaded) return <>"Loading maps"</>;



  return isLoaded ? (
    <GoogleMap
      onClick={onMapClick}
      center={center}
      zoom={15}
      mapContainerStyle={{ height: "100vh", width: "100%" }}
      options={{
        mapId: configVars.GOOGLE_MAP_ID,
      }}
    >
      {userLocation && <Marker position={userLocation} />}
      <MarkerClusterer options={options}>
        {(clusterer) => (
          <>
            {markers.map((marker: any) => (
              <Marker
              key={`${marker.lat}-${marker.lng}`}
              position={marker}
              clusterer={clusterer}
              onClick={() => {displayModal(marker,marker.url, marker.staticPath)}}
              opacity={isMarkerCloseToUser(marker) ? 0.5 : 1}
              icon={{
                url: (marker.icon),
              }}
              />
            ))}
          </>
        )}
      </MarkerClusterer>
    </GoogleMap>
  ) : (
    <div>error</div>
  );
};

export default GoogleMapInteractive;
