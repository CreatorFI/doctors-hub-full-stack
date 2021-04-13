import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './InfoCard.css'
const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4 infoCard">
      <div className={`d-flex info-${info.background} info-container justify-content-center`}>
        <div className="me-4">
          <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
        </div>
        <div>
          <h6> {info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
