import styled from "@emotion/styled";

type Props = {
    position: { top: number; left: number; }
}

const Claw = ({ position }: Props) => {

    return <ClawImage 
                style={{ top: `${position.top}%`, left: `${position.left}%` }} 
                src="/target.png" 
                alt="Claw" />;
}

export default Claw;

const ClawImage = styled.img`
    position: absolute;
    transform: translateX(-50%);
    width: 50px;
    background-size: contain;
    background-repeat: no-repeat;
`;