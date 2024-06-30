/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import JobTypeDropdown from "@/components/PostJob/job-type-dropdown";
import JobCategoryDropdown from "@/components/PostJob/job-category-dropdown";
export default function Form() {
  return (
    <main>
      <p className="px-36 pt-28 pb-4 text-3xl font-semibold"> Job Details</p>
      <div>
        {" "}
        <div className=" px-36 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <input
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm  border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Job Title"
            />
          </div>
          <div>
            <label className="sr-only">Email</label>
            <div>
              <input
                className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm  border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
                placeholder="Job Description"
              />
            </div>
          </div>
          <JobTypeDropdown />
          <JobCategoryDropdown />
        </div>
        <p className="px-36 pt-10 pb-4 text-3xl font-semibold">
          {" "}
          Company Information
        </p>
        <div className="px-36 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <div>
              <input
                required
                className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm  border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
                placeholder="Company Name"
              />
            </div>
          </div>
          <div>
            <div>
              <input
                className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm  border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
                placeholder="Company Website"
                type="url"
              />
            </div>
          </div>
          <div>
            <div>
              <input className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm  border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <div>
              <input
                className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm  border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
                placeholder="Company Description"
              />
            </div>
          </div>
          <div>
            <input
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm  border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="LinkedIn Profile"
              type="url"
            />
          </div>
          <div>
            <input
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm  border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Twitter Profile"
              type="url"
            />
          </div>
        </div>
        <p className="px-36 pt-10 pb-4 text-3xl font-semibold">
          {" "}
          Job Reuirements
        </p>
        <div className="px-36 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <input
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm  border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Minimun Education Level"
            />
          </div>
          <div>
            <input
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm  border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Years of Experience"
              type="number"
            />
          </div>
          <div>
            <input
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm  border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Required Certifications"
            />
          </div>
          <div>
            <input
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm  border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Required Skills"
            />
          </div>
        </div>
        <p className="px-36 pt-10 pb-4 text-3xl font-semibold">
          {" "}
          Location & Application
        </p>
        <div className="px-36 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <input
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm  border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Job Location"
            />
          </div>
          <div>
            <input
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm  border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Application Method"
            />
          </div>
          <div>
            <label className="text-sm">Application Deadline</label>
            <input
              className="block w-full rounded-md border-2 px-3 py-1.5 text-gray-900 shadow-sm  border-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
              placeholder="Application Deadline"
              type="date"
            />
          </div>
        </div>
      </div>
      <p className="px-36 pt-10 pb-4 text-3xl font-semibold">
        {" "}
        Submission Options
      </p>
      <div className="px-36 pt-2 pb-36 flex w-full justify-between items-center">
        <button className="bg-[#80e6ff] rounded-md group-hover:bg-[#f1ff52] border-black border-2 transition-all font-medium px-6 py-2 h-10 items-center leading-3 hover:bg-[#f1ff52]">
          Save as Draft
        </button>{" "}
        <button className="bg-[#80e6ff] rounded-md group-hover:bg-[#f1ff52] border-black border-2 transition-all font-medium px-6 py-2 h-10 items-center leading-3 hover:bg-[#f1ff52]">
          Preview Job Listing
        </button>{" "}
        <button
          type="submit"
          className="bg-[#80e6ff] rounded-md group-hover:bg-[#f1ff52] border-black border-2 transition-all font-medium px-6 py-2 h-10 items-center leading-3 hover:bg-[#f1ff52] disabled:bg-gray-200"
        >
          Submit for Review
        </button>{" "}
      </div>
    </main>
  );
}
