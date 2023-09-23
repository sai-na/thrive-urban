import React, { useState } from "react";

import { v4 } from "uuid";
import { db } from "../firebase.config";
import {
  collection,
  serverTimestamp,
  addDoc,
  Timestamp,
} from "firebase/firestore";

import Spinner from "../components/Spinner";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ref,
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
} from "firebase/storage";
import imageCompression from "browser-image-compression";

import { FormField } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [isLoadingImg, setIsLoadingImg] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [imgFile, setImgFile] = useState(null);

  // file size checker

  const [errorMsg, setErrorMsg] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [preview, setPreview] = useState();

  // const navigate = useNavigate();

  async function handleImageUpload(event) {
    onImageChange(event);
    const imageFile = event.target.files[0];

    try {
      const compressedFile = await imageCompression(imageFile, {
        maxSizeMB: 0.5, // Adjust the maximum file size in megabytes for thumbnails
        maxWidthOrHeight: 1200, // Adjust the maximum width or height in pixels for thumbnails
      });
      setImgFile(compressedFile);
      // console.log(`compressedFile size ${compressedFile.size} MB`);
    } catch (error) {
      // console.log(error)
    }
  }

  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    image: "",
    damageType: "cracks",
    city: "",
    streetViewUrl: "",
    roadType: "National highways",
    postPublicly: true,
  });

  const onSubmit = async (e) => {
    window.scroll(0, 0);

    e.preventDefault();

    setLoading(true);
    // document.body.scrollIntoView()

    // Store image in firebase
    const storeImage = async (image, fileName, storageLocation) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();

        const storageRef = ref(storage, `${storageLocation}${fileName}`);

        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = parseInt(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            console.log(`Upload is ${progress}% done`);
            switch (snapshot.state) {
              case "paused":
                // console.log('Upload is paused')
                break;
              case "running":
                // console.log('Upload is running')
                break;
              default:
                break;
            }
          },
          (error) => {
            toast.error(error.message);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };
    let imgUrl;
    let fileName = `${v4()}.png`;
    imgUrl = await storeImage(imgFile, fileName, "/posts/images/");

    const formDataCopy = {
      ...form,
      imgUrl,
      createdAt: serverTimestamp(),
    };

    addDoc(collection(db, "posts"), formDataCopy)
      .then(() => {
        setLoading(false);
        toast.success("Post created  successfully");
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);

        toast.error(err.message);
      });

    setImgFile(null);
    setSelectedFile(null);
  };

  //  // const [isLoading, setIsLoading] = useState(false);

  // new
  const handleImage = async (e) => {
    // Files
  };

  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className="">
      {loading ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <div className="hero min-h-screen w-full bg-base-150 mb-44">
            <div className="hero-content w-full sm:max-w-3xl flex flex-col">
              <div className="max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-bold">
                  Report Road Damage
                </h1>
                <p className="py-6"></p>
              </div>
              <form className="w-full bg-base-200  p-5 rounded-2xl">
                <FormField
                  labelName="Title*"
                  placeholder="Report Title "
                  inputType="text"
                  required={true}
                  value={form.title}
                  handleChange={(e) => handleFormFieldChange("title", e)}
                />
                <FormField
                  labelName="City*"
                  placeholder="City name "
                  inputType="text"
                  required={true}
                  value={form.city}
                  handleChange={(e) => handleFormFieldChange("city", e)}
                />

                <div className="mb-6 md:max-w-3xl xl:max-w-6xl">
                  <label className="flex-1 max-w-3xl flex flex-col">
                    <span className="block text-left m-2 text-sm font-medium text-gray-900 ">
                      Select Image*
                    </span>
                    <input
                      type="file"
                      className="file-input file-input-bordered file-input-primary w-full"
                      //onChange={(e) => {}}
                      onChange={handleImageUpload}
                    />
                    {image ? (
                      <div className="shrink-0">
                        <img
                          className="object-cover mt-4 w-64 rounded"
                          src={image}
                          alt="Not Available Preview"
                        />
                      </div>
                    ) : null}
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
                      Type of Damage*
                    </span>
                    <select
                      className="select select-primary w-full "
                      onChange={(e) => handleFormFieldChange("damageType", e)}
                      value={form.damageType}
                    >
                      <optgroup label="Physical Damage">
                        <option value="dents">Dents</option>
                        <option value="scratches">Scratches</option>
                        <option value="cracks">Cracks</option>
                        <option value="brokenParts">
                          Bent or broken parts
                        </option>
                      </optgroup>
                      <optgroup label="Water Damage">
                        <option value="waterStains">Water stains</option>
                        <option value="warping">Warping or swelling</option>
                        <option value="corrosion">Corrosion</option>
                      </optgroup>
                      <optgroup label="Fire Damage">
                        <option value="charredAreas">
                          Charred or burnt areas
                        </option>
                        <option value="sootDamage">
                          Soot and smoke damage
                        </option>
                        <option value="structuralWeakening">
                          Structural weakening
                        </option>
                      </optgroup>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                </div>

                <FormField
                  labelName="Google Map Link*"
                  placeholder="Google Map Link"
                  inputType="text"
                  required={true}
                  value={form.location}
                  handleChange={(e) => handleFormFieldChange("location", e)}
                />

                <FormField
                  labelName="Description"
                  placeholder="Description"
                  inputType="text"
                  required={false}
                  value={form.description}
                  handleChange={(e) => handleFormFieldChange("description", e)}
                  isTextArea
                />
                <FormField
                  labelName="Street View Url"
                  placeholder="Street View Url"
                  inputType="text"
                  required={false}
                  value={form.streetViewUrl}
                  handleChange={(e) =>
                    handleFormFieldChange("streetViewUrl", e)
                  }
                />

                <div className="mb-6  xl:max-w-xs">
                  <label className="flex-1 max-w-3xl flex flex-col">
                    <label className="label cursor-pointer">
                      <span className="block text-left m-2 text-sm font-medium text-gray-900 ">
                        Post to community forum also
                      </span>
                      <input
                        type="checkbox"
                        checked={form.postPublicly}
                        onChange={(e) =>
                          setForm({ ...form, postPublicly: !form.postPublicly })
                        }
                        className="checkbox checkbox-primary checkbox-md"
                      />
                    </label>
                  </label>
                </div>
                <div className="w-full flex justify-center">
                  {" "}
                  <button onClick={onSubmit} className="btn w-96 btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CreatePost;
