import { ChampionRotation } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";

async function getRotation(): Promise<ChampionRotation> {
  const rotationUrl = process.env.NEXT_RIOT_ROTATION_CHAMPIONS_URL;
  const apiKey = process.env.NEXT_RIOT_API_KEY;

  if (!apiKey) {
    throw new Error("API key error");
  }

  if (!rotationUrl) {
    throw new Error("API URL error");
  }

  try {
    const response = await fetch(rotationUrl, {
      headers: {
        "X-Riot-Token": apiKey
      }
    });

    if (!response.ok) {
      throw new Error(`에러발생: ${response.statusText}`);
    }

    const data = await response.json();
    return data as ChampionRotation;
  } catch (error) {
    console.error("챔피언로테이션 정보 못가져왔음:", error);
    throw error;
  }
}

export async function GET() {
  try {
    const rotationData = await getRotation();
    return NextResponse.json(rotationData);
  } catch (error) {
    let errorMessage = "에러 발생!";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ message: "챔피언로테이션정보 못가져왔음", error: errorMessage }, { status: 500 });
  }
}
