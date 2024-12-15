import { PrizeWithPosition } from "@/types";
import { useState } from "react";
import useClawControl from "./useClawControl";

const usePickItem = () => {
    const [pickedItem, setPickedItem] = useState<PrizeWithPosition | null>(null);
    const [showResult, setShowResult] = useState(false);
    const { startMoving } = useClawControl();


    const pickItem = (position: { top: number; left: number }, shuffledPrizes: PrizeWithPosition[]) => {
        const gridSize = 4;
        const gridStep = 100 / gridSize;
        // 허용범위를 조절하여 난이도 변경가능
        const tolerance = 5;
    
        const clawRow = Math.floor(position.top / gridStep);
        const clawCol = Math.floor(position.left / gridStep);
    
        const clawExactTop = clawRow * gridStep;
        const clawExactLeft = clawCol * gridStep;
    
        if (
            Math.abs(position.top - clawExactTop) <= tolerance &&
            Math.abs(position.left - clawExactLeft) <= tolerance
        ) {
            const selectedItem = shuffledPrizes.find(
                (item) => item.x === clawCol && item.y === clawRow
            );
            if (selectedItem) {
                setPickedItem(selectedItem);
            } else {
                setPickedItem(null);
            }
            setShowResult(true);
        }
    };
    // 게임 재시작을 위한 함수
    const reset = () => {
        setPickedItem(null);
        setShowResult(false);
        startMoving("reset");
    };
    
    return {
        pickedItem,
        showResult,
        pickItem,
        reset,
    };
};    

export default usePickItem;