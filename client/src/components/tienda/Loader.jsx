import React from "react";
import "./loader.css";

export default function Loader({ loading }) {
  return <>{loading && <div id="lds-dual-ring"></div>}</>;
}
