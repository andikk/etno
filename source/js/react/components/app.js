import React, {useState} from "react";
import { Map, TileLayer, Marker, Popup, Tooltip} from 'react-leaflet'
import MarkerClusterGroup from "react-leaflet-markercluster";
import Modal from 'react-modal';
import useAxios from "axios-hooks";
import { css } from "@emotion/core";
import Spinner from "react-spinners/BeatLoader";
import Detail from "./detail";
import {SITE_URL} from "../helper";

const override = css`
  display: block;
  border-color: 832323;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
`;

const App = () => {
  const [modalIsOpen,setIsOpen] = useState(false);

  const [{ data: objects, loading, error }] = useAxios(
    `${SITE_URL}list.json`
  );

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal =  () => {
    setIsOpen(true);
  };


  if (loading) return <Spinner
    css={override}
    size={20}
    color={"#832323"}
    loading={loading}
  />;
  if (error) return <p>Ошибка загрузки</p>;

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
          onRequestClose={closeModal}
      >
          <button className='button-close' onClick={closeModal}>&times;</button>
          <Detail/>
      </Modal>
    </>

  )
};

export default App;
