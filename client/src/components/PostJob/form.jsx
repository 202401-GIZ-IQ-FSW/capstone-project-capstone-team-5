"use client";
import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import JobTypeDropdown from "@/components/PostJob/job-type-dropdown";
import JobCategoryDropdown from "@/components/PostJob/job-category-dropdown";

const apiUrl = "http://localhost:3001";

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    jobDescription: "",
    company: "",
    companyWebsite: "",
    companyDescription: "",
    jobCategory: "",
    linkedInProfile: "",
    twitterProfile: "",
    educationLevel: "",
    yearsOfExperience: "",
    requiredCertifications: "",
    requiredSkills: "",
    jobLocation: "",
    applicationMethod: "",
    applicationDeadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const mutation = useMutation({
    mutationFn: (newJob) => {
      return axios.post(`${apiUrl}/jobs`, newJob);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <main>
      <p className="px-36 pt-28 pb-4 text-3xl font-semibold"> Job Details</p>
      <form onSubmit={handleSubmit}>
        <div className="px-36 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <label className="text-sm m-1">Job Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Job Title"
            />
          </div>
          <div>
            <label className="text-sm m-1">Job Description</label>
            <input
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Job Description"
            />
          </div>
          {/* <JobTypeDropdown /> */}
          <div>
            <label className="text-sm m-1">Job Category</label>
            <select
              onInput={function addTag(value) {
                formData.jobCategory = value.target.value;
                console.log(formData.jobCategory);
              }}
              onChange={handleChange}
              name="jobCategory"
              value={formData.jobCategory}
              className="block w-full rounded-md border-2 px-3 py-2 text-gray-900 shadow-sm  border-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
            >
              <option value="" selected disabled hidden>
                Choose
              </option>
              <option>Logistics</option>
              <option>Finance</option>
              <option>Marketing</option>
              <option>IT Services</option>
              <option>Tech</option>
              <option>Science</option>
              <option>Hospitality</option>
              <option>Sales</option>
            </select>
          </div>
          <div>
            <label className="text-sm m-1">Job Type</label>
            <select
              onInput={function addTag(value) {
                formData.jobType = value.target.value;
                console.log(formData.jobType);
              }}
              onChange={handleChange}
              name="jobType"
              value={formData.jobType}
              className="block w-full rounded-md border-2 px-3 py-2 text-gray-900 shadow-sm  border-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
            >
              <option value="" selected disabled hidden>
                Choose
              </option>
              <option>On-Site</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
          </div>
          {/* <JobCategoryDropdown /> */}
          {/* <input
            name="jobDescription"
            value={formData.jobCategory}
            onChange={handleChange}
            className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
            placeholder="Job Category"
          /> */}
        </div>

        <p className="px-36 pt-10 pb-4 text-3xl font-semibold">
          Company Information
        </p>

        <div className="px-36 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <label className="text-sm m-1">Company Name</label>
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Company Name"
            />
          </div>
          <div>
            <label className="text-sm m-1">Company Website</label>
            <input
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Company Website"
              type="url"
            />
          </div>
          <div>
            <label className="text-sm m-1">Company Description</label>
            <input
              name="companyDescription"
              value={formData.companyDescription}
              onChange={handleChange}
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Company Description"
            />
          </div>
          <div>
            <label className="text-sm m-1">LinkedIn Profile</label>
            <input
              name="linkedInProfile"
              value={formData.linkedInProfile}
              onChange={handleChange}
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="LinkedIn Profile"
              type="url"
            />
          </div>
          <div>
            <label className="text-sm m-1">Twitter Profile</label>
            <input
              name="twitterProfile"
              value={formData.twitterProfile}
              onChange={handleChange}
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Twitter Profile"
              type="url"
            />
          </div>
        </div>
        <p className="px-36 pt-10 pb-4 text-3xl font-semibold">
          {" "}
          Job Requirements{" "}
        </p>
        <div className="px-36 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <label className="text-sm m-1">Education Level</label>
            <input
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Minimum Education Level"
            />
          </div>
          <div>
            <label className="text-sm m-1">Experience Level</label>
            <select
              onInput={function addTag(value) {
                formData.experienceLevel = value.target.value;
                console.log(formData.experienceLevel);
              }}
              onChange={handleChange}
              name="experienceLevel"
              value={formData.experienceLevel}
              className="block w-full rounded-md border-2 px-3 py-2 text-gray-900 shadow-sm  border-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
            >
              <option value="" selected disabled hidden>
                Choose
              </option>
              <option>Senior</option>
              <option>Mid-Level</option>
              <option>Junior</option>
            </select>
          </div>
          <div>
            <label className="text-sm m-1">Certifications</label>
            <input
              name="certifications"
              value={formData.certifications}
              onChange={handleChange}
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Required Certifications"
            />
          </div>
          <div>
            <label className="text-sm m-1">Skills</label>
            <input
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Required Skills"
            />
          </div>
        </div>
        <p className="px-36 pt-10 pb-4 text-3xl font-semibold">
          {" "}
          Location & Application{" "}
        </p>
        <div className="px-36 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <label className="text-sm m-1">Job Location</label>
            <input
              name="jobLocation"
              value={formData.jobLocation}
              onChange={handleChange}
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Job Location"
            />
          </div>
          <div>
            <label className="text-sm m-1">Application Method</label>
            <input
              name="applicationMethod"
              value={formData.applicationMethod}
              onChange={handleChange}
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Application Method"
            />
          </div>
          <div>
            <label className="text-sm m-1">Application Deadline</label>

            <input
              name="applicationDeadline"
              value={formData.applicationDeadline}
              onChange={handleChange}
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              type="date"
            />
          </div>
        </div>
        <p className="px-36 pt-10 pb-4 text-3xl font-semibold">
          {" "}
          Submission Options{" "}
        </p>
        <div className="px-36 pt-2 pb-36 flex w-full justify-between items-center">
          <button
            type="button"
            className="bg-[#80e6ff] rounded-md border-black border-2 transition-all font-medium px-6 py-2 h-10 items-center leading-3 hover:bg-[#f1ff52]"
          >
            Save as Draft
          </button>
          <button
            type="button"
            className="bg-[#80e6ff] rounded-md border-black border-2 transition-all font-medium px-6 py-2 h-10 items-center leading-3 hover:bg-[#f1ff52]"
          >
            Preview Job Listing
          </button>
          <button
            type="submit"
            className="bg-[#80e6ff] rounded-md border-black border-2 transition-all font-medium px-6 py-2 h-10 items-center leading-3 hover:bg-[#f1ff52] disabled:bg-gray-200"
          >
            Submit for Review
          </button>
        </div>
      </form>
    </main>
  );
}
