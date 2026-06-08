"use client"

import { useState } from "react"
import toast from "react-hot-toast"

export function AdminLogin() {
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        window.location.href = "/guest-admin/dashboard"
      } else {
        toast.error("비밀번호가 틀렸습니다")
      }
    } catch {
      toast.error("로그인 실패")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-primary-dark flex items-center justify-center px-6">
      <div className="glass rounded-2xl p-8 w-full max-w-sm">
        <h1 className="text-2xl font-serif text-primary mb-6 text-center">
          관리자
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호 입력"
            className="w-full"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-primary-dark hover:bg-primary/90 disabled:opacity-50 rounded-lg py-2 font-medium transition-colors"
          >
            {isLoading ? "확인 중..." : "로그인"}
          </button>
        </form>
      </div>
    </div>
  )
}
