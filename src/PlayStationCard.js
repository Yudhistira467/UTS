import React from 'react';

const PlayStationCard = ({ title, description, image }) => {
  return (
    <div className="playstation-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PlayStationCard;
