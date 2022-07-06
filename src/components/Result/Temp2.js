import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const Temp2 = () => {
  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();

  return (
    <div>
      Result
      <br />
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <br />
      <button onClick={() => speak({ text: value })}>Speak</button>
    </div>
  );
};

export default Temp2;
