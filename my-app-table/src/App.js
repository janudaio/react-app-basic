// import TableComponent from "../src/components/TableComponent";
import Axioscall from "./components/Axioscall";
// import DataFetching from "./components/DataFetching";

function App() {
  // const columnKeys = ["name", "age", "occupation"];
  // const columns = ["Name", "Age", "Occupation"];

  // const data = [
  //   {
  //     name: "Kamal",
  //     age: 28,
  //     occupation: "Engineer",
  //   },
  //   {
  //     name: "Amal",
  //     age: 34,
  //     occupation: "Doctor",
  //   },
  // ];

  return (
    <div>
      {/* <TableComponent
        tableColumnKeys={columnKeys}
        tableColumns={columns}
        tableData={data}
      /> */}
      {/* <DataFetching /> */}
      <Axioscall />
    </div>
  );
}

export default App;
