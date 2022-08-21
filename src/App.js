import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import List from "./component/list/List";
import Table from "./component/table/Table";

export default function App() {
  return (
    <div>
      <h1>Ansab App</h1>
      <div className="container my-3">
        <div className="row">
          <div className="col-sm-3">
            <List />
          </div>
          <div className="col-sm-9">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}
