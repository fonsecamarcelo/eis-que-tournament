import './login.css';
import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { logIn, error } = useAuth();
  console.log(error)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      email,
      password
    };

    console.log({ email, password });
    await logIn(user);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      {error && <p>deu ruim</p>}
      <span>Não possui Cadastro? <strong><a href="https://www.linkedin.com/feed/">Clique para se cadastrar</a></strong></span>
    </>
  );
};

export default Login;
