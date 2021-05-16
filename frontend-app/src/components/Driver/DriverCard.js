import React from "react";

export default function DriverCard(props) {
  const driver = props.driver;
  return (
    <div>
      <img
        src={driver.picture}
        roundedCircle
        style={{
          width: 150,
          height: 150,
        //   paddingTop: "81.25%",
          borderRadius: "50%",
          margin: 28,
        }}
      />
      <h4 style={{ fontSize: 24 }}>{driver.name}</h4>
    </div>
  );
}
