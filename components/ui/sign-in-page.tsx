'use client'

import React, { useState } from 'react'
import { Eye, EyeOff, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function LoginPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login submitted:', formData)
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-teal-900 via-slate-900 to-emerald-950 flex flex-col md:flex-row overflow-hidden font-sans">
      {/* Left Panel - Image Section */}
      <div className="hidden md:block flex-1 relative overflow-hidden">
        {/* Top Header overlay */}
        <div className="absolute top-6 left-6 z-10">
          <button
            onClick={() => navigate('/')}
            className="w-10 h-10 bg-teal-950/45 backdrop-blur-md border border-teal-500/20 rounded-full flex items-center justify-center hover:bg-teal-800/40 transition-all shadow-lg"
            aria-label="Back to Homepage"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce2?auto=format&fit=crop&w=3840&q=100"
            alt="Keshavkrupa Hospital Infrastructure"
            className="w-full h-full object-cover filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-950/40 via-transparent to-black/15"></div>
        </div>
      </div>

      {/* Right Panel - Form Section */}
      <div className="flex-1 flex items-center justify-center bg-slate-50 p-6 md:p-12 overflow-y-auto">
        <div className="w-full max-w-md bg-white border border-slate-100 p-8 md:p-10 rounded-2xl shadow-xl">
          <div className="mb-8 relative">
            {/* Back Button on Mobile */}
            <button
              onClick={() => navigate('/')}
              className="md:hidden mb-6 flex items-center gap-2 text-teal-700 hover:text-teal-800 transition-colors font-semibold text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>

            {/* Logo centered here on the right side */}
            <div className="flex flex-col items-center justify-center gap-2 mb-8 text-center">
              <img src="/assets/images/logo-icon.svg" alt="Keshavkrupa Hospital Logo" className="w-12 h-12 filter drop-shadow-sm" />
              <div className="flex flex-col items-center">
                <span className="text-teal-950 font-bold text-xl leading-tight tracking-wide font-display">Keshavkrupa</span>
                <span className="text-amber-500 text-[10px] uppercase font-bold tracking-wider mt-0.5">Care You Can Trust</span>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-slate-900 mb-2 font-display">
                Welcome Back
              </h1>
              <p className="text-slate-500 text-sm">
                Don&apos;t have an account or portal credentials?{' '}
                <button
                  onClick={() => navigate('/contact')}
                  className="text-teal-700 hover:text-teal-800 font-semibold transition-colors"
                >
                  Contact admin
                </button>
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                User ID, Email, or Employee ID
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your ID or Email"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all text-slate-800 bg-slate-50/50"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 pr-12 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all text-slate-800 bg-slate-50/50"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded-full transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-slate-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-slate-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-teal-700 border-slate-300 rounded focus:ring-teal-500 accent-teal-700"
                />
                <span>Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm text-teal-700 hover:text-teal-800 font-semibold transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-3.5 px-4 rounded-xl font-bold hover:bg-teal-800 transition-all shadow-md shadow-teal-700/10 hover:shadow-teal-700/20 transform hover:-translate-y-[1px] active:translate-y-0"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-wider">
                <span className="px-3 bg-white text-slate-400 font-bold">or</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
              >
                {/* Google SVG */}
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-sm font-semibold text-slate-700">
                  Google
                </span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
              >
                {/* GitHub SVG */}
                <svg className="w-5 h-5 mr-2" fill="#24292f" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-sm font-semibold text-slate-700">
                  GitHub
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
