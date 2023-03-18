import React from "react";

interface Props {
  screen: Function;
}
const PopopMessage: React.FC<Props> = ({ screen }) => {
  const handlePopopClick = () => {
    screen();
  };
  return (
    <div className="popop_message_container">
      <div className="popop_internal_container">
        <h1 className="header_text">Website is in Production</h1>
        <div className="list_of_features">
          <ul>
            <li>Might Not Be responsive</li>
            <li>May Have Many Errors</li>
            <li>Website Only For Preview</li>
            <li>Use the Website on Full Screen of your laptop or computer</li>
          </ul>
        </div>
        <h1 className="try_mobile_text">
          Try Using Desktop Mode in Mobile Phones
        </h1>
        <button onClick={handlePopopClick} className="global_button">
          Close
        </button>
      </div>
    </div>
  );
};

export default PopopMessage;
