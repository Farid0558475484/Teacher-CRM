import { useState } from "react";
import { memo } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useAddLessonMutation, useInstructorAllCoursesQuery } from "./../../../../api/coursesApi";

const AddLessons = memo(({ courseId }) => {
  const [formData, setFormData] = useState({
    title: "",
    creditsSpent: 0,
    duration: 0,
    date: "",
  });

  const [showModal, setShowModal] = useState(false);
  const { refetch } = useInstructorAllCoursesQuery(); 
  const [addLesson, { isLoading, isError }] = useAddLessonMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addLesson({ courseId, lessonData: formData }).unwrap();
      setFormData({
        title: "",
        creditsSpent: 0,
        duration: 0,
        date: "",
      });
      refetch(); // Обновление данных после добавления урока
      handleCloseModal();
    } catch (error) {
      console.error("Error adding lesson:", error);
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <button
        onClick={handleShowModal}
        style={{
          backgroundColor: "#db3580",
          color: "white",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
          margin: "20px",
        }}
      >
        Add Lessons
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
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? "Adding..." : "Add"}
            </Button>
            {isError && (
              <p style={{ color: "red" }}>
                Error occurred while adding lesson.
              </p>
            )}
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
});

export default AddLessons;
