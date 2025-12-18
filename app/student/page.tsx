"use client";

import { useEffect, useState } from "react";

type Stage = "idle" | "analyzing" | "result";

type ImprovementArea = {
    field: string;
    level: "Strong" | "Needs improvement" | "Priority";
    suggestion: string;
};

const DUMMY_IMPROVEMENTS: ImprovementArea[] = [
    {
        field: "Digital Basics",
        level: "Needs improvement",
        suggestion: "Practice using the keyboard and mouse, and learn how to create, save, and find your files on the computer.",
    },
    {
        field: "Online Research",
        level: "Priority",
        suggestion: "Work on searching for information using clear keywords and checking if a website is trustworthy before using it.",
    },
    {
        field: "Digital Safety",
        level: "Strong",
        suggestion: "You understand basic online safety. Keep avoiding sharing personal details and continue reporting anything that feels unsafe.",
    },
    {
        field: "Learning with Videos & Apps",
        level: "Needs improvement",
        suggestion: "Try using simple learning apps or short videos to revise topics after class and pause/rewind to take notes.",
    },
];

export default function StudentPage() {
    const [stage, setStage] = useState<Stage>("idle");
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please upload an image file (jpg, png, etc.)");
            return;
        }

        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }

        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        setStage("analyzing");

        setTimeout(() => {
            setStage("result");
        }, 5000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8">
                <h1 className="text-2xl font-bold text-center mb-2">
                    Student Digital Skills Snapshot
                </h1>
                <p className="text-center text-gray-500 mb-6">
                    Upload a student photo to simulate an AI-based skills analysis.
                </p>

                {/* Upload section */}
                <div className="flex flex-col items-center mb-8">
                    {previewUrl && (
                        <img
                            src={previewUrl}
                            alt="Student preview"
                            className="w-32 h-32 rounded-full object-cover mb-4 border border-gray-200"
                        />
                    )}
                    <label className="inline-flex items-center px-5 py-3 rounded-full bg-indigo-600 text-white font-medium cursor-pointer hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span>Upload / Take Photo</span>
                        <input
                            type="file"
                            accept="image/*"
                            capture="environment"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </label>
                    <p className="text-xs text-gray-400 mt-2">
                        Uses your device camera if available, otherwise opens file picker.
                    </p>
                </div>

                {/* Analyzing state */}
                {stage === "analyzing" && (
                    <div className="flex flex-col items-center justify-center py-6">
                        <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-3" />
                        <p className="text-indigo-700 font-medium">Analyzing student data…</p>
                        <p className="text-sm text-gray-500 mt-1">
                            This may take around 1-2 mins.
                        </p>
                    </div>
                )}

                {/* Result state */}
                {stage === "result" && (
                    <div className="mt-4 space-y-4">
                        <h2 className="text-lg font-semibold mb-2">
                            Suggested Focus Areas
                        </h2>
                        <p className="text-sm text-gray-500 mb-2">
                            Below are example insights showing what this student could work on to
                            improve their digital skills.
                        </p>
                        <div className="space-y-3">
                            {DUMMY_IMPROVEMENTS.map((item) => (
                                <div
                                    key={item.field}
                                    className="border border-gray-200 rounded-xl p-3 bg-gray-50"
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium">{item.field}</span>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${item.level === "Strong"
                                                ? "bg-green-100 text-green-700"
                                                : item.level === "Needs improvement"
                                                    ? "bg-amber-100 text-amber-700"
                                                    : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {item.level}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">{item.suggestion}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Idle helper text */}
                {stage === "idle" && (
                    <p className="text-sm text-center text-gray-500">
                        After uploading a photo, the system will{" "}
                        <span className="font-semibold">simulate</span> analysis and show areas for
                        improvement using the data provided.
                    </p>
                )}
            </div>
        </div>
    );
}


