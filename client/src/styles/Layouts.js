import styled from "styled-components";

export const MainLayout = styled.div`
    padding: 2rem;
    height: 100%;
    display: flex;
    gap: 2rem;

    @media screen and (max-width: 990px) {
        width: 100%;
    }

`;

export const InnerLayout = styled.div`
    padding: 2rem 1.5rem;
    width: 100%;

    .ric-con {
        display: none;
    }

    @media screen and (max-width: 1050px) {
        padding: 2rem 1rem;
    }

    @media screen and (max-width: 900px) {
        .ric-con {
            display: block;
            float: right;
        }
    }

    @media screen and (min-width: 501px) and ( max-width: 989px) {
        .ric-con {
            display: block;
            float: right;
        }
      }
`;