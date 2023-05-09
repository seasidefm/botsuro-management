import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const prisma = new PrismaClient();

  const data = await prisma.storedSong.findMany();

  return NextResponse.json(
    { data },
    {
      status: 200,
    }
  );
}
