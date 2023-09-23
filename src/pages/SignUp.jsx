import React from "react";
import "./bg.css";
import { Link } from "react-router-dom";
import { FaMountainCity } from "react-icons/fa6";
import { FormField } from "../components";

function SignUp() {
  return (
    <div className="min-h-screen containe">
      <div className="w-full flex justify-center pt-16 md:pt-24">
        <span className="text-3xl md:text-6xl flex font-bold md:mb-8">
          Thrive Urban <FaMountainCity className="ml-3" />
        </span>
      </div>

      <div className="hero  min-h-5/6 ma max-h-60 mb-4">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold">Sign up </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-xs md:max-w-lg shadow-2xl bg-base-100">
            <div className="card-body">
              <FormField
                labelName="Name*"
                placeholder="name"
                inputType="text"
                mb="mb-1"
                // value={form.name}
                // handleChange={(e) => handleFormFieldChange("name", e)}
              />

              <FormField
                labelName="State*"
                placeholder="state"
                inputType="text"
                mb="mb-1"
                // value={form.state}
                // handleChange={(e) => handleFormFieldChange("state", e)}
              />
              <FormField
                labelName="Distinct*"
                placeholder="distinct"
                inputType="text"
                mb="mb-1"
                // value={form.distinct}
                // handleChange={(e) => handleFormFieldChange("distinct", e)}
              />

              <FormField
                labelName="City*"
                placeholder="city"
                inputType="text"
                mb="mb-1"
                // value={form.city}
                // handleChange={(e) => handleFormFieldChange("city", e)}
              />

              <FormField
                labelName="Email*"
                placeholder="email"
                inputType="email"
                mb="mb-1"
                // value={form.email}
                // handleChange={(e) => handleFormFieldChange("email", e)}
              />
              <FormField
                labelName="Password*"
                placeholder="Password"
                inputType="text"
                mb="mb-1"
                // value={form.Password}
                // handleChange={(e) => handleFormFieldChange("Password", e)}
              />

              <div className="form-control">
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already account ?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
