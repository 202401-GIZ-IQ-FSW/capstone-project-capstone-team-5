"use client";
import React, { useState } from "react";

const ProfileCard = () => {
  const [editing, setEditing] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("Barham Bapir");
  const [jobTitle, setJobTitle] = useState("Full stack Developer");
  const [location, setLocation] = useState("Iraq - Kurdistan - Sulaymaniyah");
  const [experience, setExperience] = useState([
    {
      id: 1,
      title: "Front-end Developer",
      company: "ABC Inc.",
      startDate: "01/2022",
      endDate: "Present",
      description:
        "Responsible for implementing visual elements that users see and interact within a web application.",
    },
    {
      id: 2,
      title: "UX Designer",
      company: "XYZ Corp.",
      startDate: "06/2021",
      endDate: "12/2021",
      description:
        "Designed user experiences for web and mobile applications, ensuring intuitive and user-friendly interfaces.",
    },
  ]);
  const [savedJobs, setSavedJobs] = useState([
    {
      id: 3,
      title: "Back-end Developer",
      company: "RST Solutions",
      location: "San Francisco, USA",
    },
    {
      id: 4,
      title: "Marketing Manager",
      company: "MarketingPro",
      location: "London, UK",
    },
  ]);
  const [customFields, setCustomFields] = useState([
    { id: 5, label: "Date of Graduation", value: "" },
    { id: 6, label: "Date of Birth", value: "" },
    { id: 7, label: "University", value: "" },
    { id: 8, label: "Department", value: "" },
    { id: 9, label: "Skills", value: "" },
  ]);

  const handleEditClick = () => setEditing(true);
  const handleSave = () => setEditing(false);
  const handleCancel = () => setEditing(false);
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePic(file);
  };
  const handleRemoveProfilePic = () => setProfilePic(null);
  const handleAddField = () => {
    setCustomFields([
      ...customFields,
      { id: Date.now(), label: "", value: "", description: "" },
    ]);
  };
  const handleRemoveField = (id) => {
    setCustomFields(customFields.filter((field) => field.id !== id));
  };
  const handleFieldChange = (id, field, value) => {
    setCustomFields(
      customFields.map((f) => (f.id === id ? { ...f, [field]: value } : f))
    );
  };

  const handleEditExperience = (id, newData) => {
    const updatedExperience = experience.map((exp) =>
      exp.id === id ? { ...exp, ...newData } : exp
    );
    setExperience(updatedExperience);
  };

  const handleRemoveExperience = (id) => {
    const updatedExperience = experience.filter((exp) => exp.id !== id);
    setExperience(updatedExperience);
  };

  const handleAddExperience = () => {
    const newExperience = {
      id: Date.now(),
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setExperience([...experience, newExperience]);
  };

  const handleExperienceChange = (id, field, value) => {
    const updatedExperience = experience.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    setExperience(updatedExperience);
  };

  const handleRemoveSavedJob = (id) => {
    const updatedJobs = savedJobs.filter((job) => job.id !== id);
    setSavedJobs(updatedJobs);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-opacity-80 bg-gradient-to-r from-yellow-300 via-blue-300 to-black shadow-lg rounded-lg my-28">
      <div className="flex">
        <div className="w-1/3">
          <div className="relative">
            <img
              className="h-48 w-48 rounded-full object-cover mx-auto"
              src={
                profilePic
                  ? URL.createObjectURL(profilePic)
                  : "/default-profile-pic.jpg"
              }
              alt="Profile"
            />
            {editing && (
              <>
                <label
                  htmlFor="profile-pic"
                  className="absolute bottom-0 right-0 bg-gray-300 rounded-full p-1 cursor-pointer"
                >
                  <span className="material-icons h-6 w-6 text-gray-600">
                    camera_alt
                  </span>
                  <input
                    id="profile-pic"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleProfilePicChange}
                  />
                </label>
                {profilePic && (
                  <button
                    onClick={handleRemoveProfilePic}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  >
                    X
                  </button>
                )}
              </>
            )}
          </div>
        </div>
        <div className="w-2/3 pl-8">
          {editing ? (
            <div className="w-full">
              <div className="text-center mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none text-center"
                />
              </div>
              <div className="text-center mb-4">
                <label className="block text-gray-700">Job Title</label>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none text-center"
                />
              </div>
              <div className="text-center mb-4">
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none text-center"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-700">Custom Fields</h3>
                {customFields.map((field) => (
                  <div key={field.id} className="mt-2">
                    <label className="block text-gray-700">Label</label>
                    <input
                      type="text"
                      value={field.label}
                      onChange={(e) =>
                        handleFieldChange(field.id, "label", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none"
                    />
                    <label className="block text-gray-700 mt-2">Value</label>
                    {field.label === "Date of Graduation" ? (
                      <input
                        type="date"
                        value={field.value}
                        onChange={(e) =>
                          handleFieldChange(field.id, "value", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none"
                      />
                    ) : field.label === "University" ? (
                      <select
                        value={field.value}
                        onChange={(e) =>
                          handleFieldChange(field.id, "value", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none"
                      >
                        <option value="">Select University</option>
                        <option value="Koya University - Software Engineering">
                          Koya University - Software Engineering
                        </option>
                        <option value="Other University - Other Department">
                          Other University - Other Department
                        </option>
                      </select>
                    ) : (
                      <input
                        type="text"
                        value={field.value}
                        onChange={(e) =>
                          handleFieldChange(field.id, "value", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none"
                      />
                    )}
                    <label className="block text-gray-700 mt-2">Description</label>
                    <textarea
                      value={field.description}
                      onChange={(e) =>
                        handleFieldChange(field.id, "description", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none"
                      rows="3"
                    ></textarea>
                    <button
                      onClick={() => handleRemoveField(field.id)}
                      className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={handleAddField}
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  Add Field
                </button>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-700">Experience</h3>
                {experience.map((exp) => (
                  <div key={exp.id} className="mt-4 bg-white rounded-md shadow-md p-4 w-full">
                    <div className="flex justify-between items-center">
                      <div>
                        <label className="block text-gray-700">Title</label>
                        <input
                          type="text"
                          value={exp.title}
                          onChange={(e) =>
                            handleExperienceChange(exp.id, "title", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">Position</label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) =>
                            handleExperienceChange(exp.id, "company", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <label className="block text-gray-700">Start Date</label>
                        <input
                          type="text"
                          value={exp.startDate}
                          onChange={(e) =>
                            handleExperienceChange(exp.id, "startDate", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">End Date</label>
                        <input
                          type="text"
                          value={exp.endDate}
                          onChange={(e) =>
                            handleExperienceChange(exp.id, "endDate", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-gray-700">Description</label>
                      <textarea
                        value={exp.description}
                        onChange={(e) =>
                          handleExperienceChange(exp.id, "description", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={() => handleEditExperience(exp.id, { title: "Updated Title" })}
                        className="px-4 py-2 bg-[#80e6ff] text-white rounded-md mr-2 hover:bg-[#f1ff52]"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleRemoveExperience(exp.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  onClick={handleAddExperience}
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  Add Experience
                </button>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-[#80e6ff] text-white rounded-md mr-2 hover:bg-[#f1ff52]"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-700">
                {name}{" "}
                <button
                  onClick={handleEditClick}
                  className="text-blue-500 underline"
                >
                  Edit
                </button>
              </h2>
              <p className="text-gray-600">{jobTitle}</p>
              <p className="text-gray-600">{location}</p>
              {customFields.map((field) => (
                <div key={field.id} className="mt-2 text-gray-600">
                  <strong>{field.label}: </strong>
                  {field.value}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-700">Saved Jobs</h3>
        <ul className="mt-4">
          {savedJobs.map((job) => (
            <li key={job.id} className="flex justify-between items-center mt-2">
              <div>
                <p className="text-gray-600">
                  {job.title} at {job.company} - {job.location}
                </p>
              </div>
              <button
                onClick={() => handleRemoveSavedJob(job.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Display Experience Section */}
      <div className="mt-8 w-full">
        <h3 className="text-xl font-bold text-gray-700">Experience</h3>
        {experience.map((exp) => (
          <div key={exp.id} className="mt-4 bg-white rounded-md shadow-md p-4 w-full">
            <h2 className="text-gray-700">{exp.title} at {exp.company}</h2>
            <h3 className="text-gray-600">Start Date: {exp.startDate} - End Date: {exp.endDate}</h3>
            <p className="text-gray-600">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;