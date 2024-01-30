import { useState } from "react";

const FormField = ({ label, value, onChange, onSaveField }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(value);

  const handleEdit = () => {
    setEditedValue(value);
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    onSaveField(label, editedValue);
  };

  console.log("Rendered with value:", value); // Добавлен отладочный вывод

  return (
    <div className="dwf">
      <h5>{label}</h5>
      {isEditing ? (
        <div>
          <input
            type="text"
            placeholder={label}
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          {value}
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default FormField;
