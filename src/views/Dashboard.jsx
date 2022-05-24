import { useState, useEffect } from "react";
import { fetchData } from "../API/api-service";
import Map from "../components/Map/Map";
import Header from "../layouts/Header";
import Table from "../components/Table/Table";
import NewMarkerForm from "../components/Map/NewMarkerForm";
import MiniForm from "../components/Form/MiniForm";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [newMarker, setNewMarker] = useState(false);
  const [filterForm, setFilterForm] = useState(false);
  const [inputCountry, setInputCountry] = useState("");
  const [inputWind, setInputWind] = useState("");
  const spotsURL = "";

  useEffect(() => {
    fetchData(spotsURL).then((receivedData) => setData(receivedData));
  }, []);

  const handleFilterButton = () => {
    filterForm ? setFilterForm(false) : setFilterForm(true);
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const filteredData = data.filter(
      (spot) =>
        spot.country === inputCountry &&
        spot.probability.toString() === inputWind
    );
    setData(filteredData);
    setFilterForm(false);
  };

  return (
    <>
      {filterForm && (
        <MiniForm
          buttonText="Apply Filters"
          label1="Country"
          label2="Wind Prob."
          inputValue1={inputCountry}
          setInputValue1={setInputCountry}
          inputValue2={inputWind}
          setInputValue2={setInputWind}
          handleSubmit={handleFilterSubmit}
        />
      )}

      <button className="filter-button" onClick={handleFilterButton}></button>
      <div className="container-dashboard">
        {newMarker && <NewMarkerForm setNewMarker={setNewMarker} />}
        <Header setNewMarker={setNewMarker} />
        <Map spots={data} />
        <Table spots={data} setSpots={setData} />
      </div>
    </>
  );
}
