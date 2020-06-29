import React from "react";
import "./style.css";

function ProjCard(props) {
  return (
    <div className="card">
      <div className="content-left">
        <div className="img-container">
          <img className="proj-img" alt={props.name} src={props.pic_link} />
        </div>
        <h2 className="proj-name">{props.name}</h2>
      </div>
      <div className="content-right">
        <ul className="content-ul">
          <li className="content-li">
            <strong>Authors:</strong> {props.authors}
          </li>
          <li className="content-li">
            <strong>Tech Used:</strong> {props.tech_used}
          </li>
          <li className="content-li">
            <strong>Repo:</strong> {props.repo_link}
          </li>
          <li className="content-li">
            <strong>Deployed:</strong> {props.deployed_link}
          </li>
        </ul>
        <div classNames="blurb">{props.blurb}</div>
      </div>
    </div>
  );
}

export default ProjCard;
