import React from "react";
import { IJobsData } from "../../models/model";
import List from "../List/List";
import Pagination from "../../features/Pagination/Pagination";
import { useApi } from "../../hooks/fetchApi";
import { Audio } from "react-loader-spinner";

interface IProps {
  jobs: IJobsData[];
}

export default function JobList(props: IProps) {
  const { jobs } = props;
  const { loading } = useApi();
  const [currentPage, setCurrentPage] = React.useState<number>(2);
  const [jobsPerPage] = React.useState<number>(5);
  const totalJobs = jobs.length;

  const lastJobIndex = currentPage * jobsPerPage;
  const firstJobIndex = lastJobIndex - jobsPerPage;
  const currentJobs = jobs.slice(firstJobIndex, lastJobIndex);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  return (
    <div className="mt-[28px]">
      {loading && (
        <div className="flex items-center justify-center h-[100vh]">
          <Audio height="300" width="300" color="#5876C5" ariaLabel="loading" />
        </div>
      )}
      {currentJobs.map((item) => (
        <List item={item} key={item.id} />
      ))}
      {currentJobs.length && (
        <Pagination
          totalJobs={totalJobs}
          jobsPerPage={jobsPerPage}
          currentPage={currentPage}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}
    </div>
  );
}
