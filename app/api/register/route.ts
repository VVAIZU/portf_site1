import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json();

        if (!username || !password) {
            return NextResponse.json({ error: "Name and password are required." }, { status: 400 });
        }

        // Проверяем, существует ли пользователь с такой почтой
        const existingUser = await prisma.users.findUnique({
            where: { password },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "User with this password already exists." },
                { status: 400 }
            );
        }

        // Создаем нового пользователя
        const newUser = await prisma.users.create({
            data: { 
                username, 
                password,
            },
        });

        return NextResponse.json({ user: newUser }, { status: 201 });
    } catch (error) {
        console.error("Error during registration:", error);
        return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }
}
