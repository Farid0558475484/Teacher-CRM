import { useCurrentUserQuery } from "../../api/usersApi";
import { Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import s from "./UserInfo.module.scss";

function UserInfo() {
  const { data, isLoading } = useCurrentUserQuery();
  console.log("userData-data",data?.userProfile);

  const teacherInfo = [
    { label: "English Teacher", value: "" },
    { label: "Username", value: data?.userProfile?.username },
    { label: "Name", value: data?.userProfile?.name },
    { label: "Surname", value: data?.userProfile?.familyName },
    { label: "Country", value: data?.userProfile?.country },
    { label: "Email", value: data?.userProfile?.email },
    { label: "Role", value: data?.userProfile?.roles },
  ];

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
            {isLoading ? (
              <Skeleton height={200} width={200} circle={50} />
            ) : (
              <img src={data?.userProfile?.avatarImageUrl} alt="teacherPhoto" />
            )}
          </div>
          <div className={s.visitedInfo}>
            <p>
              {isLoading ? <Skeleton width={200} /> : "Visited 3 minutes ago"}
            </p>
          </div>
        </Col>
        <Col md={8}>
          <div className={s.teacherInfo}>
            {teacherInfo.map((info, index) => (
              <p key={index}>
                {isLoading ? (
                  <Skeleton width={200} />
                ) : (
                  `${info.label}: ${info.value}`
                )}
              </p>
            ))}
          </div>
        </Col>
        <Col md={2}>
          <div className={s.teacherRating}>
            {teacherRating.map((rating, index) => (
              <p key={index}>
                {isLoading ? (
                  <Skeleton width={200} />
                ) : (
                  `${rating.label}: ${rating.value}`
                )}
              </p>
            ))}
          </div>
        </Col>
      </div>
      <div className={s.about}>
        <div className={s.aboutHeader}>
          <h2>{isLoading ? <Skeleton width={200} height={30} /> : "About"}</h2>
          <p>
            {isLoading ? (
              <Skeleton width={400} />
            ) : (
              "Barattson teacher since Oct 8, 2023"
            )}
          </p>
        </div>
        <div className={s.desc}>
          {isLoading ? (
            <Skeleton count={3} />
          ) : (
            <p>{data?.userProfile?.aboutUser?.about}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default UserInfo;
