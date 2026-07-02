import {
    FiClipboard,
    FiCheckCircle,
    FiTool,
    FiCreditCard,
    FiStar
} from "react-icons/fi";

import "./StatsSection.css";

const stats = [
    {
        title: "Assigned Requests",
        value: "18",
        change: "+4 Today",
        trend: "New",
        icon: <FiClipboard />,
        color: "#2563EB"
    },
    {
        title: "Accepted Jobs",
        value: "12",
        change: "67% Accepted",
        trend: "Active",
        icon: <FiCheckCircle />,
        color: "#10B981"
    },
    {
        title: "Work In Progress",
        value: "5",
        change: "Currently Active",
        trend: "Live",
        icon: <FiTool />,
        color: "#F59E0B"
    },
    {
        title: "Pending Payments",
        value: "₹24,800",
        change: "3 Invoices",
        trend: "Due",
        icon: <FiCreditCard />,
        color: "#8B5CF6"
    },
    {
        title: "Average Rating",
        value: "4.8 ★",
        change: "152 Reviews",
        trend: "Top",
        icon: <FiStar />,
        color: "#EC4899"
    }
];

function StatsSection() {
    return (
        <section className="stats-grid">

            {stats.map((item, index) => (

                <div className="stat-card" key={index}>

                    <div className="card-top">

                        <div
                            className="stat-icon"
                            style={{ background: item.color }}
                        >
                            {item.icon}
                        </div>

                        <div className="trend">
                            {item.trend}
                        </div>

                    </div>

                    <div className="card-content">

                        <h2>{item.value}</h2>

                        <h4>{item.title}</h4>

                        <span>{item.change}</span>

                    </div>

                </div>

            ))}

        </section>
    );
}

export default StatsSection;