import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

// Mock de usuarios válidos (en producción usar Supabase Auth)
const mockValidUsers = [
  { email: "user@example.com", password: "password123" },
  { email: "test@test.com", password: "test123" },
];

// Secret para JWT (en producción usar variable de entorno)
const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-key-change-in-production";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // 1. Validación básica de formato
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Formato de email inválido" },
        { status: 400 }
      );
    }

    if (!password || password.length < 8) {
      return NextResponse.json(
        { error: "La contraseña debe tener al menos 8 caracteres" },
        { status: 400 }
      );
    }

    // 2. Mock validation - en producción usar Supabase Auth
    const user = mockValidUsers.find((u) => u.email === email && u.password === password);

    if (!user) {
      return NextResponse.json(
        { error: "Email o contraseña incorrectos" },
        { status: 401 }
      );
    }

    // 3. Generar JWT con email como payload
    const token = jwt.sign(
      { email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    // 4. Configurar cookie HTTP-only con flags de seguridad
    const response = NextResponse.json(
      { success: true, message: "Login exitoso" },
      { status: 200 }
    );

    response.headers.set(
      "Set-Cookie",
      serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60, // 1 hora
        path: "/",
      })
    );

    return response;

  } catch (error) {
    console.error("Error en login route:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Método GET no permitido. Usa POST" },
    { status: 405 }
  );
}