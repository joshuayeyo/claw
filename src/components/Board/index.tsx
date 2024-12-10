import styled from "@emotion/styled"
const Board = () => {
    
    // 뽑아야 할 16개의 아이템
    // const prizes = Array.from({ length: 16 }).map((_, index) => ({
    //     id: index +1,
    //     name: `item ${index +1}`
    // }))

    // 정렬을 위해 아이템 랜덤하게 섞기
    // const shuffledPrizes = prizes.sort(() => Math.random() - 0.5);

    return(
        <Wrapper>
            <PlayGround>
                <ItemsContainer>
                    {/* 뽑아야 할 아이템들 정렬 16개의 칸으로 구성 */}
                    {/* {shuffledItems.map((item) => (
                    ))} */}
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