import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const users = await prisma.users.findMany();

    return NextResponse.json({
        users: ['admin'], // Здесь можете использовать данные из базы, если нужно
    });
}

export async function POST(req: NextRequest) {
    const data = await req.json();

    const user = await prisma.users.create({
        data
    });

    return NextResponse.json(user)
}