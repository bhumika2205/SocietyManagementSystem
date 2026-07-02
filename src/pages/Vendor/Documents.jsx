import { FiFolder, FiFile, FiDownload, FiUpload, FiImage, FiFileText } from "react-icons/fi";
import "./Documents.css";

const documents = [
  {
    name: "Service Agreement - SocietyHub.pdf",
    type: "PDF",
    category: "Contracts",
    size: "1.2 MB",
    uploadedOn: "01 Jan 2026",
    icon: <FiFileText />,
    iconColor: "#ef4444",
  },
  {
    name: "Vendor Registration Certificate.pdf",
    type: "PDF",
    category: "Certifications",
    size: "0.8 MB",
    uploadedOn: "15 Jan 2026",
    icon: <FiFileText />,
    iconColor: "#ef4444",
  },
  {
    name: "Insurance Policy 2026.pdf",
    type: "PDF",
    category: "Insurance",
    size: "2.1 MB",
    uploadedOn: "20 Feb 2026",
    icon: <FiFileText />,
    iconColor: "#ef4444",
  },
  {
    name: "Work Completion - CMP1010.jpg",
    type: "Image",
    category: "Job Photos",
    size: "3.4 MB",
    uploadedOn: "28 Jun 2026",
    icon: <FiImage />,
    iconColor: "#10b981",
  },
  {
    name: "Work Completion - CMP1015.jpg",
    type: "Image",
    category: "Job Photos",
    size: "2.9 MB",
    uploadedOn: "25 Jun 2026",
    icon: <FiImage />,
    iconColor: "#10b981",
  },
  {
    name: "GST Certificate.pdf",
    type: "PDF",
    category: "Certifications",
    size: "0.5 MB",
    uploadedOn: "10 Mar 2026",
    icon: <FiFileText />,
    iconColor: "#ef4444",
  },
  {
    name: "Invoice-INV2031.pdf",
    type: "PDF",
    category: "Invoices",
    size: "0.3 MB",
    uploadedOn: "28 Jun 2026",
    icon: <FiFileText />,
    iconColor: "#f59e0b",
  },
  {
    name: "Bank Details Form.pdf",
    type: "PDF",
    category: "Banking",
    size: "0.2 MB",
    uploadedOn: "05 Jan 2026",
    icon: <FiFileText />,
    iconColor: "#8b5cf6",
  },
];

const categories = ["All", "Contracts", "Certifications", "Insurance", "Job Photos", "Invoices", "Banking"];

function Documents() {
  return (
    <div className="documents-page">
      <div className="page-header">
        <div>
          <h1>Documents</h1>
          <p>Store and manage all your important work documents and certificates.</p>
        </div>
        <button className="upload-btn">
          <FiUpload /> Upload Document
        </button>
      </div>

      {/* Category Filter */}
      <div className="doc-categories">
        {categories.map((cat, i) => (
          <button key={i} className={`cat-btn ${i === 0 ? "active" : ""}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="doc-stats">
        <div className="doc-stat-card">
          <FiFolder className="doc-stat-icon blue" />
          <div>
            <h3>{documents.length}</h3>
            <p>Total Files</p>
          </div>
        </div>
        <div className="doc-stat-card">
          <FiFileText className="doc-stat-icon red" />
          <div>
            <h3>{documents.filter((d) => d.type === "PDF").length}</h3>
            <p>PDF Documents</p>
          </div>
        </div>
        <div className="doc-stat-card">
          <FiImage className="doc-stat-icon green" />
          <div>
            <h3>{documents.filter((d) => d.type === "Image").length}</h3>
            <p>Images</p>
          </div>
        </div>
        <div className="doc-stat-card">
          <FiFile className="doc-stat-icon purple" />
          <div>
            <h3>11.4 MB</h3>
            <p>Total Size</p>
          </div>
        </div>
      </div>

      {/* Document Grid */}
      <div className="doc-grid-card">
        <h2>All Documents</h2>
        <div className="doc-grid">
          {documents.map((doc, i) => (
            <div className="doc-card" key={i}>
              <div className="doc-icon" style={{ color: doc.iconColor, background: doc.iconColor + "20" }}>
                {doc.icon}
              </div>
              <div className="doc-info">
                <h4>{doc.name}</h4>
                <div className="doc-meta">
                  <span className="doc-category">{doc.category}</span>
                  <span>{doc.size}</span>
                  <span>{doc.uploadedOn}</span>
                </div>
              </div>
              <button className="doc-download-btn">
                <FiDownload />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Documents;
