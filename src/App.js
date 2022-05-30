import React from "react";
// import { useSelector } from "react-redux";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import Map from "./Map";

const Home = () => {
  const WrappedMap = withScriptjs(withGoogleMap(Map));
  const formattedOrigin = {
    latitude: 25.900000,
    longitude: 81.839996,
  };
  const formattedDestination = {
    latitude: 26.900000,
    longitude: 83.839996,
  };

  return (
    <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&key=AIzaSyC7pyg2XfsHis1DNOlMrCB-nx41-a49qJ0`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: "80vh" }} />}
      mapElement={<div style={{ height: `100%` }} />}
      formattedOrigin={formattedOrigin}
      formattedDestination={formattedDestination}
    />
  );
};

export default Home;