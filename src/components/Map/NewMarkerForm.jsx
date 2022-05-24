import { useState } from "react";
import "../../assets/styles/NewMarker.scss";
import ErrorToast from "../ErrorToast/ErrorToast";
import { postData } from "../../API/api-service";

export default function NewMarkerForm({ setNewMarker }) {
  const title = "Add Spot";
  const name = "Name";
  const country = "Country";
  const month = "High Season";

  const [inputName, setInputName] = useState("");
  const [inputCountry, setInputCountry] = useState("");
  const [inputMonth, setInputMonth] = useState("");
  const [error, setError] = useState(false);
  const spotsURL = "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputName.trim().length === 0 || inputCountry.trim().length === 0) {
      setError(true);
    } 
    else {
      const newMarkerInput = {
        name: inputName,
        country: inputCountry,
        month: inputMonth.toLocaleString("default", { month: "long" }),
      };
      postData(spotsURL, newMarkerInput);
      setNewMarker(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="newmarker-form-container">
      {error && <ErrorToast message="No input can be empty" />}
      <h2>{title}</h2>

      <div className="form-field">
        <label>{name}</label>
        <input
          value={inputName}
          type="text"
          onChange={(e) => setInputName(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>{country}</label>
        <input
          value={inputCountry}
          type="text"
          onChange={(e) => setInputCountry(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>{month}</label>
        <input
          value={inputMonth}
          type="month"
          onChange={(e) => setInputMonth(e.target.value)}
        />
      </div>

      <div className="buttons-container">
        <button
          type="button"
          className="cancel"
          onClick={() => setNewMarker(false)}
        >
          Cancel
        </button>

        <button type="submit" className="confirm">
          Add Spot
        </button>
      </div>
    </form>
  );
}
