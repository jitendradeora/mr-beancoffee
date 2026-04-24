import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full space-y-8"
        >
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl mb-2 text-foreground font-heading">
              Welcome Back
            </h1>
            <p className="text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-foreground">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm mb-2 text-foreground">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-sm text-foreground">
                    Remember me
                  </label>
                </div>
                <Link to="/forgot-password" className="text-sm text-primary hover:text-primary/80 transition-colors">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-all font-medium"
              >
                Sign In
              </button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-primary hover:text-primary/80 transition-colors font-medium">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
