import { useState } from "react";
import {
  FiBell, FiLock, FiUser, FiSmartphone,
  FiMoon, FiGlobe, FiShield, FiTrash2, FiToggleLeft, FiToggleRight
} from "react-icons/fi";
import "./Settings.css";

function Toggle({ on, onChange }) {
  return (
    <button className={`toggle-btn ${on ? "on" : ""}`} onClick={() => onChange(!on)}>
      {on ? <FiToggleRight /> : <FiToggleLeft />}
    </button>
  );
}

function Settings() {
  const [notif, setNotif] = useState({ jobAlerts: true, paymentAlerts: true, messages: true, newsletter: false });
  const [prefs, setPrefs] = useState({ darkMode: false, language: "English", twoFactor: true, autoAccept: false });

  return (
    <div className="settings-page">
      <div className="page-header">
        <h1>Settings</h1>
        <p>Manage your account preferences and configurations.</p>
      </div>

      <div className="settings-layout">
        {/* LEFT NAV */}
        <div className="settings-nav">
          {[
            { icon: <FiUser />, label: "Account" },
            { icon: <FiBell />, label: "Notifications" },
            { icon: <FiLock />, label: "Security" },
            { icon: <FiSmartphone />, label: "App Preferences" },
            { icon: <FiShield />, label: "Privacy" },
          ].map((item, i) => (
            <div key={i} className={`settings-nav-item ${i === 0 ? "active" : ""}`}>
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="settings-content">

          {/* Account Settings */}
          <div className="settings-card">
            <div className="settings-card-header">
              <FiUser className="s-icon blue" />
              <div>
                <h3>Account Settings</h3>
                <p>Update your personal and business details.</p>
              </div>
            </div>
            <div className="settings-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" defaultValue="Arjun Bhosale" />
                </div>
                <div className="form-group">
                  <label>Business Name</label>
                  <input type="text" defaultValue="ABC Electrical Services" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" defaultValue="arjun.bhosale@abcelectrical.in" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" defaultValue="+91 98765 43210" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Service Category</label>
                  <select defaultValue="electrical">
                    <option value="electrical">Electrical Services</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="carpentry">Carpentry</option>
                    <option value="painting">Painting</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Service Area</label>
                  <input type="text" defaultValue="Pune, Pimpri-Chinchwad" />
                </div>
              </div>
              <button className="save-btn">Save Changes</button>
            </div>
          </div>

          {/* Notifications */}
          <div className="settings-card">
            <div className="settings-card-header">
              <FiBell className="s-icon yellow" />
              <div>
                <h3>Notification Preferences</h3>
                <p>Choose what updates you want to receive.</p>
              </div>
            </div>
            <div className="toggle-list">
              <div className="toggle-row">
                <div>
                  <h4>New Job Alerts</h4>
                  <p>Get notified when a new job is assigned to you.</p>
                </div>
                <Toggle on={notif.jobAlerts} onChange={v => setNotif({ ...notif, jobAlerts: v })} />
              </div>
              <div className="toggle-row">
                <div>
                  <h4>Payment Alerts</h4>
                  <p>Receive alerts when payments are processed.</p>
                </div>
                <Toggle on={notif.paymentAlerts} onChange={v => setNotif({ ...notif, paymentAlerts: v })} />
              </div>
              <div className="toggle-row">
                <div>
                  <h4>Message Notifications</h4>
                  <p>Get notified for new messages from residents.</p>
                </div>
                <Toggle on={notif.messages} onChange={v => setNotif({ ...notif, messages: v })} />
              </div>
              <div className="toggle-row">
                <div>
                  <h4>Newsletter &amp; Updates</h4>
                  <p>Receive platform news and feature updates.</p>
                </div>
                <Toggle on={notif.newsletter} onChange={v => setNotif({ ...notif, newsletter: v })} />
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="settings-card">
            <div className="settings-card-header">
              <FiLock className="s-icon green" />
              <div>
                <h3>Security</h3>
                <p>Manage your password and account security.</p>
              </div>
            </div>
            <div className="settings-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Current Password</label>
                  <input type="password" placeholder="••••••••" />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input type="password" placeholder="••••••••" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Confirm New Password</label>
                  <input type="password" placeholder="••••••••" />
                </div>
              </div>
              <button className="save-btn">Update Password</button>
            </div>
            <div className="toggle-list" style={{ marginTop: "20px" }}>
              <div className="toggle-row">
                <div>
                  <h4>Two-Factor Authentication</h4>
                  <p>Add an extra layer of security to your account.</p>
                </div>
                <Toggle on={prefs.twoFactor} onChange={v => setPrefs({ ...prefs, twoFactor: v })} />
              </div>
            </div>
          </div>

          {/* App Preferences */}
          <div className="settings-card">
            <div className="settings-card-header">
              <FiGlobe className="s-icon purple" />
              <div>
                <h3>App Preferences</h3>
                <p>Customize how the portal looks and behaves.</p>
              </div>
            </div>
            <div className="toggle-list">
              <div className="toggle-row">
                <div>
                  <h4>Dark Mode</h4>
                  <p>Switch to a darker theme for the dashboard.</p>
                </div>
                <Toggle on={prefs.darkMode} onChange={v => setPrefs({ ...prefs, darkMode: v })} />
              </div>
              <div className="toggle-row">
                <div>
                  <h4>Auto-Accept Jobs</h4>
                  <p>Automatically accept new assigned jobs.</p>
                </div>
                <Toggle on={prefs.autoAccept} onChange={v => setPrefs({ ...prefs, autoAccept: v })} />
              </div>
            </div>
            <div className="settings-form" style={{ marginTop: "18px" }}>
              <div className="form-row">
                <div className="form-group">
                  <label>Language</label>
                  <select defaultValue="en">
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="mr">Marathi</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Timezone</label>
                  <select defaultValue="ist">
                    <option value="ist">IST (UTC +5:30)</option>
                    <option value="utc">UTC</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="settings-card danger-card">
            <div className="settings-card-header">
              <FiTrash2 className="s-icon red" />
              <div>
                <h3>Danger Zone</h3>
                <p>Irreversible account actions — proceed with caution.</p>
              </div>
            </div>
            <div className="danger-actions">
              <div className="danger-row">
                <div>
                  <h4>Deactivate Account</h4>
                  <p>Temporarily disable your vendor account.</p>
                </div>
                <button className="deactivate-btn">Deactivate</button>
              </div>
              <div className="danger-row">
                <div>
                  <h4>Delete Account</h4>
                  <p>Permanently delete your account and all data.</p>
                </div>
                <button className="delete-btn">Delete Account</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Settings;
