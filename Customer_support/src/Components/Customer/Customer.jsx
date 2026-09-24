import React from "react";

const Customer = ({ customer }) => {
  const { id, title, description, createdAt,name, status } = customer;
  return (
    <div className="p-5 shadow-xl rounded-2xl  my-3">
      <div>
        <h1 className="font-semibold text-xl my-2">{title}</h1>
        <button>hello</button>
      </div>
      <p>{description}</p>
      <div className="flex gap-3 my-3">
        <p>{name}</p>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default Customer;
