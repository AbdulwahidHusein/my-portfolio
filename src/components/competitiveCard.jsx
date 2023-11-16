import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CompetitiveStatus = ({color, id, companyName, companyLogo, totalSubmissions, TotalCorrectSubmissions,  rank, link
}) => {
  const [score, setScore] = useState(0);
  useEffect(
    ()=>{
      if (score <= totalSubmissions)
      setTimeout(setScore(score+1), 1000)
    },[score]
  )
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    hidden: { x: id % 2 === 0 ? "10vw" : "-10vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  Modal.setAppElement("#root");

  return (
    <motion.div
      ref={ref}
      className="col-sm-12 col-lg-6"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.54, ease: "easeInOut" }}
    >
      <Link to={link} style={{"textDecoration":"None"}}>
      <div
        style={{ backgroundColor: color }}
        className="Companycard d-flex align-items-center justify-content-center"
      
      >
        <div className="companyImageContainer">
          <img src={companyLogo} alt={companyName} />
        </div>
        <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5">
          <h3 className="companyName">{companyName}</h3>
          <span className="totalSubmission">Total submissions: {totalSubmissions}</span>
          <span className="totalSubmission">Total Correct Submissions: {score}</span>
          <span className="totalSubmission">Rank : {rank}</span>
        </div>
      </div>
      </Link>
    </motion.div>
  );
};

export default CompetitiveStatus;
