import { Jobs } from "@/constants/discover-jobs-cards";
import DiscoverJobsCard from "./discover-jobs-card";

function DiscoverJobsSection() {
  return (
    <div className="mb-12">
      <div className="flex flex-col">
        {" "}
        <div className=" gap-x-6 gap-y-4 p-8">
          {Jobs.map((job) => {
            return (
              <DiscoverJobsCard
                title={job.title}
                imageUrl={job.imageUrl}
                company={job.company}
                description={job.description}
                tags={job.tags}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DiscoverJobsSection;
