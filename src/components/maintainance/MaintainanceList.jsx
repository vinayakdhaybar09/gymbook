import React from 'react'
import { RiWhatsappFill } from "react-icons/ri";
import "../../styles/maintainance/maintainanceList.css";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const MaintainanceList = ({ data, index }) => {
  return (
    <div key={index} className="maintainance-info-div">
      {/* <img src={data?.profileImg} alt="" className="maintainance-profile-img" /> */}
      <p className="maintainance-name">
        {data?.name.length >= 20
          ? data?.name.substring(0, 20) + "..."
          : data?.name}
      </p>
      <p className="maintainance-amount">{data?.amount}</p>
      <div className="info-flex">
        <p className="info-title">Expiry Date</p>
        <p className="info-date">{data?.expDate}</p>
      </div>
      {/* <div className="info-flex">
        <p className="info-title">Due Amount</p>
        <p className={data?.dueAmount > 0 ? "info-due" : "info-due-zero"}>
          {data?.dueAmount}
        </p>
      </div> */}
      <AiFillEdit className="whatsapp-icon" />
      <AiFillDelete />
      <Link to={`/members/${data?.memberId}`} className="view-details-btn">
        View Details
      </Link>
    </div>
  );
};

export default MaintainanceList