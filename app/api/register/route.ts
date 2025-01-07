import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { name, email } = await req.json();

        if (!name || !email) {
            return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
        }

        // Проверяем, существует ли пользователь с такой почтой
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "User with this email already exists." },
                { status: 400 }
            );
        }

        // Создаем нового пользователя
        const newUser = await prisma.user.create({
            data: { name, email },
        });

        return NextResponse.json({ user: newUser }, { status: 201 });
    } catch (error) {
        console.error("Error during registration:", error);
        return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }
}
