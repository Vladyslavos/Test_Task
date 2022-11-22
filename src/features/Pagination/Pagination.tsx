import React from "react";
import styles from "./Pagination.module.css";
import left from "../../assets/images/arrow_left.svg";
import right from "../../assets/images/arrow_right.svg";

interface IPagination {
  jobsPerPage: number;
  totalJobs: number;
  currentPage: number;
  paginate: (number: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}
export default function Pagination({
  totalJobs,
  jobsPerPage,
  paginate,
  nextPage,
  prevPage,
  currentPage,
}: IPagination) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className={styles.pagination}
      >
        <div className="flex items-center">
          <div className={styles.arrow_left}>
            <img src={left} onClick={prevPage} />
            <span className={styles.border}></span>
          </div>
        </div>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={
              currentPage === number ? styles.active_link : styles.link
            }
          >
            {number}
          </li>
        ))}
        <div className={"flex items-center "}>
          <div className={styles.arrow_right}>
            <span className={styles.border}></span>
            <img src={right} onClick={nextPage} />
          </div>
        </div>
      </ul>
    </>
  );
}
