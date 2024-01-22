import s from "./TeacherSettings.module.scss";

const IndividualInput = ({ label, value, onChange }) => {
  return (
    <div className={s.inputField}>
      <h5>{label}</h5>
      <div className={s.editMode}>
        <input
          type="text"
          placeholder={`Enter your ${label.toLowerCase()}`}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default IndividualInput;
