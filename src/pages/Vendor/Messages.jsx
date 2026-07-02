import { useState } from "react";
import { FiSend, FiSearch, FiMoreVertical, FiPaperclip, FiPhone, FiVideo } from "react-icons/fi";
import "./Messages.css";

const contacts = [
  {
    id: 1,
    name: "Admin - SocietyHub",
    role: "Society Manager",
    avatar: "A",
    avatarColor: "#2563eb",
    lastMessage: "Please confirm job CMP-1021 acceptance.",
    time: "10:32 AM",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Mr. Sharma",
    role: "Flat A-402",
    avatar: "S",
    avatarColor: "#10b981",
    lastMessage: "When will the plumber arrive?",
    time: "9:15 AM",
    unread: 1,
    online: true,
  },
  {
    id: 3,
    name: "Mrs. Patil",
    role: "Flat B-203",
    avatar: "P",
    avatarColor: "#f59e0b",
    lastMessage: "Thank you for the quick fix!",
    time: "Yesterday",
    unread: 0,
    online: false,
  },
  {
    id: 4,
    name: "Mr. Joshi",
    role: "Flat C-110",
    avatar: "J",
    avatarColor: "#8b5cf6",
    lastMessage: "Invoice received, will process payment.",
    time: "Yesterday",
    unread: 0,
    online: false,
  },
  {
    id: 5,
    name: "Ms. Kulkarni",
    role: "Flat D-504",
    avatar: "K",
    avatarColor: "#ec4899",
    lastMessage: "Water leakage is fixed, great work!",
    time: "28 Jun",
    unread: 0,
    online: false,
  },
];

const messageThreads = {
  1: [
    { from: "them", text: "Hello, please confirm job CMP-1021 acceptance.", time: "10:00 AM" },
    { from: "me", text: "Hello! I have reviewed the job details.", time: "10:15 AM" },
    { from: "me", text: "I will be at the location by 11:30 AM.", time: "10:16 AM" },
    { from: "them", text: "Please confirm job CMP-1021 acceptance.", time: "10:32 AM" },
  ],
  2: [
    { from: "them", text: "Hi, when will the plumber arrive for the repair?", time: "9:00 AM" },
    { from: "me", text: "Good morning Mr. Sharma! I will arrive around 11:30 AM.", time: "9:10 AM" },
    { from: "them", text: "When will the plumber arrive?", time: "9:15 AM" },
  ],
  3: [
    { from: "them", text: "The electrical repair is done?", time: "Yesterday" },
    { from: "me", text: "Yes, all done! Please check and confirm.", time: "Yesterday" },
    { from: "them", text: "Thank you for the quick fix!", time: "Yesterday" },
  ],
  4: [
    { from: "them", text: "Lift maintenance completed?", time: "Yesterday" },
    { from: "me", text: "Yes, the lift is fully operational now.", time: "Yesterday" },
    { from: "them", text: "Invoice received, will process payment.", time: "Yesterday" },
  ],
  5: [
    { from: "them", text: "The water leakage issue was serious.", time: "28 Jun" },
    { from: "me", text: "I understand. I have repaired the pipe and sealed the wall.", time: "28 Jun" },
    { from: "them", text: "Water leakage is fixed, great work!", time: "28 Jun" },
  ],
};

function Messages() {
  const [activeContact, setActiveContact] = useState(contacts[0]);
  const [input, setInput] = useState("");

  const messages = messageThreads[activeContact.id] || [];

  return (
    <div className="messages-page">
      <div className="page-header">
        <h1>Messages</h1>
        <p>Communicate with residents and society admin.</p>
      </div>

      <div className="messages-container">
        {/* Contacts List */}
        <div className="contacts-panel">
          <div className="contacts-search">
            <FiSearch />
            <input type="text" placeholder="Search contacts..." />
          </div>
          <div className="contacts-list">
            {contacts.map((c) => (
              <div
                key={c.id}
                className={`contact-item ${activeContact.id === c.id ? "active" : ""}`}
                onClick={() => setActiveContact(c)}
              >
                <div className="contact-avatar" style={{ background: c.avatarColor }}>
                  {c.avatar}
                  {c.online && <span className="online-dot" />}
                </div>
                <div className="contact-info">
                  <div className="contact-top">
                    <h4>{c.name}</h4>
                    <span className="contact-time">{c.time}</span>
                  </div>
                  <div className="contact-bottom">
                    <p>{c.lastMessage}</p>
                    {c.unread > 0 && <span className="unread-badge">{c.unread}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="chat-panel">
          {/* Chat Header */}
          <div className="chat-header">
            <div className="chat-header-left">
              <div className="contact-avatar sm" style={{ background: activeContact.avatarColor }}>
                {activeContact.avatar}
                {activeContact.online && <span className="online-dot" />}
              </div>
              <div>
                <h4>{activeContact.name}</h4>
                <p>{activeContact.online ? "Online" : "Offline"} · {activeContact.role}</p>
              </div>
            </div>
            <div className="chat-header-actions">
              <button className="chat-action-btn"><FiPhone /></button>
              <button className="chat-action-btn"><FiVideo /></button>
              <button className="chat-action-btn"><FiMoreVertical /></button>
            </div>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message-row ${msg.from === "me" ? "me" : "them"}`}>
                <div className="message-bubble">
                  <p>{msg.text}</p>
                  <span className="msg-time">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="chat-input-bar">
            <button className="attach-btn"><FiPaperclip /></button>
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="send-btn" onClick={() => setInput("")}>
              <FiSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
