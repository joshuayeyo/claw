import styled from "@emotion/styled"
import { prizes } from "@/components/Item/items";
import Item from "../Item";
import { useEffect, useState } from "react";

const Board = () => {
    // 정렬을 위해 아이템 랜덤하게 섞어야 합니다.
    const [shuffledPrizes, setShuffledPrizes] = useState<typeof prizes>([]);

    // 13개의 아이템을 중복 허용하여 16개 가져오기
    useEffect(() => {
        // 이미 설정이 되어있다면 더 이상 실행되지 않음 (저장할 때 데이터가 새로 쌓이는 것 방지) 
        if (shuffledPrizes.length > 0) return;

        const getRandomPrizes = (items: typeof prizes, count: number) => {
            const result: typeof items[number][] = [];
            for (let i = 0; i < count; i++) {
                const randomIndex = Math.floor(Math.random() * items.length);
                result.push(items[randomIndex]);
            }
            return result;
        };

        setShuffledPrizes(getRandomPrizes(prizes, 16));
    }, [])

    return(
        <Wrapper>
            <PlayGround>
                <ItemsContainer>
                    {/* 뽑아야 할 아이템들 정렬; 16개의 칸으로 구성 */}
                    {shuffledPrizes.map((item) => (
                        <Item key={item.id} name={item.name} image={item.image} />
                    ))}
                </ItemsContainer>
                <ClawContainer>
                    {/* 초기에 봉을 위치시킬 영역 */}
                </ClawContainer>

            </PlayGround>
        </Wrapper>
    )
}

export default Board;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 60%;
    height: 600px;
    background-color: #353b40;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    @media (max-width: 1023px) {
    width: 100%;
    height: 800px;
    }
`

const PlayGround = styled.div`
    background-color: #c0c0c0;
    width: 80%;
    padding: 20px;
`

const ItemsContainer = styled.div`
    width: 100%;
    height: 90%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`

const ClawContainer = styled.div`

`