import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

`;
export const Container = styled.div`
    max-width: 700px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    padding: 30px;
    margin: 80px auto;
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

img{
    width: 150px;
    border-radius: 20px;
    margin: 20px 0;
}

h1{
    font-size: 30px;
    color: #0d2636;
}

p{
    margin-top: 5px;
    font-size: 14px;
    color: black;
    align-items: center;
    line-height: 1.4;
    max-width: 400px;

}
`;

export const BackButton = styled(Link)`
    border: 0;
    outline: 0;
    background: transparent;
    color: #000;
    transition: all 0.3s;
    &:hover{
        color: #4d4d4d;
        transform: scale(1.03);
    }

`;

export const IssuesList = styled.ul`
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;

li{
    border-radius: 4px;
    display: flex;
    padding: 15px 10px;


    //aplicar o estilo a partir do segundo elemento da lista
    & + li{
    margin-top: 12px;
    }


    img{
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid #0d2636;
    }

    div{
        // ocupar toda a div --> flex: 1;
        flex: 1;
        margin-left: 12px;

        p{
            margin-top: 10px;
            font-size: 12px;
            color: #444;

        }
    }

    strong{
        font-size: 15px;
        a{
            text-decoration: none;
            color: #222;
            transition: all 0.3s;

            &:hover{
                color: #0071db;
            }
        }

        span{
            background: #222;
            color: #fff;
            border-radius: 4px;
            font-size: 12px;
            font-family: 600;
            padding: 5px 7px;
            margin-left: 10px;
        }
    }

}


`;

export const PageActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        outline: 0;
        border: 0;
        background-color: #222;
        color: #fff;
        padding: 5px 10px;
        border-radius: 4px;

        &:disabled{
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
`;

export const FilterList = styled.div`
    margin: 15px 0;
    button{
        outline: none;
        border: 0;
        padding: 8px;
        border-radius: 4px;
        margin: 0 3px;

        &:nth-child(${props => props.active + 1}){
            background: #0071db;
            color: #fff;
        }
    }
`;
