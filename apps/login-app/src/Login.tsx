import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from './components/ui/card';
import { Input } from './components/ui/input';
import { Checkbox } from '@radix-ui/react-checkbox';
import { Button } from './components/ui/button';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleLogin = () => {
    if (rememberMe) {
      document.cookie = `username=${username}; path=/`;
    } else {
      localStorage.setItem('username', username);
    }
    window.location.href = '/home';
  };

  return (
    <Card>
      <CardHeader>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Bem-vindo ao Portal do Colaborador
      </h3>
      </CardHeader>
      <CardContent>
        <div>
          <label>Insira seu usuario</label>
          <Input type='text' id='user' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor='password'>Insira sua senha</label>
          <Input type='password' id='password'/>
        </div>
        <div>
          <label>Lembre-me</label>
          <Checkbox checked={rememberMe} onChange={(e) => setRememberMe((e.target as HTMLInputElement).checked)} />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleLogin}>
          Entrar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;