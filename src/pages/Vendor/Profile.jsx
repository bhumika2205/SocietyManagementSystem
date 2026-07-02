import {
  FiUser, FiMail, FiPhone, FiMapPin, FiTool,
  FiStar, FiCheckCircle, FiEdit2, FiCamera
} from "react-icons/fi";
import "./Profile.css";

const skills = ["Electrical Wiring", "Panel Installation", "AC Repair", "Generator Servicing", "CCTV Setup", "Inverter Maintenance"];

const reviews = [
  { name: "Mr. Sharma", flat: "A-402", rating: 5, comment: "Excellent work, very professional and on time!", date: "28 Jun 2026" },
  { name: "Mrs. Mehta", flat: "B-101", rating: 4, comment: "Good job, neat work. Finished quickly.", date: "25 Jun 2026" },
  { name: "Mr. Joshi", flat: "C-305", rating: 5, comment: "Very satisfied, highly recommended!", date: "22 Jun 2026" },
  { name: "Ms. Kulkarni", flat: "D-202", rating: 3, comment: "Work was done but took longer than expected.", date: "18 Jun 2026" },
];

function StarRating({ rating }) {
  return (
    <div className="star-row">
      {[1,2,3,4,5].map(s => (
        <FiStar key={s} className={s <= rating ? "star on" : "star off"} />
      ))}
    </div>
  );
}

function Profile() {
  return (
    <div className="profile-page">
      <div className="page-header">
        <h1>My Profile</h1>
        <p>Manage your personal information, skills and reviews.</p>
      </div>

      <div className="profile-layout">
        {/* LEFT COLUMN */}
        <div className="profile-left">

          {/* Avatar Card */}
          <div className="profile-card avatar-card">
            <div className="avatar-wrap">
              <div className="big-avatar">A</div>
              <button className="camera-btn"><FiCamera /></button>
            </div>
            <h2>ABC Electrical Services</h2>
            <p className="vendor-tag">Verified Vendor · Electrical</p>
            <div className="rating-row">
              <FiStar className="star-icon" />
              <span>4.8</span>
              <span className="review-count">(152 reviews)</span>
            </div>
            <button className="edit-profile-btn"><FiEdit2 /> Edit Profile</button>
          </div>

          {/* Stats Card */}
          <div className="profile-card stats-card">
            <h3>Work Summary</h3>
            <div className="profile-stats">
              <div className="pstat">
                <span className="pstat-value blue">142</span>
                <span className="pstat-label">Jobs Done</span>
              </div>
              <div className="pstat">
                <span className="pstat-value green">₹4.2L</span>
                <span className="pstat-label">Total Earned</span>
              </div>
              <div className="pstat">
                <span className="pstat-value yellow">4.8★</span>
                <span className="pstat-label">Rating</span>
              </div>
              <div className="pstat">
                <span className="pstat-value purple">3 yrs</span>
                <span className="pstat-label">Experience</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="profile-card">
            <h3>Skills &amp; Services</h3>
            <div className="skills-list">
              {skills.map((s, i) => (
                <span key={i} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="profile-right">

          {/* Personal Info */}
          <div className="profile-card info-card">
            <div className="card-heading">
              <h3>Personal Information</h3>
              <button className="inline-edit-btn"><FiEdit2 /> Edit</button>
            </div>
            <div className="info-grid">
              <div className="info-row">
                <FiUser className="info-icon blue" />
                <div>
                  <label>Full Name</label>
                  <p>Arjun Bhosale</p>
                </div>
              </div>
              <div className="info-row">
                <FiMail className="info-icon green" />
                <div>
                  <label>Email Address</label>
                  <p>arjun.bhosale@abcelectrical.in</p>
                </div>
              </div>
              <div className="info-row">
                <FiPhone className="info-icon yellow" />
                <div>
                  <label>Phone Number</label>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="info-row">
                <FiMapPin className="info-icon red" />
                <div>
                  <label>Address</label>
                  <p>Sector 12, Pune, Maharashtra – 411001</p>
                </div>
              </div>
              <div className="info-row">
                <FiTool className="info-icon purple" />
                <div>
                  <label>Service Category</label>
                  <p>Electrical Services</p>
                </div>
              </div>
              <div className="info-row">
                <FiCheckCircle className="info-icon teal" />
                <div>
                  <label>Vendor Status</label>
                  <p className="verified-badge">✓ Verified</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Info */}
          <div className="profile-card info-card">
            <div className="card-heading">
              <h3>Business Information</h3>
              <button className="inline-edit-btn"><FiEdit2 /> Edit</button>
            </div>
            <div className="info-grid">
              <div className="info-row">
                <FiTool className="info-icon blue" />
                <div>
                  <label>Business Name</label>
                  <p>ABC Electrical Services</p>
                </div>
              </div>
              <div className="info-row">
                <FiCheckCircle className="info-icon green" />
                <div>
                  <label>GST Number</label>
                  <p>27AABCU9603R1ZX</p>
                </div>
              </div>
              <div className="info-row">
                <FiMapPin className="info-icon yellow" />
                <div>
                  <label>Service Area</label>
                  <p>Pune, Pimpri-Chinchwad, PCMC</p>
                </div>
              </div>
              <div className="info-row">
                <FiUser className="info-icon purple" />
                <div>
                  <label>Team Size</label>
                  <p>8 Technicians</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="profile-card">
            <h3>Recent Reviews</h3>
            <div className="reviews-list">
              {reviews.map((r, i) => (
                <div key={i} className="review-item">
                  <div className="review-top">
                    <div className="reviewer-avatar">{r.name[0]}</div>
                    <div className="reviewer-info">
                      <h4>{r.name}</h4>
                      <span>{r.flat} · {r.date}</span>
                    </div>
                    <StarRating rating={r.rating} />
                  </div>
                  <p className="review-comment">"{r.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
