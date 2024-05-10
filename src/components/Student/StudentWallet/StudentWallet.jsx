import { useState } from "react";
import { Container, Row, Modal, Form, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import s from "./StudentWallet.module.scss";
import Balance from "./Balance";

function StudentWallet() {
  const userId = localStorage.getItem("userId");
  const [showModal, setShowModal] = useState(false);
  const [purchaseStatus, setPurchaseStatus] = useState(null);
  const [paymentData, setPaymentData] = useState({
    studentId: `${userId}`,
    amount: "0",
    payment_method: "pm_card_visa",
  });

  const handleBuyClick = () => {
    fetch("http://localhost:8089/api/payments/purchase-credits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    })
      .then((response) => response.json())
      .then((data) => {
        setPurchaseStatus("success");
        console.log("Payment successful:", data);
      })
      .catch((error) => {
        setPurchaseStatus("error");
        console.error("Error during payment:", error);
      });
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <section className={s.studentWallet}>
        <Container>
          <Row>
            <Col md={8}>
              <Card className="text-center">
                <Card.Header>Wallet</Card.Header>
                <Card.Body>
                  <Card.Title>Buy balance points</Card.Title>
                  <input type="number" placeholder="add points" />
                  <Button className={s.btn} onClick={() => setShowModal(true)}>
                    Buy
                  </Button>
                  <Card.Text></Card.Text>

                  {purchaseStatus && (
                    <p>
                      {purchaseStatus === "success"
                        ? "Purchase successful"
                        : "Error during purchase"}
                    </p>
                  )}
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center">
                <Card.Header>Balance</Card.Header>
                <Card.Body>
                  <Balance />
                </Card.Body>
                <Card.Footer className="text-muted">Morooq</Card.Footer>
              </Card>
              <Col className="mt-4">
                <Card className="text-center">
                  <Card.Header>AZN change to Morooq Coins</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      1 Coins = 0.1 AZN
                      <br />
                      10 Coins = 1 AZN
                      <br />
                      50 Coins = 5 AZN
                      <br />
                      100 Coins = 10 AZN
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">Morooq</Card.Footer>
                </Card>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill Payment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>studentId</Form.Label>
            <Form.Control
              type="text"
              name="studentId"
              value={paymentData.studentId}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              name="amount"
              value={paymentData.amount}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Payment Method</Form.Label>
            <Form.Control
              type="text"
              name="payment_method"
              value={paymentData.payment_method}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleBuyClick}>
            Buy
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StudentWallet;
