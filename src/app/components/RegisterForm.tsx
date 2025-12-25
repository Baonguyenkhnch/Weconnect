import { useState } from 'react';
import logoImage from "../img/WeConnect_Logo 1.png";

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

export function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register:', formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full max-w-2xl backdrop-blur-xl bg-white/10 rounded-3xl p-12 shadow-2xl border border-white/20">
      <div className="flex items-center justify-center gap-6 mb-10">
        <img src={logoImage} alt="We Connect" className="w-24 h-24 rounded-2xl" />
        <h1 className="text-white text-5xl">We Connect</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-white/90 text-sm mb-1.5 block">Họ</label>
            <input
              type="text"
              placeholder="Nhập họ của bạn"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-purple-900/40 backdrop-blur-md border border-purple-400/30 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-300/50"
            />
          </div>
          <div>
            <label className="text-white/90 text-sm mb-1.5 block">Tên</label>
            <input
              type="text"
              placeholder="Nhập tên của bạn"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-purple-900/40 backdrop-blur-md border border-purple-400/30 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-300/50"
            />
          </div>
        </div>

        <div>
          <label className="text-white/90 text-sm mb-1.5 block">Email</label>
          <input
            type="email"
            placeholder="Nhập email của bạn"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-purple-900/40 backdrop-blur-md border border-purple-400/30 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-300/50"
          />
        </div>

        <div>
          <label className="text-white/90 text-sm mb-1.5 block">Tên đăng nhập</label>
          <input
            type="text"
            placeholder="Nhập tên đăng nhập của bạn"
            value={formData.username}
            onChange={(e) => handleChange('username', e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-purple-900/40 backdrop-blur-md border border-purple-400/30 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-300/50"
          />
        </div>

        <div>
          <label className="text-white/90 text-sm mb-1.5 block">Mật khẩu</label>
          <input
            type="password"
            placeholder="Nhập mật khẩu của bạn"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-purple-900/40 backdrop-blur-md border border-purple-400/30 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-300/50"
          />
        </div>

        <div>
          <label className="text-white/90 text-sm mb-1.5 block">Xác nhận mật khẩu</label>
          <input
            type="password"
            placeholder="Xác nhận lại mật khẩu của bạn"
            value={formData.confirmPassword}
            onChange={(e) => handleChange('confirmPassword', e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-purple-900/40 backdrop-blur-md border border-purple-400/30 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-300/50"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-full bg-white text-purple-900 hover:bg-white/90 transition-colors mt-6"
        >
          Đăng ký
        </button>

        <div className="text-center pt-3">
          <span className="text-white/60 text-sm">Bạn đã có tài khoản? </span>
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-white text-sm font-medium hover:text-white/80"
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  );
}