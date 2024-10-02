import { useState, useEffect } from "react";
import axios from "axios";
import "../DataFetching.css";

const Axioscall = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response);

      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columnKeys = ["name", "username", "email", "website"];
  const columns = ["Name", "Username", "Email", "Website"];

  return (
    <div>
      <h2 className="heading">Users Table</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
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

export default Axioscall;
