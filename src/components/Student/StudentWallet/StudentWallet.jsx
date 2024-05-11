import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import s from "./StudentWallet.module.scss";
import Balance from "./Balance";
import StripeForm from "./StripeForm";

function StudentWallet() {
  const [inputValue, setInputValue] = useState("");
  const [showStripeForm, setShowStripeForm] = useState(false);
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleBuyClick = () => {
    if (inputValue.trim() !== "") {
      setShowStripeForm(true);
    } else {
      console.log("Please enter a valid amount before buying.");
    }

    if (!paymentSubmitted) {
      setPaymentSubmitted(true);
      setShowStripeForm(true);
    }
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
                  <input
                    type="number"
                    placeholder="add points"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <Button className={s.btn} onClick={handleBuyClick}>
                    Buy
                  </Button>
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

      {showStripeForm && <StripeForm inputValue={inputValue} />}
    </>
  );
}

export default StudentWallet;
