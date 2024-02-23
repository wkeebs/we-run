import React from "react";
import BaseCard from "./BaseCard";

const HeaderCard = ({ rowNum }) => {
  return <BaseCard title={rowNum}></BaseCard>;
};

export default HeaderCard;
