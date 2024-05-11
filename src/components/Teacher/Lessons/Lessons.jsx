import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import AddCourses from "./AddCourses/AddCourses";
import LessonList from "./LessonList/LessonList";

function AddLessonsButton({ AddCourses }) {
  const [formData, setFormData] = useState({
    title: "",
    creditsSpent: 0,
    duration: 0,
    date: "",
  });

  // const token = localStorage.getItem("token");

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
    let courseId = "663f5a836474511393ac7f6c"; // Assuming this is a valid courseId
    try {
      const response = await fetch(
        `http://localhost:8089/api/courses/lesson/${courseId}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
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
        creditsSpent: 0,
        duration: 0,
        date: "",
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
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "10px",
        }}
      >
        <button
          style={{
            backgroundColor: "#db3580",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            margin: "20px ",
          }}
          onClick={handleShowModal}
        >
          Add Lessons
        </button>
      </div>

      <div>
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

              <Form.Group controlId="creditsSpent">
                <Form.Label>Cost Course</Form.Label>
                <Form.Control
                  type="number"
                  name="creditsSpent"
                  value={formData.creditsSpent}
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
      </div>
    </>
  );
}

function Lessons() {
  return (
    <>
      <LessonList AddLessonsButton={AddLessonsButton} AddCourses={AddCourses} />
    </>
  );
}

export default Lessons;
