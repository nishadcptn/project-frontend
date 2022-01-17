import styled from 'styled-components';

export const ContainerDiv = styled.div`
    width: 100%;
    height: 100vh;
    background: aliceblue;
    .container-div{
        background: #fff;
        width: 30%;
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
        margin-top: 10px;
        overflow-y: scroll;
        height: 538px;
        // margin-top: 20px;
    }
    .item{
        width: 90%;
        height: 125px;
        background: #fff;
        box-shadow: 1px 2px 9px 0px #dfdfdfb5;
        margin-bottom: 18px;
        h4{
            font-family: sans-serif;
            font-size: 20px;
            font-weight: 700;
            color: #504343;
            padding: 10px 0px 0px 10px;
            display: flex;
            justify-content: space-between;
            .icon-div{
                margin-right: 10px;
                cursor: pointer;
                svg{
                    display:none;
                    margin: 3px;
                    box-shadow: 0px 0px 3px 0px;
                    width: 20px;
                    height: 20px;
                    padding: 3px;
                    border-radius: 50%;
                }
            }
        }
        p{
            padding: 2px 10px 0px 18px;
            font-size: 14px;
            font-family: sans-serif;
        }
    }
    .item:nth-child(1){
        margin-top: 18px;
    }
    .item:hover h4 .icon-div svg{
        display:block;
        transition: 0.8s;
    }
    .space{
        width: 5px;
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