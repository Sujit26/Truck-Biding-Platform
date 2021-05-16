
import * as React from "react";

import { DataGrid, GridToolbar } from "@material-ui/data-grid";

export default function ConsignmentComponent(props) {
  
  const data = {
    columns: props.columns,
    rows: props.row,
  };
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 10,
  //   maxColumns: 10,
  // });
  console.log(data);

  return (
    <div style={{height: 1000, width: "100%" , textAlign:"left",margin:20}}>
      <h1 >Consignments</h1>
      <DataGrid
        {...data}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}

