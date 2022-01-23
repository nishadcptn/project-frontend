import styled from 'styled-components';

export const ModalDiv = styled.div`
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    width: 456px;
    border-radius: 6px;
    height: 300px;
    box-shadow: 0px 4px 9px 0px;
    .btn:nth-child(1){
        margin-right: 20px;
    }
    .btn:nth-child(2){
        margin-left: 20px;
    }
    .frm{
        width: 100%;
        height: 100%;
        padding: 0px 30px 0px 30px;
    }
    .btn-container{
        margin-top: 20px;
        width: 100%;
    }
    .text{
        width: 100%;
        height: 30px;
        padding-top: 14px;
        padding-left: 35px;
        font-family: sans-serif;
        text-transform: uppercase;
        font-size: 21px;
        font-weight: 700;
    }
    .ch{
        position: relative;
        left: 61%;
        width: 30px;
        height: 25px;
    }
`;