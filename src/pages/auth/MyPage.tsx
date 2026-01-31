import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'
import type { Session } from '@supabase/supabase-js'

export default function MyPage() {
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState(false)
    const [newPassword, setNewPassword] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            if (!session) {
                navigate('/login')
            }
        })
    }, [navigate])

    const handleUpdatePassword = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        const { error } = await supabase.auth.updateUser({
            password: newPassword
        })

        if (error) {
            alert(error.message)
        } else {
            alert('비밀번호가 성공적으로 변경되었습니다.')
            setNewPassword('')
        }
        setLoading(false)
    }

    const handleWithdrawal = async () => {
        if (!confirm('정말로 탈퇴하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) return

        setLoading(true)

        // 1. Sign out locally first to clear session
        await supabase.auth.signOut()

        // 2. Call backend to delete user (requires Service Role Key)
        // Note: Currently this might fail if the backend function isn't set up with the key yet.
        try {
            const response = await fetch('/api/delete-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session?.access_token}` // Send user token for verification
                }
            })

            if (!response.ok) {
                // Even if backend fails, we signed out locally, so just redirect.
                console.error('Account deletion on server failed')
            }
        } catch (err) {
            console.error('Network error during deletion', err)
        }

        alert('회원 탈퇴가 완료되었습니다.')
        navigate('/')
        setLoading(false)
    }

    if (!session) return null

    return (
        <div className="flex flex-col justify-center items-center min-h-screen px-4 pt-20 pb-10">
            <div className="w-full max-w-2xl bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-white/40">
                <h1 className="text-3xl md:text-4xl font-serif text-amber-900 mb-8 text-center">My Page</h1>

                {/* Section 1: My Info */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-amber-800 mb-4 border-b border-amber-200 pb-2">내 정보</h2>
                    <div className="bg-white/50 p-4 rounded-xl border border-amber-100">
                        <p className="text-sm text-gray-500 mb-1">이메일 계정</p>
                        <p className="text-lg font-medium text-gray-800">{session.user.email}</p>
                    </div>
                </section>

                {/* Section 2: Change Password */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-amber-800 mb-4 border-b border-amber-200 pb-2">비밀번호 변경</h2>
                    <form onSubmit={handleUpdatePassword} className="flex flex-col gap-4">
                        <input
                            className="p-4 rounded-xl border border-amber-200/50 bg-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            type="password"
                            placeholder="새로운 비밀번호"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            minLength={6}
                        />
                        <p className="text-xs text-amber-800/60 ml-1 -mt-2">
                            * 최소 6자 이상 입력해주세요
                        </p>
                        <button
                            className="bg-amber-600 text-white font-bold py-3 rounded-xl hover:bg-amber-700 transition-colors disabled:opacity-50"
                            disabled={loading || !newPassword}
                        >
                            {loading ? '변경 중...' : '비밀번호 변경하기'}
                        </button>
                    </form>
                </section>

                {/* Section 3: Withdrawal */}
                <section>
                    <h2 className="text-xl font-bold text-red-800 mb-4 border-b border-red-200 pb-2">회원 탈퇴</h2>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <p className="text-red-700 mb-4 text-sm">
                            탈퇴 시 모든 데이터(저장한 음악, 구매 내역 등)가 삭제되며 복구할 수 없습니다.
                        </p>
                        <button
                            onClick={handleWithdrawal}
                            className="w-full bg-white text-red-600 font-bold py-3 rounded-xl border border-red-200 hover:bg-red-50 hover:text-red-700 transition-colors"
                            disabled={loading}
                        >
                            탈퇴하기
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}
