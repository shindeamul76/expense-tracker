import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout, MainLayout } from '../../styles/Layouts'
import { signout } from '../../utils/icons';
import Button from '../Button/Button';

const Login = () => {

  const { userLogin, error } = useGlobalContext()

  const navigate = useNavigate()

  const [data, setData] = useState({email:"", password:""});
// console.log(data.email, data.password)

const handleInput = name => e => {
  setData({...data, [name]: e.target.value })
}
  const handleSubmit = (e) => {
    e.preventDefault();
       userLogin(data);
      navigate('/')

  }

  useEffect(() => {
    if(error){
      alert.error(error)
    }
  }, [error])



  return (
    <LoginStyled>
      <MainLayout>
        <div className="login-form">
          <h1 className='login-h1'>Login</h1>
        <form onSubmit={handleSubmit}>
          <section className='label-input'>
            <label htmlFor="email">Email:</label>
            <input 
            type="email"
            id="email"
            name="email"
            placeholder='Enter your email'
            onChange={handleInput('email')}
            />
          </section>
          <section className='label-input'>
            <label htmlFor="password">Password:</label>
            <input 
            type="password" 
            id="password"
            name="password"
            placeholder='Enter your password'
            onChange={handleInput('password')}
            />
          </section>

          <section className="submit-btn">
          <Button 
                    name={'Login'}
                    icon={signout}
                    bPad={'.7rem 3rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
          </section>
        </form>

        <div className='right'>Don't have an account {<Link to='#'>Register</Link>}</div>
        </div>
      </MainLayout>
    </LoginStyled>
  )
}

const LoginStyled = styled.div`
width:100%;
height:100vh;
display: flex;
  justify-content: center;
  align-items: center;
.login-form {
  width:70vh;
  height: 70vh;
  padding: 2em;
  margin-top: 4rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  .login-h1{
    margin-bottom: 1rem;
  }
  form {
    .label-input{
      widht: 100%;
      height: 6vh;
      display: flex;
      justify-content: space-between;
      gap:2rem;
      margin: 2rem 0;
      input{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
      }
      label {
        display: flex;
  justify-content: center;
  align-items: center;
      }
    }

    .submit-btn{
      display: flex;
      justify-content: center;
      align-items: center;
      button{
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          &:hover{
              background: var(--color-green) !important;
          }
      }
  }
  }
  .right{
    margin-top:2rem;
  }
}
`

export default Login
