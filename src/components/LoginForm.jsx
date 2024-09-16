// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Result } from 'antd';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { SmileOutlined } from '@ant-design/icons';

const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(login(values));
    setIsLoggedIn(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (isLoggedIn) {
    return (
      <Result
        icon={<SmileOutlined />}
        title="Вы успешно вошли в ваш аккаунт!"
        extra={<Button onClick={() => setIsLoggedIn(false)} type="primary">Ок</Button>}
      />
    );
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Логин"
        name="username"
        rules={[{ required: true, message: 'Введите ваш логин!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Введите ваш пароль!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Запомнить данные</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 13, span: 16 }}>
        <Button type="primary" htmlType="submit">
			 Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
