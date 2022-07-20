import { useEffect, useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

function useSpeak() {
  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    console.log('speak: ', value);
    speak({ text: value });
  }, [value]);

  return setValue;
}

export default useSpeak;
