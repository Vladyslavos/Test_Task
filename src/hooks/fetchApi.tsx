import React from "react";
import axios from "axios";
import { IJobsData } from "../models/model";

export function useApi() {
  const [jobs, setJobs] = React.useState<IJobsData[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const token: string = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";
  axios.defaults.baseURL =
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data";

  React.useEffect(() => {
    fetchApi();
  }, []);

  async function fetchApi() {
    try {
      setLoading(true);
      const response = await axios.get(`?access_token=${token}`);
      setJobs(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return { jobs, loading };
}
