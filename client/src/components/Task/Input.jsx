import React from "react";

export const Input = props => (
  <div className="form-group">
    <input className="form-control" {...props} style={{ marginLeft: 15, marginRight: 5,paddingLeft: 5, paddingRight:5, width:"95%"}}/>
  </div>
);
