import React from "react";
import { signIn, signUpWithEmailAndPassword } from "../scripts/auth"; // Import your authentication functions

const FormField = ({
  labelName,
  placeholder,
  inputType,
  isTextArea,
  value,
  handleChange,
}) => {
  // Define a function to handle the form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Depending on your form, you can call the appropriate authentication function here
    // For example, if it's a signup form:
    const formData = {
       


      // Gather form data here...
    };

    try {
      const user = await signUpWithEmailAndPassword(formData); // Call your signup function
      console.log("User signed up:", user);
      // Handle success (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.error("Signup error:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };

 
  return (
    <div className={`${mb} md:max-w-3xl xl:max-w-6xl`}>
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
            //name = "email"
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
            //name = "password"
            className="input input-bordered input-primary  "
          />
        )}
      </label>
    </div>
  );
};

export default FormField;
