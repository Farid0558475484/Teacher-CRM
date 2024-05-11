import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function PaymentStatus() {
  return (
    <div style={styles.container}>
      <FontAwesomeIcon icon={faCheckCircle} style={styles.icon} />
      <div style={styles.text}>Payment Successful!</div>
    </div>
  );
}

const styles = {
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
