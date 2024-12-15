import { useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right" | "reset";

const useClawControl = () => {
    const [position, setPosition] = useState({ top: 90, left: 3 });
    const moveInterval = useRef<NodeJS.Timeout | null>(null);

    const startMoving = (direction: Direction) => {
        const clawXSpeed = 1;
        const clawYSpeed = 1;

        stopMoving();   // restart 시 claw 위치 고정
        if (direction === "reset") {
            setPosition({ top: 90, left: 3});
            return;
        }
        moveInterval.current = setInterval(() => {
            setPosition((prev) => {
                let newTop = prev.top;
                let newLeft = prev.left;

                switch (direction) {
                    case "up":
                        newTop = Math.max(prev.top - clawYSpeed, 0); // 위로 이동
                        break;
                    case "down":
                        newTop = Math.min(prev.top + clawYSpeed, 100); // 아래로 이동
                        break;
                    case "left":
                        newLeft = Math.max(prev.left - clawXSpeed, 0); // 왼쪽으로 이동
                        break;
                    case "right":
                        newLeft = Math.min(prev.left + clawXSpeed, 100); // 오른쪽으로 이동
                        break;
                }

                return { top: newTop, left: newLeft };
            });
        }, 100); // 100ms마다 위치 업데이트
    };

    // 이동 멈추기
    const stopMoving = () => {
        if (moveInterval.current) {
            clearInterval(moveInterval.current);
            moveInterval.current = null; // Ref 초기화
        }
    };

return { position, startMoving, stopMoving };
};

export default useClawControl;