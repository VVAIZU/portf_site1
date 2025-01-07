import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const SECRET_KEY = process.env.JWT_SECRET || crypto.randomBytes(64).toString("hex");

export async function POST(req: NextRequest) {
    try {
        const { name, email } = await req.json();

        if (!name || !email) {
            return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
        }

        // Проверяем, существует ли пользователь с таким именем и почтой
        const user = await prisma.user.findFirst({
            where: { name, email },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found. Please register." }, { status: 404 });
        }
        // Создаем токен
        const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, SECRET_KEY, {
            expiresIn: "7d",
        });

        return NextResponse.json({ token });
        // return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        console.error("Error in login:", error);
        return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }
}
