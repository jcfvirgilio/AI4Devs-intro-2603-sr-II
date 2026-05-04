import LoginForm from "../../components/LoginForm";

// Metadata para la página
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar sesión - AutoFlow AI",
  description: "Inicia sesión en tu cuenta de AutoFlow AI",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <LoginForm />
    </div>
  );
}