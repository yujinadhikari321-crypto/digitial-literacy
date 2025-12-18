import { NextResponse } from "next/server";

const GEMINI_API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

export async function POST(req: Request) {
    try {
        const { scores } = await req.json();

        const prompt = `
You are an expert teacher trainer for government and public schools.

Based on the following teacher digital readiness scores (0–100), create a structured 2-month (8-week) curriculum.

Scores:
${JSON.stringify(scores, null, 2)}

Rules:
- Focus MORE on low-score areas
- Keep content beginner-friendly
- Assume limited internet and devices
- Include weekly goals, topics, activities, and tools
- Include confidence-building activities
- Do NOT mention scores explicitly
- Output clearly week by week

Return the curriculum in a clear, readable format.
`;

        const response = await fetch(
            `${GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [
                        {
                            role: "user",
                            parts: [{ text: prompt }],
                        },
                    ],
                }),
            }
        );

        const data = await response.json();

        const curriculum =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "Curriculum generation failed.";

        return NextResponse.json({ curriculum });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to generate curriculum" },
            { status: 500 }
        );
    }
}
