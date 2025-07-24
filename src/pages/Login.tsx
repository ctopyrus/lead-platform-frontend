// src/pages/Login.tsx
import { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (email: string, password: string) => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || 'Login failed');
                return;
            }

            localStorage.setItem('token', data.token);
            alert('Login successful!');
            navigate('/dashboard'); // TODO: Create this page later
        } catch (err) {
            alert('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return <AuthForm type="login" onSubmit={handleLogin} loading={loading} />;
}
