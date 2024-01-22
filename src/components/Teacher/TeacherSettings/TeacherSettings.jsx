import { useState } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import s from "./TeacherSettings.module.scss";

const TeacherSettings = () => {
  const [userData, setUserData] = useState({
    username: "",
    name: "",
    familyName: "",
    email: "",
    country: "",
    city: "",
    aboutUser: "",
    photo: null, 
  });

  const handleChange = (field, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUserData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  const handleProfileUpdate = async () => {
    const token = sessionStorage.getItem("token");
    const formData = new FormData();

    Object.entries(userData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch(
        "http://localhost:8089/api/users/update-user",
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to update profile. Status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log("Profile updated successfully:", data.user);
      } else {
        console.error("Unexpected response format. Expected JSON.");
      }
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col md={4}>
            <div className={s.accordions}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Teacher information</Accordion.Header>
                  <Accordion.Body>
                    <ul className={s.accordionUl}>
                      <li> - Basic information</li>
                      <li> - Private information</li>
                      <li> - Communication Tools</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Teacher Profile</Accordion.Header>
                  <Accordion.Body>
                    <ul className={s.accordionUl}>
                      <li> - Introduction</li>
                      <li> - Contact Form</li>
                      <li> - Video</li>
                      <li> - Languages</li>
                      <li> - Resume and Certificates</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Lessons And Availability</Accordion.Header>
                  <Accordion.Body>
                    <ul className={s.accordionUl}>
                      <li> - Lesson Management</li>
                      <li> - Availability </li>
                      <li> - Teacher Calendar</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className={s.withdraw}>
              <h5>Withdraw</h5>
              <button className={s.viewProfile}>VIEW PROFILE</button>
            </div>
          </Col>
          <Col md={8}>
            <div className={s.basicInformation}>
              <h2>Basic Information</h2>
              <div className={s.changePhoto}>
                <Col md={6}>
                  <div className={s.photo}>
                    <img
                      src={
                        userData.photo
                          ? URL.createObjectURL(userData.photo)
                          : "https://via.placeholder.com/150"
                      }
                      alt=""
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className={s.changePhotoBtn}>
                    <ul className={s.blokUi}>
                      <li> - At least 500 x 500 pixels</li>
                      <li> - JPG, GIF, PNG</li>
                      <li> - Max 2MB</li>
                    </ul>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </div>
                </Col>
              </div>
              <div className={s.username}>
                <h5> Username</h5>
                <div className={s.editMode}>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={userData.username}
                    onChange={(e) => handleChange("username", e.target.value)}
                  />
                </div>
              </div>
              <div className={s.name}>
                <h5> Name</h5>
                <div className={s.editMode}>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={userData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                </div>
              </div>
              <div className={s.surname}>
                <h5> Surname</h5>
                <input
                  type="text"
                  placeholder="Surname"
                  value={userData.familyName}
                  onChange={(e) => handleChange("familyName", e.target.value)}
                />
              </div>
              <div className={s.email}>
                <h5> Email</h5>
                <input
                  type="text"
                  placeholder="Email"
                  value={userData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
              <div className={s.country}>
                <h5>Country</h5>
                <input
                  type="text"
                  placeholder="Country"
                  value={userData.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                />
              </div>
              <div className={s.city}>
                <h5>Living in City</h5>
                <input
                  type="text"
                  placeholder="City"
                  value={userData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                />
              </div>
              <div className={s.about}>
                <h5>About</h5>
                <input
                  type="text"
                  placeholder="About"
                  value={userData.aboutUser}
                  onChange={(e) => handleChange("aboutUser", e.target.value)}
                />
              </div>
              <button onClick={handleProfileUpdate}>Update Profile</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TeacherSettings;
