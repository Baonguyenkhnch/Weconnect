import { useState } from 'react';
import { Eye, EyeOff, User, Lock } from 'lucide-react';
import logoImage from "../img/WeConnect_Logo 1.png";

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

export function LoginForm({ onSwitchToRegister }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { username, password, rememberMe });
  };

  return (
    <div className="w-full max-w-2xl backdrop-blur-xl bg-white/10 rounded-3xl p-12 shadow-2xl border border-white/20">
      <div className="flex items-center gap-6 mb-10">
        <img src={logoImage} alt="We Connect" className="w-20 h-20 rounded-2xl" />
        <h1 className="text-white text-4xl">We Connect</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 pr-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-white/30"
          />
          <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 pr-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-white/30"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5 text-white/70" />
            ) : (
              <Eye className="w-5 h-5 text-white/70" />
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 px-2">
          <input
            type="checkbox"
            id="remember"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 rounded border-white/30 bg-white/15 accent-purple-500"
          />
          <label htmlFor="remember" className="text-white/80 text-sm">
            Lưu mật khẩu
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-white text-purple-600 hover:bg-white/90 transition-colors mt-6"
        >
          Đăng nhập
        </button>

        <div className="text-center pt-4">
          <span className="text-white/70 text-sm">Chưa có tài khoản? </span>
          <button
            type="button"
            onClick={onSwitchToRegister}
            className="text-white text-sm underline hover:text-white/80"
          >
            Đăng ký
          </button>
        </div>
      </form>
    </div>
  );
}