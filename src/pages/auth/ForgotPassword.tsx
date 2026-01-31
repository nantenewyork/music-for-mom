import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/reset-password`
        })

        if (error) {
            alert(error.message)
        } else {
            setSuccess(true)
        }
        setLoading(false)
    }

    if (success) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen px-4">
                <div className="w-full max-w-md bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-white/40 text-center">
                    <div className="mb-6">
                        <span className="material-symbols-outlined text-6xl text-green-600">check_circle</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-serif text-amber-900 mb-4">이메일을 확인해주세요</h1>
                    <p className="text-gray-700 mb-6">
                        비밀번호 재설정 링크를 <strong>{email}</strong>로 발송했습니다.
                        <br />이메일을 확인하고 링크를 클릭해주세요.
                    </p>
                    <button
                        onClick={() => navigate('/login')}
                        className="w-full bg-amber-600 text-white font-bold py-3 rounded-xl hover:bg-amber-700 transition-colors"
                    >
                        로그인으로 돌아가기
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen px-4">
            <div className="w-full max-w-md bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-white/40">
                <h1 className="text-2xl md:text-3xl font-serif text-amber-900 mb-2 text-center">비밀번호 찾기</h1>
                <p className="text-sm text-gray-600 text-center mb-8">
                    가입하신 이메일 주소를 입력하시면<br />비밀번호 재설정 링크를 보내드립니다.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        className="p-4 rounded-xl border border-amber-200/50 bg-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button
                        className="bg-amber-600 text-white font-bold py-4 rounded-xl hover:bg-amber-700 transition-colors disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? '전송 중...' : '재설정 링크 보내기'}
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate('/login')}
                        className="text-amber-700 text-sm hover:underline"
                    >
                        로그인으로 돌아가기
                    </button>
                </form>
            </div>
        </div>
    )
}
