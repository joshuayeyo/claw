import styled from "@emotion/styled"
import { Box, Button, Modal, Typography } from "@mui/material";

type Props = {
    isModalOpen: boolean;
    itemImage: string;
    itemName: string;
    onReStart: () => void;
}

const ResultModal = ({ isModalOpen, itemImage, itemName, onReStart }: Props) => {
    if (!isModalOpen) return null;
    

    return (
        <Modal
            open={isModalOpen}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                    width: 500,
                    height: 200,
                    alignContent: 'center',
                    textAlign: 'center',
                    outline: 'none',
                }}
            >
                { itemName == "소진" ? (
                    <>
                        <Typography id="game-start-modal" variant="h6" component="h3" color="blue">
                                횟수를 모두 소진하였습니다!
                        </Typography>
                    </>
                ): (
                    <>
                        <ItemImage src={itemImage} alt={itemName} />
                        <Typography id="game-start-modal" variant="h6" component="h3" color="blue">
                                {itemName}을 뽑았습니다!
                        </Typography>
                    </>
                )}

                <Typography id="game-start-modal" variant="h6" component="h2">
                        게임을 다시하려면 아래 버튼을 누르거나, <br/> "다시 시작"이라고 말씀하세요!
                </Typography>
                <Box 
                    sx={{ mt: 2 }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onReStart}
                        sx={{ marginRight: 2 }}
                    >
                        다시 시작
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => window.open('https://github.com/joshuayeyo/claw', '_blank')} // 새 탭에서 열기
                        sx={{ marginRight: 2 }}
                    >
                        Github
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdl1omI82t3y8dTDqr0W1idqxcO3cHq7WTyKoB7eltc46Bq_Q/viewform?usp=header', '_blank')}
                    >
                        설문조사
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
};

export default ResultModal;

const ItemImage = styled.img`
    width: 50px;
`;