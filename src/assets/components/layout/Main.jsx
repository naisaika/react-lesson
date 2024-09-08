import styled from 'styled-components';

const MainStyle = styled.main`
    padding: 50px 16px;  /* 必要に応じて左右のパディングを調整 */
`

export const Main = ( {children} ) => {
    return (
        <MainStyle>{children}</MainStyle>
    )
}