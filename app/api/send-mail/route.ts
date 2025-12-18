import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type Field =
    | "digitalBasics"
    | "teachingTools"
    | "internet"
    | "ethics"
    | "classroomIntegration"
    | "confidence";

type Scores = Record<Field, number>;

type ResultPayload = {
    scores: Scores;
    timestamp: string;
};

function generateCurriculum(scores: Scores): string {
    const sections: { field: Field; title: string; description: string; actions: string[] }[] = [
        {
            field: "digitalBasics",
            title: "Digital Basics",
            description: "Foundational computer and device skills for everyday teaching work.",
            actions: [
                "Practice file management: creating folders, renaming, and backing up lesson files.",
                "Use basic productivity tools (Docs, Sheets, Slides) to prepare lesson materials.",
                "Schedule time each week to explore one new basic feature (shortcuts, screenshots, etc.).",
            ],
        },
        {
            field: "teachingTools",
            title: "Teaching Tools",
            description: "Using projectors, smart boards and content tools effectively in class.",
            actions: [
                "Prepare at least one PPT or slide deck for a lesson each week.",
                "Experiment with simple interactive tools (e.g., quizzes, polls) during lessons.",
                "Create a small library of videos and PDFs aligned to your subjects.",
            ],
        },
        {
            field: "internet",
            title: "Internet Skills",
            description: "Searching and evaluating online content for teaching and learning.",
            actions: [
                "Practice using specific keyword searches for upcoming topics.",
                "Compare resources from at least two different websites before choosing materials.",
                "Bookmark high‑quality education portals and reuse them regularly.",
            ],
        },
        {
            field: "ethics",
            title: "Digital Ethics & Safety",
            description: "Safe, responsible and ethical use of technology for teachers and students.",
            actions: [
                "Include a 5‑minute digital safety reminder in at least one class per week.",
                "Model good password practices and privacy settings to students.",
                "Discuss examples of cyberbullying and responsible online behaviour with your class.",
            ],
        },
        {
            field: "classroomIntegration",
            title: "Classroom Integration",
            description: "Blending technology meaningfully into everyday classroom activities.",
            actions: [
                "Redesign one existing lesson to include a digital component (video, quiz or activity).",
                "Use technology for group work or projects at least once per month.",
                "Reflect after each tech‑enabled lesson on what worked and what to improve.",
            ],
        },
        {
            field: "confidence",
            title: "Teacher Confidence with Technology",
            description: "Building comfort, experimentation and independence with digital tools.",
            actions: [
                "Set one small technology goal for yourself each month (e.g., try a new app).",
                "Pair with a more confident colleague for peer‑learning or co‑teaching.",
                "Maintain a simple log of tools you try and what you learnt from each.",
            ],
        },
    ];

    const getLevel = (score: number) => {
        if (score >= 75) return "Strong – continue deepening and sharing your practice.";
        if (score >= 50) return "Developing – you have a base; focus on consistent practice.";
        return "Priority area – start with small, regular actions to build comfort.";
    };

    const summaryRows = Object.entries(scores)
        .map(([field, value]) => {
            const label = sections.find((s) => s.field === field)?.title ?? field;
            return `<tr>
<td style="padding:6px 8px;border:1px solid #ddd;">${label}</td>
<td style="padding:6px 8px;border:1px solid #ddd;text-align:center;">${value}%</td>
<td style="padding:6px 8px;border:1px solid #ddd;">${getLevel(value)}</td>
</tr>`;
        })
        .join("");

    const curriculumSections = sections
        .map(({ field, title, description, actions }) => {
            const score = scores[field] ?? 0;
            return `
<h3 style="margin:16px 0 4px;font-size:16px;">${title} (${score}%)</h3>
<p style="margin:0 0 6px;color:#555;">${description}</p>
<ul style="margin:0 0 10px 18px;padding:0;">
  ${actions.map((a) => `<li style="margin-bottom:4px;">${a}</li>`).join("")}
</ul>`;
        })
        .join("");

    return `
<p>Based on this assessment, here is a suggested personalised digital literacy curriculum:</p>

<h2 style="margin:12px 0 6px;font-size:18px;">Score Summary</h2>
<table style="border-collapse:collapse;width:100%;font-size:14px;margin-bottom:16px;">
  <thead>
    <tr style="background:#f5f5f5;">
      <th style="padding:6px 8px;border:1px solid #ddd;text-align:left;">Area</th>
      <th style="padding:6px 8px;border:1px solid #ddd;text-align:center;">Score</th>
      <th style="padding:6px 8px;border:1px solid #ddd;text-align:left;">Interpretation</th>
    </tr>
  </thead>
  <tbody>
    ${summaryRows}
  </tbody>
</table>

<h2 style="margin:12px 0 6px;font-size:18px;">Curriculum Plan</h2>
${curriculumSections}
`;
}

export async function POST(req: Request) {
    try {
        const data = (await req.json()) as ResultPayload;

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const curriculumHtml = generateCurriculum(data.scores);

        await transporter.sendMail({
            from: `"Teacher Assessment" <${process.env.EMAIL_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            subject: "Teacher Digital Readiness Report & Curriculum Plan",
            text: "A personalised digital literacy curriculum based on the latest assessment is attached in HTML format.",
            html: `
        <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;color:#222;">
          <h1 style="font-size:20px;margin-bottom:8px;">Teacher Digital Readiness Report</h1>
          <p style="margin:0 0 10px;color:#555;">Assessment completed at: ${new Date(data.timestamp).toLocaleString()}</p>
          ${curriculumHtml}
        </div>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
