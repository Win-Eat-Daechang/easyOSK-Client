import { useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

function usePayload() {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [toggle, setToggle] = useState(true);

  const handleScript = () => {
    if (toggle) {
      // reset previous data first
      resetTranscript();
      SpeechRecognition.startListening({
        continuous: true,
        language: 'ko',
      });
    } else {
      SpeechRecognition.stopListening();
    }
    setToggle(!toggle);
  };

  return { handleScript, transcript, listening, toggle, resetTranscript };
}

export default usePayload;
