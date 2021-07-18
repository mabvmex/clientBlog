import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { signInApi } from '../../../api/user';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../../utils/constants'
import './loginForm.scss';
 
export default function LoginForm() {
    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const changeForm = e => {
        setInput ({...input, [e.target.name]: e.target.value });
    };

    const login = async e => {
        const result = await signInApi(input);

        if(result.message) {
            notification['error']({
                message: result.message
            });

        } else {
            const {accessToken, refreshToken } = result;
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            localStorage.setItem(REFRESH_TOKEN, refreshToken);

            notification['success']({
                message: 'Login correcto.'
            });
            window.location.href = '/admin';
        }
    };

    return (
        <Form className='login-form' onFinish = { login } onChange = { changeForm }>
            <Form.Item>
                <Input
                prefix = { <UserOutlined type='user' style={ {color: 'rgba(0,0,0,.25'} } />}
                type = 'email'
                name = 'email'
                placeholder = 'Email'
                className = 'login-form__input'
                />
            </Form.Item>
            <Form.Item>
                <Input
                prefix = { <LockOutlined type='lock' style={ {color: 'rgba(0,0,0,.25'} } />}
                type = 'password'
                name = 'password'
                placeholder = 'Password'
                className = 'login-form__input'
                />
            </Form.Item>
            <Form.Item>
                <Button htmlType = 'submit' className = 'login-form__button'>
                    Entrar
                </Button>
            </Form.Item>
        </Form>
    )
}