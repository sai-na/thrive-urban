import React from "react";

const FormField = ({
  labelName,
  placeholder,
  inputType,
  isTextArea,
  value,
  handleChange,
}) => {
  return (
    <div className="mb-6 md:max-w-3xl xl:max-w-6xl">
      <label className="flex-1 max-w-3xl flex flex-col">
        {labelName && (
          <span className="block text-left m-2 text-sm font-medium text-gray-900 ">
            {labelName}
          </span>
        )}
        {isTextArea ? (
          <textarea
            required
            value={value}
            onChange={handleChange}
            rows={5}
            placeholder={placeholder}
            className="textarea textarea-primary"
          />
        ) : (
          <input
            required
            value={value}
            onChange={handleChange}
            type={inputType}
            placeholder={placeholder}
            className="input input-bordered input-primary  "
          />
        )}
      </label>
    </div>
  );
};

export default FormField;
