"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// ---- TYPES ----
type AnswerOption = "yes" | "slightly" | "no";

type Field =
    | "digitalBasics"
    | "teachingTools"
    | "internet"
    | "ethics"
    | "classroomIntegration"
    | "confidence";

type Question = {
    id: number;
    text: string;
    field: Field;
};

type AnswerRecord = {
    value: AnswerOption;
    field: Field;
};

type ResultData = {
    scores: Record<Field, number>;
    timestamp: string;
};

// ---- QUESTIONS ----
const questions: Question[] = [
    { id: 1, text: "I can operate a computer and manage files confidently.", field: "digitalBasics" },
    { id: 2, text: "I use email or messaging apps for professional work.", field: "digitalBasics" },
    { id: 3, text: "I can use a projector or smart board while teaching.", field: "teachingTools" },
    { id: 4, text: "I use digital content (PPT, videos, PDFs) in my lessons.", field: "teachingTools" },
    { id: 5, text: "I can search the internet for quality learning materials.", field: "internet" },
    { id: 6, text: "I understand online safety, privacy, and digital ethics.", field: "ethics" },
    { id: 7, text: "I guide students on responsible internet usage.", field: "ethics" },
    { id: 8, text: "I integrate technology into regular classroom activities.", field: "classroomIntegration" },
    { id: 9, text: "I feel confident trying new digital tools.", field: "confidence" },
    { id: 10, text: "I can handle small technical issues during class.", field: "confidence" },
];

const optionScore: Record<AnswerOption, number> = {
    yes: 2,
    slightly: 1,
    no: 0,
};

const optionUI: Record<AnswerOption, string> = {
    yes: "Yes, confidently",
    slightly: "Somewhat / Need support",
    no: "No, not yet",
};

export default function TeacherQuiz() {
    const [current, setCurrent] = useState<number>(0);
    const [answers, setAnswers] = useState<Record<number, AnswerRecord>>({});
    const [result, setResult] = useState<ResultData | null>(null);
    const [saved, setSaved] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);


    const progress = Math.round(((current) / questions.length) * 100);

    const handleAnswer = (value: AnswerOption): void => {
        const q = questions[current];
        const updated = { ...answers, [q.id]: { value, field: q.field } };
        setAnswers(updated);

        if (current < questions.length - 1) {
            setCurrent(current + 1);
        } else {
            calculateResult(updated);
        }
    };

    const calculateResult = async (data: Record<number, AnswerRecord>) => {
        const fieldScores: Partial<Record<Field, number>> = {};
        const fieldMax: Partial<Record<Field, number>> = {};

        Object.values(data).forEach((ans) => {
            fieldScores[ans.field] = (fieldScores[ans.field] || 0) + optionScore[ans.value];
            fieldMax[ans.field] = (fieldMax[ans.field] || 0) + 2;
        });

        const percentages = {} as Record<Field, number>;
        (Object.keys(fieldScores) as Field[]).forEach((field) => {
            percentages[field] = Math.round(
                ((fieldScores[field] || 0) / (fieldMax[field] || 1)) * 100
            );
        });

        const finalResult: ResultData = {
            scores: percentages,
            timestamp: new Date().toISOString(),
        };

        setResult(finalResult);

        try {
            const res = await fetch("/api/send-mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(finalResult),
            });

            if (!res.ok) throw new Error("Email failed");
            setSaved(true);
        } catch (err) {
            console.error(err);
            setError(true);
        }

        try {
            const curriculumRes = await fetch("/api/generate-curriculum", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ scores: finalResult.scores }),
            });

            const curriculumData = await curriculumRes.json();

            // Display it, save it, or send to admin
            console.log("Generated Curriculum:", curriculumData.curriculum);

            // Optional: save it in state to show in UI
            // setCurriculum(curriculumData.curriculum);
        } catch (err) {
            console.error("Curriculum generation failed", err);
        }
    };


    // ---- RESULT UI ----
    if (result) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
                <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-8">
                    <h1 className="text-2xl font-bold mb-6 text-center">Assessment Summary</h1>

                    {(Object.entries(result.scores) as [Field, number][]).map(
                        ([key, value]) => (
                            <div key={key} className="mb-4">
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="capitalize">{key}</span>
                                    <span>{value}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div
                                        className="h-3 rounded-full bg-indigo-500"
                                        style={{ width: `${value}%` }}
                                    />
                                </div>
                            </div>
                        )
                    )}

                    {saved && (
                        <p className="mt-6 text-center text-green-600 font-medium">
                            ✅ Your records have been saved
                        </p>
                    )}

                    {error && (
                        <p className="mt-6 text-center text-red-600 font-medium">
                            ❌ Something went wrong while saving records
                        </p>
                    )}

                </div>
            </div>
        );
    }

    const q = questions[current];

    // ---- QUIZ UI ----
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center p-6">
            <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-8"
            >
                <h1 className="text-xl font-semibold text-center mb-2">
                    Teacher Digital Readiness Assessment
                </h1>
                <p className="text-sm text-center text-gray-500 mb-4">
                    Question {current + 1} of {questions.length}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                    <div
                        className="h-2 bg-indigo-500 rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <h2 className="text-lg font-medium mb-6 text-center">{q.text}</h2>

                <div className="space-y-4">
                    {(Object.keys(optionUI) as AnswerOption[]).map((opt) => (
                        <button
                            key={opt}
                            onClick={() => handleAnswer(opt)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 transition font-medium"
                        >
                            {optionUI[opt]}
                        </button>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
