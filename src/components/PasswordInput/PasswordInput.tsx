
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import "./PasswordInput.css"

interface PasswordInputProps {
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

export const PasswordInput = ({ label, value, onChange, error }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="password-input-container">
      <label>{label}</label>
      <div className="password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder="Digite sua senha"
        />
        <button
          type="button"
          className="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {error && <span className="error">{error}</span>}
    </div>
  )
}
