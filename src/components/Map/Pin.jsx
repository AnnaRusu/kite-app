import L from "leaflet";
import pin from "../../assets/images/pin.svg";
import favPin from "../../assets/images/favorite.svg";
import { Marker, Popup } from "react-leaflet";

export default function Pin({ spots, favSpots, handleAddFavorite }) {
  const wind = "WIND PROBABILITY";
  const lat = "LATITUDE";
  const lng = "LONGITUDE";
  const month = "WHEN TO GO";

  const favPinIcon = L.icon({
    iconUrl: pin,
    iconRetinaUrl: pin,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
  });

  const pinIcon = L.icon({
    iconUrl: pin,
    iconRetinaUrl: pin,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
  });

  return (
    <>
      {spots.map((el, index) => (
        <Marker icon={pinIcon} position={[el.lat, el.long]} key={index}>
          <Popup>
            <div>
              <h3>{el.name}</h3>
              <p>{el.country}</p>
              <h5>{wind}</h5>
              <p>{el.probability}</p>
              <h5>{lat}</h5>
              <p>{el.lat}</p>
              <h5>{lng}</h5>
              <p>{el.long}</p>
              <h5>{month}</h5>
              <p>{el.month}</p>
            </div>
            <button className="favorites-button" onClick={handleAddFavorite}>Add to favorites</button>
          </Popup>
        </Marker>
      ))}
    </>
  );
}
