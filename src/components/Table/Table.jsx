import { useState } from "react";
import "../../assets/styles/Table.scss";

export default function Table({ spots, setSpots }) {
  const [inputSearch, setInputSearch] = useState("");
  const [sort, setSort] = useState("ascending");
  const headings = ["name", "country", "lat", "long", "probability", "month"];

  const handleSortColumn = (col) => {
    if (sort === "ascending") {
      const sorted = [...spots].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setSpots(sorted);
      setSort("descending");
    } else {
      const sorted = [...spots].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? -1 : 1
      );
      setSpots(sorted);
      setSort("ascending");
    }
  };

  const filterSpots = () => {
    return spots?.filter(
      (spot) =>
        inputSearch === "" ||
        spot.country
          .toLocaleLowerCase()
          .includes(inputSearch.toLocaleLowerCase()) ||
        spot.name
          .toLocaleLowerCase()
          .includes(inputSearch.toLocaleLowerCase()) ||
        spot.month
          .toLocaleLowerCase()
          .includes(inputSearch.toLocaleLowerCase()) ||
        spot.probability
          .toString()
          .toLocaleLowerCase()
          .includes(inputSearch.toLocaleLowerCase())
    );
  };

  const filteredSpots = filterSpots();

  return (
    <div className="table-container">
      <div>
        <input
          type="text"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Search"
        />
      </div>
      <div>
        <table cellSpacing={0}>
          <thead>
            <tr>
              {headings.map((heading, index) => (
                <th key={index} onClick={() => handleSortColumn(heading)}>
                  {heading.toUpperCase() === "PROBABILITY"
                    ? "WIND PROBABILITY"
                    : heading.toUpperCase() === "MONTH"
                    ? "WHEN TO GO"
                    : heading.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredSpots.map((obj, index) => (
              <tr key={index}>
                <td>{obj.name}</td>
                <td>{obj.country}</td>
                <td>{obj.lat}</td>
                <td>{obj.long}</td>
                <td>{obj.probability + "%"}</td>
                <td>{obj.month}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
