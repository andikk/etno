import React from "react";
import { Map, TileLayer, Marker, Popup} from 'react-leaflet'
import MarkerClusterGroup from "react-leaflet-markercluster";

const App = () => {

  const objects = [
    {
      id: "1",
      name: "Объект 1",
      lat: 45.080572,
      lon: 41.953576
    },
    {
      id: "2",
      name: "Объект 2",
      lat: 45.180572,
      lon: 41.953576
    },
  ];

  return (
    <Map center={[45.080572, 41.953576]} zoom={10}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <MarkerClusterGroup>
        {objects.map((object) => (
          <Marker position={[object.lat, object.lon]}>
            <Popup><h3>{object.name}</h3></Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </Map>
  )
};

export default App;
