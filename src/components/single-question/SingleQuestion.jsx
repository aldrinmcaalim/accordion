import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ question }) => {
  const [revealInfo, setRevealInfo] = useState(false);
  const { title, info } = question;

  const toggleInfo = () => {
    setRevealInfo(!revealInfo);
    console.log(revealInfo);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleInfo}>
          {revealInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {revealInfo && <p>{info}</p>}
    </article>
  );
};
// const SingleQuestion = ({ title, info }) => {
//   return (
//     <>
//       <h2>{title}</h2>
//       <h3>{info}</h3>
//     </>
//   );
// };

export default SingleQuestion;
