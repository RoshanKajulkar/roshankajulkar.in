import { useEffect } from "react";
import { BACKEND_URL } from "../utils/constant";

const LogVisit = () => {
  useEffect(() => {
    fetch(`${BACKEND_URL}/log`).catch((err) =>
      console.error("Visit log failed", err)
    );
  }, []);

  return null;
};

export default LogVisit;
