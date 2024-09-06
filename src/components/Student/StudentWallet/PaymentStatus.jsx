import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function PaymentStatus() {
  return (
    <div style={styles.container}>
      <FontAwesomeIcon icon={faCheckCircle} style={styles.icon} />
      <div style={styles.text}>Payment Successful!</div>
      <a href="/student/student-wallet" style={styles.button}>
        Back
      </a>
    </div>
  );
}

const styles = {
  button: {
    borderRadius: "4px",
    border: "12px red #7CFC00",
    padding: "10px 20px",
    backgroundColor: "#7CFC00",
    color: "#333",
    fontWeight: "bold",
    textDecoration: "none",
    marginTop: "20px",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "20px",
    borderRadius: "8px",
    backgroundImage: "linear-gradient(270deg, #a8518a, #ec2a7b)",
    border: "1px solid #7CFC00",
    height: "100vh",
  },
  icon: {
    color: "#7CFC00",
    fontSize: "48px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
};

export default PaymentStatus;
