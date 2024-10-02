const TableComponent = ({ tableColumnKeys, tableColumns, tableData }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {tableColumns.map((column, colIndex) => (
            <th key={colIndex}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {tableColumnKeys.map((column, colIndex) => (
              <td key={colIndex}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
