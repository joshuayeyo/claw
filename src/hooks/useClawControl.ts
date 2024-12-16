import { useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right";

const useClawControl = () => {
    const [position, setPosition] = useState({ top: 90, left: 3 });
    const moveInterval = useRef<NodeJS.Timeout | null>(null);

    const startMoving = (direction: Direction) => {
        stopMoving();

        moveInterval.current = setInterval(() => {
            setPosition((prev) => {
                let newTop = prev.top;
                let newLeft = prev.left;

                switch (direction) {
                    case "up":
                        newTop = Math.max(prev.top - 2, 0); // 위로 이동
                        break;
                    case "down":
                        newTop = Math.min(prev.top + 2, 100); // 아래로 이동
                        break;
                    case "left":
                        newLeft = Math.max(prev.left - 0.8, 0); // 왼쪽으로 이동
                        break;
                    case "right":
                        newLeft = Math.min(prev.left + 0.8, 100); // 오른쪽으로 이동
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