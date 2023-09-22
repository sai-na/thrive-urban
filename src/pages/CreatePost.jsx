import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormField } from "../components";
import { GoogleMap } from "@react-google-maps/api";

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
    streetViewUrl: "",
    roadType: "",
    postPublicly: true,
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
      <div className="hero min-h-screen w-full bg-base-150 mb-44">
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
              labelName="Location*"
              placeholder="location"
              inputType="text"
              value={form.location}
              handleChange={(e) => handleFormFieldChange("location", e)}
            />

            <FormField
              labelName="Street View Url"
              placeholder="Street View Url"
              inputType="text"
              value={form.streetViewUrl}
              handleChange={(e) => handleFormFieldChange("streetViewUrl", e)}
            />
            <div className="mb-6 md:max-w-3xl xl:max-w-6xl">
              <label className="flex-1 max-w-3xl flex flex-col">
                <span className="block text-left m-2 text-sm font-medium text-gray-900 ">
                  Select Image*
                </span>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-primary w-full"
                  onChange={(e) => {}}
                />
              </label>
            </div>
            <div className="mb-6 md:max-w-3xl xl:max-w-6xl">
              <label className="flex-1 max-w-3xl flex flex-col">
                <span className="block text-left m-2 text-sm font-medium text-gray-900 ">
                  Type of road*
                </span>
                <select
                  className="select select-primary w-full "
                  onChange={(e) => handleFormFieldChange("roadType", e)}
                  value={form.roadType}
                >
                  <option disabled selected>
                    Type of road ?
                  </option>
                  <option>Expressways</option>
                  <option>National highways</option>
                  <option>State highways</option>
                  <option>District roads</option>
                  <option>Rural roads</option>
                  <option>Border roads</option>
                </select>
              </label>
            </div>
            <div className="mb-6 md:max-w-3xl xl:max-w-6xl">
              <label className="flex-1 max-w-3xl flex flex-col">
                <span className="block text-left m-2 text-sm font-medium text-gray-900 ">
                  Type of road*
                </span>
                <select
                  className="select select-primary w-full "
                  onChange={(e) => handleFormFieldChange("roadType", e)}
                  value={form.roadType}
                >
                  <optgroup label="Physical Damage">
                    <option value="dents">Dents</option>
                    <option value="scratches">Scratches</option>
                    <option value="cracks">Cracks</option>
                    <option value="brokenParts">Bent or broken parts</option>
                  </optgroup>
                  <optgroup label="Water Damage">
                    <option value="waterStains">Water stains</option>
                    <option value="warping">Warping or swelling</option>
                    <option value="corrosion">Corrosion</option>
                  </optgroup>
                  <optgroup label="Fire Damage">
                    <option value="charredAreas">Charred or burnt areas</option>
                    <option value="sootDamage">Soot and smoke damage</option>
                    <option value="structuralWeakening">
                      Structural weakening
                    </option>
                  </optgroup>
                  <option value="Other">Other</option>
                </select>
              </label>
            </div>
            <FormField
              labelName="Description"
              placeholder="Description"
              inputType="text"
              value={form.description}
              handleChange={(e) => handleFormFieldChange("description", e)}
              isTextArea
            />

            <GoogleMap/>

            <div className="mb-6  xl:max-w-xs">
              <label className="flex-1 max-w-3xl flex flex-col">
                <label className="label cursor-pointer">
                  <span className="block text-left m-2 text-sm font-medium text-gray-900 ">
                    Post to community forum also
                  </span>
                  <input
                    type="checkbox"
                    checked={form.postPublicly}
                    onChange={(e) => setFlag(!form.postPublicly)}
                    className="checkbox checkbox-primary checkbox-md"
                  />
                </label>
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
