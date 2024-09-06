import { useCurrentUserQuery } from "./../../../api/usersApi";
import Skeleton from "react-loading-skeleton";
import s from "./StudentInfo.module.scss";

function StudentInfo() {
  const { data, isLoading } = useCurrentUserQuery();
  console.log("userData-data", data?.userProfile);

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
        <div className="col-md-2">
          <div className={s.teacherPhoto}>
            {
              <img
                src={
                  "data:image/png;base64,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"
                }
                alt="teacherPhoto"
              />

              // data?.userProfile?.avatarImageUrl
            }
          </div>
          <div className={s.visitedInfo}>
            <p>
              {isLoading ? <Skeleton width={200} /> : "Visited 3 minutes ago"}
            </p>
          </div>
        </div>
        <div className="col-md-8">
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
        </div>
        <div className="col-md-2">
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
        </div>
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

export default StudentInfo;
