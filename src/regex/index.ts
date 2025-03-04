
// src/regex/index.ts

// Expressão regular para email (padrão de emails comuns)
export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// Expressão regular para senha (pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um caractere especial)
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
