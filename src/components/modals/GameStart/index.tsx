import { Box, Button, Modal, Typography } from "@mui/material";

type Props = {
    onStart: () => void;
}
const GameStartModal = ({ onStart }: Props) => {

    return(
        <Modal
            open={true}  // 모달 상태
            aria-labelledby="game-start-modal"
            aria-describedby="modal-to-start-game"
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
                    height: 150,
                    alignContent: 'center',
                    textAlign: 'center',
                    outline: 'none',
                }}
            >
                <Typography id="game-start-modal" variant="h6" component="h2">
                    게임을 시작하려면 아래 버튼을 누르거나, <br/> "게임 시작"이라고 말씀하세요!
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onStart}
                        sx={{ marginRight: 2 }}
                    >
                        게임 시작
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => window.open('https://github.com/joshuayeyo/claw', '_blank')} // 새 탭에서 열기
                    >
                        Github
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default GameStartModal;