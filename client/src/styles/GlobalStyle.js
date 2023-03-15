import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root{
        --primary-color: #222260;
        --primary-color2: 'color: rgba(34, 34, 96, .6)';
        --primary-color3: 'color: rgba(34, 34, 96, .4)';
        --color-green: #42AD00;
        --color-grey: #aaa;
        --color-accent: #F56692;
        --color-delete: #FF0000;
    }

    body{
        font-family: 'Nunito', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: hidden;
        color: rgba(34, 34, 96, .6);
    }

    h1, h2, h3, h4, h5, h6{
        color: var(--primary-color);
    }
    .error{
        color: red;
        animation: shake 0.5s ease-in-out;
        @keyframes shake {
            0%{
                transform: translateX(0);
            }
            25%{
                transform: translateX(10px);
            }
            50%{
                transform: translateX(-10px);
            }
            75%{
                transform: translateX(10px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }

    .scale-up-center {
        -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
    
    @-webkit-keyframes scale-up-center {
      0% {
        -webkit-transform: scale(0.5);
                transform: scale(0.5);
      }
      100% {
        -webkit-transform: scale(1);
                transform: scale(1);
      }
    }
    
    @keyframes scale-up-center {
      0% {
        -webkit-transform: scale(0.5);
                transform: scale(0.5);
      }
      100% {
        -webkit-transform: scale(1);
                transform: scale(1);
      }
    }

    @media screen and (max-width: 1050px) {

        body{
            font-size: clamp(.9rem, 1.3vw, 1rem);
        }
      
    }

    @media screen and (max-width: 500px) {

        body{
            font-size: clamp(.8rem, 1vw, .9rem);
        }
      
    }

    
`