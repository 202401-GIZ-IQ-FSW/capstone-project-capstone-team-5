export default function Search() {
  return (
    <div className="bg-white pt-16 sm:pt-24 lg:pt-32">
      <div className="mx-auto mt-6 grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl text-3xl font-bold tracking-tight text-black sm:text-4xl lg:col-span-7">
          <h2 className="inline sm:block lg:inline xl:block">
            Browse job categories
          </h2>{" "}
        </div>
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <label className="sr-only">Search job category</label>
            <input
              className="  placeholder:text-sm lg:placeholder:text-md w-[240px] lg:w-[800px] bg-white px-4 py-1 rounded-md placeholder:text-black border-black border-2  outline-[#7ad6ea]"
              type="text"
              placeholder="Search job category"
            />
            <button className="bg-[#f1ff52] rounded-md hover:bg-black hover:text-[#f1ff52] border-black border-2 transition-all font-medium px-6 py-2 h-10 items-center leading-3">
              Search
            </button>{" "}
          </div>
        </form>
      </div>
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-8 items-center justify-center p-8 lg:px-36 gap-3">
          <button className=" rounded-md hover:bg-black hover:text-[#f1ff52] border-black border-[1px] transition-all font-light px-4 py-1 h-8 items-center leading-3">
            Logistics
          </button>
          <button className=" rounded-md hover:bg-black hover:text-[#f1ff52] border-black border-[1px] transition-all font-light px-4 py-1 h-8 items-center leading-3">
            Sales
          </button>
          <button className=" rounded-md hover:bg-black hover:text-[#f1ff52] border-black border-[1px] transition-all font-light px-4 py-1 h-8 items-center leading-3">
            Marketing
          </button>
          <button className=" rounded-md hover:bg-black hover:text-[#f1ff52] border-black border-[1px] transition-all font-light px-4 py-1 h-8 items-center leading-3">
            Technology
          </button>
          <button className=" rounded-md hover:bg-black hover:text-[#f1ff52] border-black border-[1px] transition-all font-light px-4 py-1 h-8 items-center leading-3">
            Remote Jobs
          </button>
          <button className=" rounded-md hover:bg-black hover:text-[#f1ff52] border-black border-[1px] transition-all font-light px-4 py-1 h-8 items-center leading-3">
            Hospitality
          </button>
          <button className=" rounded-md hover:bg-black hover:text-[#f1ff52] border-black border-[1px] transition-all font-light px-4 py-1 h-8 items-center leading-3">
            Sales
          </button>
          <button className=" rounded-md hover:bg-black hover:text-[#f1ff52] border-black border-[1px] transition-all font-light px-4 py-1 h-8 items-center leading-3">
            Science
          </button>
        </div>
      </div>
    </div>
  );
}
