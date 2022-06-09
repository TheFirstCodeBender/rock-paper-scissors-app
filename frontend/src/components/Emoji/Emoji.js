import React from 'react';

import './Emoji.scss';

const Emoji = ({ emojiType, handleClick }) => {
  return (
    <div className="emoji--container">
      <img
        onClick={() => handleClick(emojiType)}
        className={`emoji--${emojiType}`}
        src={require(`../../images/${emojiType}.png`)}
        alt={`${emojiType}`}
      />
    </div>
  );
};

export default Emoji;
