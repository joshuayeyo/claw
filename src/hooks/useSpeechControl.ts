import { useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

type Props = {
    onStart: () => void;
    onUp: () => void;
    onDown: () => void;
    onLeft: () => void;
    onRight: () => void;
    onStop: () => void;
}

export const useSpeechControl = ({ onStart, onUp, onDown, onLeft, onRight, onStop }: Props) => {
    const { transcript, resetTranscript } = useSpeechRecognition();

    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true, language: "ko-KR"});
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
    };

    // 실시간으로 음성 명령 처리
    useEffect(() => {
        console.log(transcript)

        if (transcript.includes("게임 시작")) {
            onStart();
            resetTranscript(); // 명령 실행 후 transcript를 초기화합니다.
        } else if (transcript.includes("위로")) {
            onUp();
            resetTranscript();
        } else if (transcript.includes("아래로")) {
            onDown();
            resetTranscript();
        } else if (transcript.includes("왼쪽")) {
            onLeft();
            resetTranscript();
        } else if (transcript.includes("오른쪽")) {
            onRight();
            resetTranscript();
        } else if (transcript.includes("멈춰")) {
            onStop();
            resetTranscript();
        } else {
            console.log("올바른 명령어를 말하세요");
            return;
        }
    }, [transcript, onUp, onDown, onLeft, onRight]);

    return { transcript, resetTranscript, startListening, stopListening };
}