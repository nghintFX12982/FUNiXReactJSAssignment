import React from "react";

export const Loading = () => {
  return (
    <div className="col-12" style={{ marginTop: "80px" }}>
      <span className="fa fa-spinner fa-pulse fa-fw fa-3x text-primary"></span>
      <p>Loading...</p>
    </div>
  );
};
