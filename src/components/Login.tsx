import React, {useState} from "react";
import styled from "styled-components"
import { useForm } from "react-hook-form";
import useUserContext from "./Context";


export default function Login() {
    const {register, handleSubmit, watch, setValue, formState:{ errors } } = useForm()
    const [signUp, setSignUp] = useState<boolean>(false)
    const [userMail, setUserMail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const context = useUserContext()
    
    function handleEmailInput(event: React.ChangeEvent<HTMLInputElement>){
        setUserMail(event.target.value)
    }
    function handlePasswordInput(event: React.ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }
    function handleSignIn() {
        const userData = context.users
        const currentUser = userData.filter(el => el.email === userMail)

        console.log(currentUser[0])
        if(currentUser[0].password === password){
            context.authorisation.setAuth(true)
        }
    }
    
    if(signUp){
        return (
            <AuthorizeWrapper>
            <Logo src="./assets/logo.svg"/>
            <Wrapper>

                <HeadingParagraph>
                    Login   
                </HeadingParagraph>
                <Input type="text" {...register("email", {required: true})} placeholder="Email Address" onChange={(e) => setUserMail(e.target.value)} />
            
                <Input type="password"{...register("password", {required: true})} placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <Input type="password"{...register("repeat-password", {required: true})}/>

                <LoginBtn>
                    Create an account
                </LoginBtn>

                <SignUpPara>Already have an account? <span onClick={() => setSignUp(false)}>Login</span></SignUpPara>
                
            </Wrapper>
            </AuthorizeWrapper>
        )
    }else{
        return (
            <AuthorizeWrapper>
            <Logo src="./assets/logo.svg"/>
            <Wrapper>
                <HeadingParagraph>
                    Login   
                </HeadingParagraph>

                <Input {...register("email", {required: true})} placeholder="Email Address" onChange={handleEmailInput}/>
                <Input {...register("password", {required: true})} placeholder="Password" onChange={handlePasswordInput}/>

                <LoginBtn onClick={() => handleSignIn()}>
                    Log in to your account
                </LoginBtn>

                <SignUpPara>Don't have an account? <span onClick={() => setSignUp(true)}>Sign Up</span></SignUpPara>
            </Wrapper>
            </AuthorizeWrapper>
        )
    }
}

const AuthorizeWrapper=styled.div`
    width: 400px;
    margin: 120px auto;

@media (max-width:768px){
    margin: 60px auto;
}
`

const Wrapper = styled.div`
    width: 400px;
    height: auto;
    background-color: #161D2F;
    border: 1px solid #161D2F;
    border-radius: 20px;
    margin: 120px auto;
`


const HeadingParagraph = styled.p`
    width: 100px;
    margin: 30px;
    font-size: 36px;
    font-weight: 300;
`


const Input = styled.input`
    width: 85%;
    height: 36px;
    display: block;
    background-color: transparent;
    border: 0px;
    border-bottom: 1px solid #5A698F;
    margin: 20px auto 10px auto;
    color: #FFFFFF;
    font-family: Outfit;
    font-size: 15px;
    font-weight: 400;
    line-height: 18.9px;
    text-align: left;
    padding-left: 20px;


    &:focus{
        outline: 0px;
        border-bottom: 1px solid #FFFFFF;
    }
    &:focus::placeholder{
        color: transparent;
        
    }
`

const LoginBtn = styled.button`
    width: 85%;
    height: 48px;
    background-color: #FC4747;
    border-radius: 3px;
    color:#FFF;
    margin: 40px 7.5% 0px 7.5%;
    border: 0px;
`

const SignUpPara = styled.p`
    color: #FFFFFF;
    font-family: Outfit;
    font-size: 15px;
    font-weight: 200;
    line-height: 18.9px;
    text-align: left;
    margin: 30px 20px 20px 100px;

    span{
        color: #FC4747;
        cursor: pointer;
    }
`

export const Logo = styled.img`
    width: 32px;
    height: 25.6px;
    display: block;
    margin: auto;
    margin-bottom: 80px;
`