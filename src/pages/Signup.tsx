// src/pages/Signup.tsx
import { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (email: string, password: string) => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:3000/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || 'Signup failed');
                return;
            }

            localStorage.setItem('token', data.token);
            alert('Signup successful!');
            navigate('/dashboard'); // TODO: Create later
        } catch (err) {
            alert('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return <AuthForm type="signup" onSubmit={handleSignup} loading={loading} />;
}
