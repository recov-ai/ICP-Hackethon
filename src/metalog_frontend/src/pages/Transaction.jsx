import DashboardLayout from "../layouts/DashboardLayout";
import { RiChat3Fill, RiFileList2Line, RiHistoryFill } from "react-icons/ri";
import "../scss/Dashboard/Transaction.scss";

const Transaction = () => {
  return (
    <DashboardLayout>
      <div className="transaction-container">
        <div className="transaction-section">
          <h3 className="section-title"><RiFileList2Line className="section-icon order"/> Your Order</h3>
          <div className="transaction-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Time Ordered</th>
                  <th>Time Scheduled</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src="/images/profile1.png" alt="User" className="table-avatar" /> Anastasia Hansen</td>
                  <td>27 Jan 2025 | 14:29</td>
                  <td>27 Jan 2025 | 15:30</td>
                  <td><span className="status scheduled">Scheduled</span></td>
                  <td>0.7137662963551952 ICP <br /> <span className="price-idr">Rp 100.000</span></td>
                  <td>
                    <div className="action-btn">
                      <button className="cancel-btn">Cancel</button>
                      <button className="chat-btn"><RiChat3Fill /> Chat</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><img src="/images/profile2.png" alt="User" className="table-avatar" /> Mehdi Hassan</td>
                  <td>27 Jan 2025 | 14:29</td>
                  <td>27 Jan 2025 | 15:30</td>
                  <td><span className="status cancelled">Cancelled</span></td>
                  <td>0.7137662963551952 ICP <br /> <span className="price-idr">Rp 100.000</span></td>
                  <td>
                    <div className="action-btn">
                      <button className="cancel-btn">Cancel</button>
                      <button className="chat-btn"><RiChat3Fill /> Chat</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="transaction-section">
          <h3 className="section-title"><RiHistoryFill className="section-icon history" /> History</h3>
          <div className="transaction-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Time Ordered</th>
                  <th>Time Scheduled</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {["Tomi Chizimu", "Trung Thái Thương", "Lukas Martin", "Jesús Martínez", "Yousef Alaoui"].map((name, index) => (
                  <tr key={index}>
                    <td><img src={`/images/profile${index+1}.png`} alt="User" className="table-avatar" /> {name}</td>
                    <td>27 Jan 2025 | 14:29</td>
                    <td>27 Jan 2025 | 15:30</td>
                    <td><span className="status done">Done</span></td>
                    <td>0.7137662963551952 ICP <br /> <span className="price-idr">Rp 100.000</span></td>
                    <td>
                      <div className="action-btn">
                        <button className="summary-btn">View Summary</button>
                        <button className="chat-btn"><RiChat3Fill /> Chat</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Transaction;
