import {
    FiCheckCircle,
    FiClipboard,
    FiTool,
    FiFileText,
    FiPhone,
    FiCreditCard
} from "react-icons/fi";

import "./QuickActions.css";

const actions = [
    {
        icon: <FiCheckCircle />,
        title: "Accept Request",
        subtitle: "Review & accept assigned jobs"
    },
    {
        icon: <FiClipboard />,
        title: "Assigned Jobs",
        subtitle: "View all assigned complaints"
    },
    {
        icon: <FiTool />,
        title: "Update Work",
        subtitle: "Change job progress status"
    },
    {
        icon: <FiFileText />,
        title: "Upload Invoice",
        subtitle: "Submit invoice after completion"
    },
    {
        icon: <FiPhone />,
        title: "Contact Resident",
        subtitle: "Call or message resident"
    },
    {
        icon: <FiCreditCard />,
        title: "Payment History",
        subtitle: "View completed payments"
    }
];

function QuickActions() {

    return (

        <section className="quick-actions">

            <div className="section-header">

                <div>

                    <h2>Quick Actions</h2>

                    <p>Manage your assigned services efficiently.</p>

                </div>

            </div>

            <div className="action-grid">

                {actions.map((item, index) => (

                    <div className="action-card" key={index}>

                        <div className="action-icon">

                            {item.icon}

                        </div>

                        <h4>{item.title}</h4>

                        <span>{item.subtitle}</span>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default QuickActions;