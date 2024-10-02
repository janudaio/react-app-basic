import { useState, useEffect } from "react";
import "../DataFetching.css";

const DataFetching = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columnKeys = ["name", "username", "email", "phone"];
  const columns = ["Name", "Username", "Email", "Phone"];

  return (
    <div>
      <h1 className="heading">Users</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              {columns.map((column, colIndex) => (
                <th key={colIndex}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columnKeys.map((key, keyIndex) => (
                  <td key={keyIndex}>{row[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataFetching;
