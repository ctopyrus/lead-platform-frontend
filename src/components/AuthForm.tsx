// src/components/AuthForm.tsx
import { useState } from 'react';

type AuthFormProps = {
    type: 'login' | 'signup';
    onSubmit: (email: string, password: string) => void;
    loading: boolean;
};

export default function AuthForm({ type, onSubmit, loading }: AuthFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(email, password);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded shadow-md w-full max-w-sm space-y-4"
        >
            <h2 className="text-2xl font-bold text-center">
                {type === 'login' ? 'Login' : 'Create Account'}
            </h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded"
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded"
                required
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                disabled={loading}
            >
                {loading ? 'Please wait...' : type === 'login' ? 'Login' : 'Sign Up'}
            </button>
        </form>
    );
}
