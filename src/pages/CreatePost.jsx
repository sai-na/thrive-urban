import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormField } from "../components";

const CreatePost = () => {
  const [flag, setFlag] = useState(false);
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [final, setFinal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingImg, setIsLoadingImg] = useState(false);
  const [selectedFile, setSelectedFile] = useState();

  // const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    image: "",
    StreetViewUrl: "",
  });

  //  // const [isLoading, setIsLoading] = useState(false);

  // new
  const handleImage = async (e) => {
    // Files
  };

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //console.log( form)
    console.log(final);
    form.image = final;
    console.log(form);
    console.log(link);
    setIsLoading(true);

    setIsLoading(false);
    //navigate("/");
  };

  return (
    <>
      <div className="hero min-h-screen w-full bg-base-150">
        <div className="hero-content w-full sm:max-w-3xl flex flex-col">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <form className="w-full bg-base-200  p-5 rounded-2xl">
            <FormField
              labelName="Title*"
              placeholder="Report Title "
              inputType="text"
              value={form.title}
              handleChange={(e) => handleFormFieldChange("title", e)}
            />
            <FormField
              labelName="Description"
              placeholder="Description"
              inputType="text"
              value={form.description}
              handleChange={(e) => handleFormFieldChange("description", e)}
              isTextArea
            />
            <FormField
              labelName="Location*"
              placeholder="location"
              inputType="text"
              value={form.location}
              handleChange={(e) => handleFormFieldChange("location", e)}
            />

            <div className="mb-6 md:max-w-3xl xl:max-w-6xl">
              <label className="flex-1 max-w-3xl flex flex-col">
                <span className="block text-left m-2 text-sm font-medium text-gray-900 ">
                  Select Image
                </span>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-primary w-full"
                  onChange={(e) => {}}
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
