import styled from "@emotion/styled";
import { Prize } from "@/types/index";

const Item = ({ name, image }: Prize) => {
    return (
        <ItemWrapper>
            <img src={image} alt={name} />
            <span>{name}</span>
        </ItemWrapper>
    );
};

export default Item;

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    img {
        width: 100%;
        height: 70px;
        object-fit: contain;
    }

    span {
        margin-top: 1rem;
        font-size: 14px;
        font-weight: bold;
    }
`;