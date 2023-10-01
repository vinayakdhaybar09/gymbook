import React from "react";
import "../../styles/members/memberDetails.css";
import { RiArrowLeftSFill, RiWhatsappFill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const memberInfo = {
  memberId: 1,
  name: "Vinayak Ankush Dhaybar hdugxauhS",
  startingDate: "32 April 2023",
  expDate: "31 July 2023",
  dueAmount: 5000,
  contactNo: 1234567890,
  profileImg: "https://randomuser.me/api/portraits/men/34.jpg",
  status: "active",
};

const MemberDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="member-details-container">
      <div className="member-details-btn-div">
        <div className="back-btn" onClick={() => navigate(-1)}>
          <RiArrowLeftSFill />
          <p>Back</p>
        </div>
        <p className="edit-btn">
          <AiFillEdit /> Edit
        </p>
      </div>
      <div className="member-details-div">
        <div className="member-details-img-div">
          <img
            src={memberInfo?.profileImg}
            alt="profile img"
            className={`member-details-img-${memberInfo?.status}`}
          />
          <p className={`member-details-status-${memberInfo?.status}`}>
            Active
          </p>
          <div className="member-details-contact-icon">
            <BsTelephoneFill className="member-details-contact-icon-call" />
            <RiWhatsappFill className="member-details-contact-icon-whatsapp" />
          </div>
        </div>
        <div className="member-details-info">
          <div className="member-details-flex">
            <label className="member-details-label">Name :</label>
            <p className="member-details-value">Vinayak Ankush Dhaybar</p>
          </div>
          <div className="member-details-flex">
            <label className="member-details-label">Contact No. :</label>
            <p className="member-details-value">1234567890</p>
          </div>
          <div className="member-details-flex">
            <label className="member-details-label">Goal :</label>
            <p className="member-details-value">Weight loss</p>
          </div>
          <div className="member-details-flex">
            <label className="member-details-label">Address :</label>
            <p className="member-details-value">Viman Nagar</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MemberDetails;
