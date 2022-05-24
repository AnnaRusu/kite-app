import { MapContainer, TileLayer } from "react-leaflet";
import { useState, useEffect } from "react";
import { fetchData, postData } from "../../API/api-service";
import Pin from "../Map/Pin";
import "../../assets/styles/Map.scss";
import "leaflet/dist/leaflet.css";

export default function Map({ spots }) {
  const [favorites, setFavorites] = useState();
  const favoritesURL = "";

  useEffect(() => {
    fetchData(favoritesURL).then((data) => setFavorites(data));
  }, []);

  const handleAddFavorite = (e) => {
    // postData(e);
    console.log(e.target);
  };

  return (
    <div className="container-map">
      <MapContainer center={[50, 50]} zoom={3} className="mapContainerBox">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Pin
          spots={spots}
          favSpots={favorites}
          handleAddFavorite={handleAddFavorite}
        />
      </MapContainer>
    </div>
  );
}
