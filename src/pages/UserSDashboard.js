import Header3 from "../components/Header3";
import UserDetails from "../components/UserDetails";
import Footer2 from "../components/Footer2";
import "./UserSDashboard.css";

const UserSDashboard = () => {
  return (
    <div className="usersdashboard">
      <Header3 />
      <header className="usersdashboard-inner">
        <div className="frame-group">
          <div className="welcome-darnell-wrapper">
            <h1 className="welcome-darnell">Welcome, Darnell</h1>
          </div>
          <div className="your-personal-dashboard">Your Personal Dashboard</div>
        </div>
      </header>
      <UserDetails />
      <Footer2 />
    </div>
  );
};

export default UserSDashboard;
