import React from "react";
import Background from "../static/Background.svg";
import { Link } from "react-router-dom";
import { FaMountainCity } from "react-icons/fa6";
import { FormField } from "../components";

function Login() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="w-full flex justify-center pt-16 md:pt-36">
        <span className="text-3xl md:text-6xl flex font-bold md:mb-24">
          Thrive Urban <FaMountainCity className="ml-3" />
        </span>
      </div>

      <div className="hero  min-h-5/6 ma max-h-60">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <FormField
                  labelName="email"
                  placeholder="email"
                  inputType="email"
                  mb="mb-1"
                  // value={form.email}
                  // handleChange={(e) => handleFormFieldChange("email", e)}
                />
                <FormField
                  labelName="Password"
                  placeholder="Password"
                  inputType="text"
                  mb="mb-1"
                  // value={form.Password}
                  // handleChange={(e) => handleFormFieldChange("Password", e)}
                />

                <div className="flex justify-between my-2c">
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>

                  <label className="label ">
                    <Link
                      to="/signUp"
                      className="label-text-alt link link-hover"
                    >
                      Don,t have account ?
                    </Link>
                  </label>
                </div>
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

export default Login;
