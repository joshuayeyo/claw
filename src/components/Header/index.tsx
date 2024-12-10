import styled from "@emotion/styled"
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
    return (
        <Wrapper>
            <ContainerWrapper>
                <LogoContainer>
                    <StyledLink href="/">
                        Claw Machine
                    </StyledLink>
                </LogoContainer>
                <CreatorInfo>
                    <GitHubIcon style={{ paddingRight: '10px' }} />
                    <StyledLink href="https://github.com/joshuayeyo/claw">
                        Joshuayeyo
                    </StyledLink>
                </CreatorInfo>
            </ContainerWrapper>
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    width: 100vw;
    background-color: black;
    height: 60px;
    display: flex;
    justify-content: center;
`;

const ContainerWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    @media (min-width: 1024px) {
        width: 60%;  // 1024px 이상에서는 60% 너비
    }

    @media (max-width: 1023px) {
        width: 100%;  // 1024px 미만에서는 전체 너비
    }
`

const LogoContainer = styled.div`
    display: flex;
    padding-left: 1rem;
    justify-content: flex-start;
    align-items: center;
    color: white;
`

const CreatorInfo = styled.div`
    display: flex;
    padding-right: 1rem;
    justify-content: flex-end;
    align-items: center;
    color: white;
`

const StyledLink = styled.a`
    text-decoration: none;
    color: inherit;
    &:hover {
        text-decoration: underline; // 호버 시 밑줄 추가
    }
`