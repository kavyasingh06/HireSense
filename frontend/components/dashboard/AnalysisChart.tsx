"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

type Props = {
  atsScore: number;
  skillsMatch: number;
  interviewReadiness: number;
};

export default function AnalysisChart({ atsScore, skillsMatch, interviewReadiness }: Props) {
  const data = [
    { metric: "ATS", value: atsScore },
    { metric: "Skills", value: skillsMatch },
    { metric: "Interview", value: interviewReadiness },
  ];

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" />
          <PolarRadiusAxis domain={[0, 100]} />
          <Radar dataKey="value" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}