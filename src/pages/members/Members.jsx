import { Select } from "antd";
import React from "react";
import "../../styles/members.css"
import MemberList from "../../components/members/MemberList";

const membersData = [
  {
    memberId: 1,
    name: "Vinayak Ankush Dhaybar hdugxauhS",
    startingDate: "32 April 2023",
    expDate: "31 July 2023",
    dueAmount: 5000,
    contactNo: 1234567890,
    profileImg: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    memberId: 2,
    name: "Rajiv Sham Sharma",
    startingDate: "32 April 2023",
    expDate: "31 Sept 2023",
    dueAmount: 3000,
    contactNo: 1234567890,
    profileImg: "https://randomuser.me/api/portraits/men/36.jpg",
  },
];

const Members = () => {
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
        {
          membersData?.map((data, index)=>{
            return(
              <MemberList key={index} data={data}  />
            )
          })
        }
      </div>
    </div>
  );
};

export default Members;
