import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const SECRET_KEY = process.env.JWT_SECRET || crypto.randomBytes(64).toString("hex");

export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json();

        if (!username || !password) {
            return NextResponse.json({ error: "Name and password are required." }, { status: 400 });
        }

        // Проверяем, существует ли пользователь с таким именем и почтой
        const user = await prisma.users.findFirst({
            where: { username, password },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found. Please register." }, { status: 404 });
        }
        // Создаем токен
        const token = jwt.sign({ id: user.id, name: user.username, password: user.password }, SECRET_KEY, {
            expiresIn: "7d",
        });

        return NextResponse.json({ token });
        // return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        console.error("Error in login:", error);
        return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }
}
