import React from "react";
import JobList from "./components/JobList/JobsList";
import DetailedJob from "./components/DetailedJob/DetailedJob";
import { useApi } from "./hooks/fetchApi";
import { Route, Routes } from "react-router-dom";

function App() {
  const { jobs } = useApi();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<JobList jobs={jobs} />} />
        <Route path="/*" element={<JobList jobs={jobs} />} />
        <Route path="/:Id" element={<DetailedJob />} />
      </Routes>
    </div>
  );
}

export default App;
