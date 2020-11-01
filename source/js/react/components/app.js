import React, {useState, useEffect} from "react";
import { Map, TileLayer, Marker, Popup, Tooltip} from 'react-leaflet'
import MarkerClusterGroup from "react-leaflet-markercluster";
import Modal from 'react-modal';
import useAxios from "axios-hooks";

const App = () => {
  const [modalIsOpen,setIsOpen] = useState(false);

  const [{ data: objects, loading, error }] = useAxios(
    'http://localhost:3000/list.json'
  );


  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal =  () => {
    setIsOpen(true);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
      <Map center={[45.080572, 41.953576]} zoom={10}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <MarkerClusterGroup>
          {objects.map((object) => (
            <Marker position={[object.lat, object.lon]}>
              <Popup>
                <img className="map__img" src={object.img} alt={object.name}/>
                <button className="button button--sm" onClick={openModal}>Подробнее</button>
              </Popup>
              <Tooltip direction='bottom' offset={[-15.5, 23]} permanent  interactive={true}>{object.name}</Tooltip>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </Map>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        onRequestClose={closeModal}
      >
        <h1>Test</h1>
        <button className='button-close' onClick={closeModal}>&times;</button>
      </Modal>
    </>

  )
};

export default App;
