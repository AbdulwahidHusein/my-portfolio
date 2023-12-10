import CompetitiveStatus from "../../components/competitiveCard";
import "./competitive.css";
import { useState, useEffect } from "react";
import { leetcode, codeforces } from "./utils";
import axios from "axios";

const platformsData = [
  // Initial data
  {
    company: "Hacker Rank",
    profileLink: "https://www.hackerrank.com/profile/abdulwahidhusse1",
    rank: "50000",
    totalSubmissions: "-",
    totalAcceptedSubmissions: "-",
    companyLogo: require("../../companyImages/hackerrank.png"),
  },
  {
    company: "Open Katties",
    profileLink: "https://leetode.com/abdul.com",
    rank: "50000",
    totalSubmissions: "-",
    totalAcceptedSubmissions: "-",
    companyLogo: require("../../companyImages/katties.png"),
  },
];

function PlatformData() {
  const [dataFetched, setDataFetched] = useState(false);
  const [renderedPlatforms, setRenderedPlatforms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [leetcodeData, codeforcesData] = await Promise.all([
        leetcode("AbdulwahidHussen"),
        codeforces(),
      ]);

      
      const updatedData = [leetcodeData, codeforcesData, ...platformsData];
      setRenderedPlatforms(updatedData);
      setDataFetched(true);
    };

    fetchData();
  }, []);

  return (
    <div className="row">
      {dataFetched &&
        renderedPlatforms.map((data, i) => (
          <CompetitiveStatus
            key={i}
            color="#171616"
            id={i}
            companyName={data.company}
            companyLogo={data.companyLogo}
            totalSubmissions={data.totalSubmissions}
            totalAcceptedSubmissions={data.totalAcceptedSubmissions}
            rank={data.rank}
            link={data.profileLink}
          />
        ))}
    </div>
  );
}

export default PlatformData;