import React from 'react'
import { RiWhatsappFill } from "react-icons/ri";
import "../../styles/members/memberList.css"
import { Link } from 'react-router-dom';

const MemberList = ({data, index}) => {
  return (
    <div key={index} className="member-info-div">
      <img src={data?.profileImg} alt="" className="member-profile-img" />
      <p className="member-name">
        {data?.name.length >= 20
          ? data?.name.substring(0, 20) + "..."
          : data?.name}
      </p>
      <p className="member-info">{data?.contactNo}</p>
      <div className="info-flex">
        <p className="info-title">Expiry Date</p>
        <p className="info-date">{data?.expDate}</p>
      </div>
      <div className="info-flex">
        <p className="info-title">Due Amount</p>
        <p className={data?.dueAmount > 0 ? "info-due" : "info-due-zero"}>
          {data?.dueAmount}
        </p>
      </div>
      <RiWhatsappFill className="whatsapp-icon" />
      <Link to={`/members/${data?.memberId}`}  className="view-details-btn">View Details</Link>
    </div>
  );
}

export default MemberList