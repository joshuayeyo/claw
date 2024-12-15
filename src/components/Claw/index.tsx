import styled from "@emotion/styled";

type Props = {
    position: { top: number; left: number; }
    padding: number;
}

const Claw = ({ position, padding }: Props) => {

    const adjustedLeft = position.left + (padding / 2);

    return <ClawImage 
                style={{ top: `${position.top}%`, left: `${adjustedLeft}%` }} 
                src="/target.png" 
                alt="Claw" 
            />;
}

export default Claw;

const ClawImage = styled.img`
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    width: 50px;
    background-size: contain;
    background-repeat: no-repeat;

    /* 부드럽고 자연스러운 애니메이션 */
    animation: clawMove 1s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;

    @keyframes clawMove {
        0%, 100% {
            transform: translateX(-50%) translateY(0);
        }
        25% {
            transform: translateX(-50%) translateY(-5px);
        }
        50% {
            transform: translateX(-50%) translateY(0);
        }
        75% {
            transform: translateX(-50%) translateY(5px);
        }
    }
`;