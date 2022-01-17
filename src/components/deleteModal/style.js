import styled from 'styled-components';

export const ModalDiv = styled.div`
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    width: 356px;
    border-radius: 6px;
    height: 161px;
    box-shadow: 0px 4px 9px 0px;
    .text{
        font-size: 20px;
        font-family: sans-serif;
        font-weight: 700;
        padding: 0px 0px 35px 0px;
    }
    .btn:nth-child(1){
        margin-right: 20px;
    }
    .btn:nth-child(2){
        margin-left: 20px;
    }
`;