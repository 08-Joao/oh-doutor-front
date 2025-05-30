'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, LoginInput } from '@/models/dtos/auth';
import Api from '@/services/Api';
import { useRouter } from 'next/navigation';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    logout: () => void;
    login: (data: LoginInput) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const userData = await Api.getMe();
            setUser(userData);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (data: LoginInput): Promise<boolean> => {
        try {
            const response = await Api.login(data);
            if ('status' in response && response.status === 201) {
                await checkAuth();
                return true;
            }
            return false;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    };

    const logout = async () => {
        const response = await Api.logout();
        if ('status' in response && response.status === 204) {
            setUser(null);
            router.push('/login');
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, logout, login }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
} 