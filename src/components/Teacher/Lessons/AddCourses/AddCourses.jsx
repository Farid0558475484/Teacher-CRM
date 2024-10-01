import { useState } from "react";
import { Container, Row, Form, Button, Modal } from "react-bootstrap";
import { memo } from "react";

const AddCourses = memo(() => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    duration: 0,
    category: "",
    tutor: "",
    creditsSpent: 0,
  });

  const [selectedFile, setSelectedFile] = useState(null); // Добавляем состояние для файла
  const token = localStorage.getItem("token");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]); // Обрабатываем выбранный файл
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending data to server:", formData);

    // Используем FormData для отправки файлов
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("date", formData.date);
    data.append("duration", formData.duration);
    data.append("category", formData.category);
    data.append("tutor", formData.tutor);
    data.append("creditsSpent", formData.creditsSpent);
    if (selectedFile) {
      data.append("img", selectedFile); // Добавляем файл к данным
    }

    try {
      const response = await fetch(
        "http://localhost:8089/api/courses/create-course",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: data, // Передаем данные в формате FormData
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
        tutor: "",
        creditsSpent: 0,
      });
      setSelectedFile(null); // Сбрасываем выбранный файл
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
                {/* Поле для загрузки файла */}
                <Form.Group controlId="img">
                  <Form.Label>Upload Image</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={handleFileChange}
                    accept="img/*" // Ограничиваем выбор только изображениями
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
});

export default AddCourses;