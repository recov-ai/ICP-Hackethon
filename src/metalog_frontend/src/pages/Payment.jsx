import DashboardLayout from "../layouts/DashboardLayout";
import { RiCalendarFill, RiCheckboxCircleFill } from "react-icons/ri";
import "../scss/Dashboard/Payment.scss";
import { FaLock, FaStar } from "react-icons/fa";

const Payment = () => {
  return (
    <DashboardLayout>
      <div className="container-payment">
        <div className="wrapper-payment">
          <div className="box-psychologist">
            <h3>Psychologist Profile</h3>
            <div className="info-psychologist">
              <img src="/images/psikolog1.png" alt="Psychologist" className="avatar-psychologist" />
              <div>
                <h4>Amira Farouq</h4>
                <div className="psychologist-details">
                  <div className="experience">
                    <FaLock className="icon" /> <span>10 Years</span>
                  </div>
                  <div className="rating">
                    <FaStar className="icon star" /> <span>4.5 / 5</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="details-booking">
              <h4>Booked At</h4>
              <div>
                <p><RiCalendarFill className="icon-time" /> 27 January 2025, 22:00</p>
              </div>
            </div>

            <div className="section-benefits">
              <h4>Benefits</h4>
              <ul>
                <li><RiCheckboxCircleFill className="icon-checkmark" /> Consultation Session for 30 minutes</li>
                <li><RiCheckboxCircleFill className="icon-checkmark" /> Session Summary with AI</li>
                <li><RiCheckboxCircleFill className="icon-checkmark" /> Consultation With Expert</li>
                <li><RiCheckboxCircleFill className="icon-checkmark" /> Privacy and security secured</li>
              </ul>
            </div>
          </div>

          <div className="box-payment">
            <h3>Payment Details</h3>
            <div className="pricing-info">
              <p>Price Per Session (30 Min) <span>1.2 ICP</span></p>
              <p>Platform Fee (10%) <span>0.12 ICP</span></p>
              <hr />
              <p className="total-payment">Total Harga <span>1.32 ICP</span></p>
            </div>
            <button className="btn-checkout">Checkout Now</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Payment;
