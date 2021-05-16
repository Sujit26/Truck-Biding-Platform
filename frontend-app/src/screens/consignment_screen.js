import React from 'react'
import ConsignmentComponent from "../components/Consignments/consignments"
import consignments from "../components/Data/consignmnets"

export default function ConsignmentScreen() {
    const data = [
        {
          field: "id",
          hide: true,
        },
        {
          field: "consginee_name",
          headerName: "Consginee",
          hide:true,
          width: 150,
        },
        {
          field: "trasporter_name",
          headerName: "Truck Union",
          width: 150,
        },
        {
          field: "trasporter_email",
          headerName: "Union Email",
          width: 150,
        },
        {
          field: "driver_name",
          headerName: "Driver",
          width: 100,
        },
        {
          field: "driver_phone",
          headerName: "Driver Contact",
          disableClickEventBubbling: true,
          width: 150,
        },
        {
          field: "truck_type",
          headerName: "Truck",
          width: 200,
        },
        {
          field: "pickup_date",
          headerName: "Pickup Date",
          width: 150,
        },
        {
          field: "pickup_address",
          headerName: "Pickup",
          width: 200,
        },
        {
          field: "drop_off_address",
          headerName: "DropOff",
          width: 150,
        },
        {
          field: "status",
          headerName: "Status",
          type: "number",
          width: 150,
        },
      ];
    return (
        <div>
            <ConsignmentComponent columns={data} row = {consignments}/>
        </div>
    )
}
