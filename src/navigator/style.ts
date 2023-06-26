import styled from 'styled-components/native';

export const ImageLogo = styled.Image`
    resize-mode: contain;
    height: 150px;
    width: 150px;       
    background-Color: 'rgba(255, 255, 255, 0)';
`;


export const ContainerImage = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-Color: 'rgba(255, 255, 255, 0)';
    width: 100%;
`;
