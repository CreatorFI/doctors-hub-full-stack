import React from "react";
import InfoCard from "./InfoCard";

import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const infosData = [
  {
    title: "Opening Hours",
    description: "We Are Open 7 Days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Hour Location",
    description: "Brooklyn, NY, 10003, USA",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Call US Now",
    description: "+1156972344",
    icon: faPhone,
    background: "primary",
  },
];
const BusinessInfo = () => {
  return (
    <section className=" d-flex justify-content-center">
      <div className="w-75 row">
      
       {infosData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
