import { useEffect, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

type Props = {
    onStart: () => void;
    onUp: () => void;
    onDown: () => void;
    onLeft: () => void;
    onRight: () => void;
    onStop: () => void;
    onPick: () => void;
    onRestart: () => void;
}

export const useSpeechControl = ({ onStart, onUp, onDown, onLeft, onRight, onStop, onPick, onRestart }: Props) => {
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [gameStarted, setGameStarted] = useState(false);
    const [isStopped, setIsStopped] = useState(false);

    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true, language: "ko-KR"});
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
    };

    // 실시간으로 음성 명령 처리
    useEffect(() => {
        if (transcript.includes("게임 시작")) {
            setGameStarted(true)
            onStart();
            resetTranscript(); // 명령 실행 후 transcript를 초기화합니다.
        } else if (gameStarted) {
            if (transcript.includes("위로")) {
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
                setIsStopped(true); // "멈춤" 상태에서만 뽑기가 가능합니다.
                resetTranscript();
            } else if (transcript.includes("뽑기") && isStopped) {
                onPick();
                resetTranscript();
            } else if (transcript.includes("다시 시작")) {
                onRestart();
                resetTranscript();  
        } 
        } else {
            return;
        }
    }, [transcript, onUp, onDown, onLeft, onRight]);

    return { transcript, resetTranscript, startListening, stopListening };
}