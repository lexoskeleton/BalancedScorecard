import React from "react";

export const FormBtn = props => (
    <div className="form-group">
  <button {...props} style={{ marginLeft: 15, clear:"both"}} className="btn btn-xs btn-success">
    {props.children}
  </button>
  </div>
);
