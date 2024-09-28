import React from "react";
import { toast } from "react-toastify";

const Contactus = () => {
  const notify = () => {
    toast("We can connect you soon as possible");
  };
  return (
    <>
      <div className="flex items-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto my-10 bg-white p-5 py-4  rounded-md shadow-sm">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Work With Us
              </h1>
              <p className="text-gray-400 dark:text-gray-400">
                Please upload your right data and join with us
              </p>
            </div>
            <div className="m-7">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                id="form"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="9cbbd7d0-14de-4dcc-84ee-2b862f330233"
                />

                <input
                  type="hidden"
                  name="subject"
                  value="New Submission from Web3Forms"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  id=""
                  style={{ display: "none" }}
                />

                <div className="flex mb-6 space-x-4">
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="fname"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="first_name"
                      placeholder="John"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="lname"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="lname"
                      placeholder="Doe"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                </div>

                <div className="flex mb-6 space-x-4">
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="you@company.com"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>

                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="phone"
                      className="block text-sm mb-2 text-gray-600 dark:text-gray-400"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="+1 (555) 1234-567"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                </div>

                {/* <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Upload Resume (.pdf or .docx. Less than 1 MB)
                  </label>
                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    accept="application/pdf,.doc,.docx"
                    required
                  />
                </div> */}
                <div className="mb-6 my-4" style={{ textAlign: "center" }}>
                  <button
                    type="submit"
                    style={{ backgroundColor: "blue", color: "white" }}
                    onClick={notify}
                    className="w-full px-2 py-1  focus:bg-indigo-900 focus:outline-none rounded"
                  >
                    Click to Submit
                  </button>
                </div>
                <p
                  className="text-base text-center text-gray-400"
                  id="result"
                ></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
