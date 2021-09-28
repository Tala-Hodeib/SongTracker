import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '470px',
  height: '250px',
  left: 820,
  top: 92,
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function CardMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyD3VGHNO2fCE8F5oxBs86xUFL9EAkArzSw"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(CardMap)
//   <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD3VGHNO2fCE8F5oxBs86xUFL9EAkArzSw&callback=initMap"></script>