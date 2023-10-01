import { Select } from "antd";
import React from "react";
import MaintainanceList from "../../components/maintainance/MaintainanceList";

const maintainanceInfo = [
  {
    memberId: 1,
    name: "Mirror Damage",
    date: "32 April 2023",
    expDate: "22 May 2023",
    amount: 1000,
  },
  {
    memberId: 2,
    name: "Cleaning",
    date: "1 March 2023",
    expDate: "22 Jan 2023",
    amount: 5000,
  },
];

const Maintainance = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="members-page">
      <div className="search-container">
        <div className="select-input">
          <Select
            className="select-antd-input"
            bordered={false}
            defaultValue="Name"
            style={{
              width: 140,
            }}
            onChange={handleChange}
            options={[
              {
                value: "name",
                label: "Name",
              },
              {
                value: "due",
                label: "Due Amount",
              },
              {
                value: "exp",
                label: "Exp. Date",
              },
              {
                value: "contact",
                label: "Contact No.",
              },
            ]}
          />
        </div>
        <input type="text" className="search-input" />
        <p className="add-btn">+ Add Member</p>
      </div>
      <div className="member-list-container">
        {maintainanceInfo?.map((data, index) => {
          return <MaintainanceList key={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Maintainance;
