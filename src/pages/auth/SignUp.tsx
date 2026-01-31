import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useNavigate, Link } from 'react-router-dom'

export default function SignUp() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        const { error } = await supabase.auth.signUp({
            email,
            password,
        })

        if (error) {
            alert(error.message)
        } else {
            alert('회원가입 확인 메일을 보냈습니다! 이메일을 확인해주세요.')
            navigate('/login')
        }
        setLoading(false)
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen px-4">
            <div className="w-full max-w-md bg-white/50 backdrop-blur-md p-8 rounded-3xl shadow-xl">
                <h1 className="text-3xl font-serif text-amber-800 mb-6 text-center">Sign Up</h1>
                <form onSubmit={handleSignUp} className="flex flex-col gap-4">
                    <input
                        className="p-4 rounded-xl border border-amber-200/50 bg-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="p-4 rounded-xl border border-amber-200/50 bg-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500 invalid:border-red-500 invalid:text-red-600"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={8}
                        pattern="(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
                        title="최소 8자 이상, 대문자 및 특수문자를 포함해야 합니다"
                    />
                    <p className="text-xs text-amber-800/60 ml-1 -mt-2 mb-2">
                        * 최소 8자 이상, 대문자 및 특수문자(!@#$%^&*) 포함
                    </p>
                    <button
                        className="bg-amber-600 text-white font-bold py-4 rounded-xl hover:bg-amber-700 transition-colors disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? 'Sign Up' : 'Create Account'}
                    </button>
                </form>
                <div className="mt-4 text-center text-sm text-gray-600">
                    이미 계정이 있으신가요? <Link to="/login" className="text-amber-700 font-bold hover:underline">로그인</Link>
                </div>
            </div>
        </div>
    )
}
