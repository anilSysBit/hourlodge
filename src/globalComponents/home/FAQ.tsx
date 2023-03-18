import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
interface Data {
  fontSize: string;
}
const FAQ = () => {
  const [acordin, setAcordin] = useState(false);

  const faqs = [
    {
      question:
        "Are the rooms available for hourly booking clean and well-maintained?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatum iusto molestias labore veniam, cupiditate dignissimos officiis libero officia eaque ullam laborum. Libero excepturi reiciendis sint, unde veniam omnis nemo.",
    },
    {
      question:
        "What is the cancellation policy for my booking? Can I cancel or reschedule my reservation if needed?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatum iusto molestias labore veniam, cupiditate dignissimos officiis libero officia eaque ullam laborum. Libero excepturi reiciendis sint, unde veniam omnis nemo.",
    },
    {
      question:
        "Are there any restrictions on the activities that I can do in the room?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatum iusto molestias labore veniam, cupiditate dignissimos officiis libero officia eaque ullam laborum. Libero excepturi reiciendis sint, unde veniam omnis nemo.",
    },
    {
      question:
        "Is parking available and is it included in the hourly rate or an additional cost?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatum iusto molestias labore veniam, cupiditate dignissimos officiis libero officia eaque ullam laborum. Libero excepturi reiciendis sint, unde veniam omnis nemo.",
    },
    {
      question:
        "Is there a requirement to show identification when checking in to the hotel?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatum iusto molestias labore veniam, cupiditate dignissimos officiis libero officia eaque ullam laborum. Libero excepturi reiciendis sint, unde veniam omnis nemo.",
    },
    {
      question:
        "Can I book multiple hours in advance or do I need to book my room for the current hour only?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatum iusto molestias labore veniam, cupiditate dignissimos officiis libero officia eaque ullam laborum. Libero excepturi reiciendis sint, unde veniam omnis nemo.",
    },
  ];

  useEffect(() => {
    setAcordin(false);
  }, []);

  return (
    <div className="faq_container">
      <h1>Most Relevant FAQ's</h1>
      <div className="internal_faq_container">
        {faqs.map((elem, index) => {
          const [jpt, setJpt] = useState(false);
          const handleAccordinClick = () => {
            setJpt(!jpt);
          };
          return (
            <div
              className={`accordin_container ${
                jpt ? null : `accordin_toogle${index}`
              }`}
              onClick={handleAccordinClick}
              key={index}
            >
              <style>{`
                                    .accordin_toogle${index}{
                                        height: 60px;
                                        overflow: hidden;
                                    }
                                `}</style>
              <div className="question_container">
                {acordin ? (
                  <KeyboardArrowDownIcon className="arrow" />
                ) : (
                  <KeyboardArrowRightIcon className="arrow" />
                )}
                <h3>{elem.question}</h3>
              </div>
              <p className="answer_text">{elem.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
