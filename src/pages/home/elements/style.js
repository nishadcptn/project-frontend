import styled from 'styled-components';

export const ContainerDiv = styled.div`
    width: 100%;
    height: 100vh;
    background: aliceblue;
    .container-div{
        background: #fff;
        width: 40%;
        height: 80%;
        box-shadow: 0px 0px 7px 0px blac
    }
    .head{
        width: 100%;
        background: #4d4d81;
        height: 15%;
        h3{
            text-transform: uppercase;
            color: white;
            font-family: serif;
            font-weight: bolder;
            font-size: 45px;
        }
    }
    .filter{
        width: 45px;
        border: none;
        height: 45px;
        background: #fff;
        border: 2px solid black;
        border-radius: 5px;
        img{
            width: 100%;
        }
        :hover{
            box-shadow: 0px 0px 5px 0px black;
            transition: 0.3s;
        }
    }
    .wrapper{
        padding-top: 20px;
    }
    .search{
        width: 80%;
        height: 45px;
        margin-right: 30px;
        border-bottom: 2px solid #524c4cd1;
        border-top: none;
        border-right: none;
        border-left: none;
        font-size: 25px;
    }
    .search:focus-visible{
        outline: none;
        border-bottom: 2px solid #5e229bd1;
    }
    .item-list{
        padding-top: 30px;
    }
    .item{
        width: 90%;
        height: 100px;
        background: #fff;
        box-shadow: 0px 0px 6px 0px #dfdfdfb5;
        margin-bottom: 18px;
    }
    .flag{
        width: 30px;
        height: 30px;
        position: relative;
        left: -11px;
        top: -11px;
        background-color: #eee;
    }
`;