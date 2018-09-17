import React from "react";
import "./Images.css";
 
const Images = props => (
<div className="card" onClick={ () => props.click(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <span className="remove">𝘅</span>

</div>
);


export default Images;