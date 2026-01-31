import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        // Check if user came from a valid reset link
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session) {
                setError('유효하지 않은 링크입니다. 비밀번호 찾기를 다시 시도해주세요.')
            }
        })
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const { error } = await supabase.auth.updateUser({
            password: newPassword
        })

        if (error) {
            setError(error.message)
        } else {
            alert('비밀번호가 성공적으로 변경되었습니다!')
            navigate('/login')
        }
        setLoading(false)
    }

    if (error && error.includes('유효하지 않은')) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen px-4">
                <div className="w-full max-w-md bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-white/40 text-center">
                    <div className="mb-6">
                        <span className="material-symbols-outlined text-6xl text-red-600">error</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-serif text-amber-900 mb-4">링크 만료</h1>
                    <p className="text-gray-700 mb-6">{error}</p>
                    <button
                        onClick={() => navigate('/forgot-password')}
                        className="w-full bg-amber-600 text-white font-bold py-3 rounded-xl hover:bg-amber-700 transition-colors"
                    >
                        다시 시도하기
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen px-4">
            <div className="w-full max-w-md bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-white/40">
                <h1 className="text-2xl md:text-3xl font-serif text-amber-900 mb-2 text-center">새 비밀번호 설정</h1>
                <p className="text-sm text-gray-600 text-center mb-8">
                    새로운 비밀번호를 입력해주세요.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        className="p-4 rounded-xl border border-amber-200/50 bg-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500 invalid:border-red-500 invalid:text-red-600"
                        type="password"
                        placeholder="새로운 비밀번호"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        minLength={8}
                        pattern="(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
                        title="최소 8자 이상, 대문자 및 특수문자를 포함해야 합니다"
                    />
                    <p className="text-xs text-amber-800/60 ml-1 -mt-2">
                        * 최소 8자 이상, 대문자 및 특수문자(!@#$%^&*) 포함
                    </p>

                    {error && !error.includes('유효하지 않은') && (
                        <p className="text-sm text-red-600 text-center">{error}</p>
                    )}

                    <button
                        className="bg-amber-600 text-white font-bold py-4 rounded-xl hover:bg-amber-700 transition-colors disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? '변경 중...' : '비밀번호 변경하기'}
                    </button>
                </form>
            </div>
        </div>
    )
}
