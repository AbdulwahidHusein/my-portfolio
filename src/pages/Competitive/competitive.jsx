import CompetitiveStatus from "../../components/competitiveCard";
import "./competitive.css"
let platformsData = [
  {
    company: "leetcode",
    profileLink: "leetode.com/abdul.com",
    rank: "50000",
    totalSubmissions: "1000",
    totalAcceptedSubmissions: "500",
    companyLogo: "./companyImages/leetcode.png"
  },
  {
    company: "CodeForces",
    profileLink: "leetode.com/abdul.com",
    rank: "50000",
    totalSubmissions: "1000",
    totalAcceptedSubmissions: "500",
    companyLogo: "./companyImages/leetcode.png"
  },
  {
    company: "Hacker Rank",
    profileLink: "leetode.com/abdul.com",
    rank: "50000",
    totalSubmissions: "1000",
    totalAcceptedSubmissions: "500",
    companyLogo: "./companyImages/leetcode.png"
  },
  {
    company: "Open Katties",
    profileLink: "leetode.com/abdul.com",
    rank: "50000",
    totalSubmissions: "1000",
    totalAcceptedSubmissions: "500",
    companyLogo: "./companyImages/leetcode.png"
  }
];

function PlatformData() {
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

  return (
    <div className="row">
      {platFormList}
    </div>
  );
}

export default PlatformData;