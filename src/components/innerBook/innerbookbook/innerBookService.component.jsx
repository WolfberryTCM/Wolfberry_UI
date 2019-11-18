import React from "react";

const innerBookService = props => {
  const { profile } = props.location;
  const { services } = profile;
  return (
    <ul>
      {services.map((service, index) => (
        <li key={index}>{service.title}</li>
      ))}
    </ul>
  );
};

export default innerBookService;
