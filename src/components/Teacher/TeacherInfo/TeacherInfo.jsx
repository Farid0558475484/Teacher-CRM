import { useCurrentUserQuery } from "./../../../api/usersApi";
import { Col } from "react-bootstrap";
import s from "./TeacherInfo.module.scss";

function TeacherInfo() {
  const { data } = useCurrentUserQuery();
  console.log("userData-data", data?.userProfile);

  const teacherRating = [
    { label: "Rating", value: "x x x x x" },
    { label: "Lessons", value: "2872" },
    { label: "Students", value: "363" },
  ];

  return (
    <section>
      <div className={s.info}>
        <Col md={2}>
          <div className={s.teacherPhoto}>
            {<img src={data?.userProfile?.avatarImageUrl} alt="teacherPhoto" />}
          </div>
          <div className={s.visitedInfo}>
            <p>{"Visited 3 minutes ago"}</p>
          </div>
        </Col>
        <Col md={8}>
          <div className={s.teacherInfo}>
            <p>Username: {data?.userProfile?.username || "N/A"}</p>
            <p>Name: {data?.userProfile?.name || "N/A"}</p>
            <p>Surname: {data?.userProfile?.familyName || "N/A"}</p>
            <p>Country: {data?.userProfile?.country || "N/A"}</p>
            <p>Email: {data?.userProfile?.email || "N/A"}</p>
            <p>Role: {data?.userProfile?.roles || "N/A"}</p>
          </div>
        </Col>
        <Col md={2}>
          <div className={s.teacherRating}>
            {teacherRating.map((rating, index) => (
              <p key={index}>{`${rating.label}: ${rating.value}`}</p>
            ))}
          </div>
        </Col>
      </div>
      <div className={s.about}>
        <div className={s.aboutHeader}>
          <h2>{"About"}</h2>
          <p>{"Barattson teacher since Oct 8, 2023"}</p>
        </div>
        <div className={s.desc}>
          {<p>{data?.userProfile?.aboutUser?.about}</p>}
        </div>
      </div>
    </section>
  );
}

export default TeacherInfo;
