import CompetitiveStatus from "../../components/competitiveCard";
import "./competitive.css";
import { useState, useEffect } from "react";
import { leetcode, codeforces } from "./utils";
const axios = require("axios");

let platformsData = [
  // Initial data
  {
    company: "Hacker Rank",
    profileLink: "leetode.com/abdul.com",
    rank: "50000",
    totalSubmissions: "1000",
    totalAcceptedSubmissions: "500",
    companyLogo: "./companyImages/hackerrank.png",
  },
  {
    company: "Open Katties",
    profileLink: "leetode.com/abdul.com",
    rank: "50000",
    totalSubmissions: "1000",
    totalAcceptedSubmissions: "500",
    companyLogo: "./companyImages/katties.png",
  },
];

function PlatformData() {
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    leetcode("AbdulwahidHussen")
      .then((data) => {
        platformsData.unshift(data);
      })
      .catch((err) => {
        console.log(err);
      });
    codeforces().then(
      (data) =>{
        platformsData.unshift(data);
        setDataFetched(true);
      }
    )
  }, []);

  const platFormList = platformsData.map((data, i) => (
    <CompetitiveStatus
      color="#171616"
      id={i}
      companyName={data.company}
      companyLogo={data.companyLogo}
      totalSubmissions={data.totalSubmissions}
      totalAcceptedSubmissions={data.totalAcceptedSubmissions}
      rank={data.rank}
      link={data.profileLink}
    />
  ));

  return <div className="row">{dataFetched && platFormList}</div>;
}

export default PlatformData;