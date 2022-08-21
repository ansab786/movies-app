import React from "react";
import List from "../../component/list/List";
import Table from "../../component/table/Table";

export default function Home() {
  console.log("home running");
  return (
    <div>
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
