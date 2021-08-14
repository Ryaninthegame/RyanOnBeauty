import styled from '@emotion/styled';
import { ReactComponent as LoadingIcon} from './../images/Loading_rotate.svg'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    svg {
        position: relative;
        top: 200px;
        // width: 300px;
        // height: auto;
        margin-right: 30px;
    }
`;

const Loading = () => {
    return(
        <Wrapper>
            <LoadingIcon/>
        </Wrapper>
    )
}

export default Loading;