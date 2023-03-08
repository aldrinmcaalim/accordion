import SingleQuestion from "../single-question/SingleQuestion";

const Question = ({ questions }) => {
  return (
    <>
      {questions.map((question) => {
        return (
          <SingleQuestion key={question.id} question={question} />
          // <SingleQuestion key={question.id} {...question} />
        );
      })}
    </>
  );
};

export default Question;
