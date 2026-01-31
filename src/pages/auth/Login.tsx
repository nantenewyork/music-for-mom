import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            alert(error.message)
        } else {
            navigate('/')
        }
        setLoading(false)
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen px-4">
            <div className="w-full max-w-md bg-white/50 backdrop-blur-md p-8 rounded-3xl shadow-xl">
                <h1 className="text-3xl font-serif text-amber-800 mb-6 text-center">Login</h1>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <input
                        className="p-4 rounded-xl border border-amber-200/50 bg-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="p-4 rounded-xl border border-amber-200/50 bg-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        className="bg-amber-600 text-white font-bold py-4 rounded-xl hover:bg-amber-700 transition-colors disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Sign In'}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <Link to="/forgot-password" className="text-sm text-amber-700 hover:underline">
                        비밀번호를 잊으셨나요?
                    </Link>
                </div>
                <div className="mt-2 text-center text-sm text-gray-600">
                    계정이 없으신가요? <Link to="/signup" className="text-amber-700 font-bold hover:underline">회원가입</Link>
                </div>
            </div>
        </div>
    )
}
