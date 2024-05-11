import { useState } from "react";
import { Container, Row, Form, Button, Modal } from "react-bootstrap";

function AddCourses() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    duration: 0,
    category: "",
    tutor: "",
    creditsSpent: 0,
  });

  const token = localStorage.getItem("token");

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending data to server:", formData);
    try {
      const response = await fetch(
        "http://localhost:8089/api/courses/create-course",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create course");
      }

      alert("Course created successfully!");
      setFormData({
        title: "",
        description: "",
        date: "",
        duration: 0,
        category: "",
        tutor: "string",
        creditsSpent: 0,
      });
      handleCloseModal();
    } catch (error) {
      console.error("Error creating course:", error);
      alert("Failed to create course. Please try again.");
    }
  };

  const handleShowModal = () => setShowModal(true);

  const handleCloseModal = () => setShowModal(false);

  return (
    <section>
      <Container>
        <Row>
          <button
            onClick={handleShowModal}
            style={{
              backgroundColor: "#db3580",
              color: "white",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              margin: "20px ",
              fontSize: "20px",
            }}
          >
            Add Course
          </button>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Add Course</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="date">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="duration">
                  <Form.Label>Duration (in minutes)</Form.Label>
                  <Form.Control
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                {/* <Form.Group controlId="tutor">
                  <Form.Label>Tutor</Form.Label>
                  <Form.Control
                    type="text"
                    name="tutor"
                    value={formData.tutor}
                    onChange={handleChange}
                    required
                  />
                </Form.Group> */}
                <Form.Group controlId="creditsSpent">
                  <Form.Label>Coast Course</Form.Label>
                  <Form.Control
                    type="number"
                    name="creditsSpent"
                    value={formData.creditsSpent}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Add
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </Row>
      </Container>
    </section>
  );
}

export default AddCourses;
