import { useState } from "react";

function Search({ onSearchDate, onSearchMonth, onSearchYear }) {
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  return (
    <div className="search-box">

      <h3>Search by Date</h3>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={() => onSearchDate(date)}>
        Get By Date
      </button>

      <h3>Search by Month</h3>
      <input
        type="number"
        placeholder="Enter Month (1-12)"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      />
      <button onClick={() => onSearchMonth(month)}>
        Get By Month
      </button>

      <h3>Temperature Summary by Year</h3>
      <input
        type="number"
        placeholder="Enter Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={() => onSearchYear(year)}>
        Get Summary
      </button>

    </div>
  );
}

export default Search;