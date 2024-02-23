import BaseCard from "./BaseCard";

const ActivityCard = ({ details: { distance, type }, num }) => {
  return (
    <BaseCard title={distance + " km"} content={type} info={num}></BaseCard>
  );
};

export default ActivityCard;
