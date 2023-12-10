import axios from "axios"
export function leetcode(username) {
  return axios
    .get(`https://leetcode-api-faisalshohag.vercel.app/${username}`)
    .then((response) => {
      const data = response.data;

      const res  = {
        company: "leetcode",
        profileLink: `https://www.leetode.com/${username}`,
        rank: data.ranking,
        easy: data.easySolved,
        medium: data.mediumSolved,
        hard: data.hardSolved,
        totalAcceptedSubmissions:data.totalSubmissions[0].count,
        totalSubmissions: data.totalSubmissions[0].submissions,
        companyLogo: require("../../companyImages/leetcode.png"),
      };
      return res;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

export function codeforces(){
  return axios.get("https://codeforces.com/api/user.status?handle=Alien11d"
  ).then(
    (response)=>{
      const res  = {
        company: "codeforces",
        profileLink: `https://www.codeforces.com/Alien11d`,
        rank: "-",
        easy: response.data.easySolved,
        medium: response.data.mediumSolved,
        hard: response.data.hardSolved,
        totalAcceptedSubmissions:response.data.result.length,
        totalSubmissions:2*response.data.result.length,
        companyLogo: require("../../companyImages/codeforces.png"),
      };
      return res;
    }
  )
}
codeforces()


