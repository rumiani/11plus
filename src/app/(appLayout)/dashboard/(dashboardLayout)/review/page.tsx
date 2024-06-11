"use client";
import React from "react";
import DashboardPage from "@/src/components/dashboard-page/dashboardPage";
import ReviewJoyride from "@/src/components/joyrides/reviewJoyride";

export default function ReviewPage() {
  return (
    <div>
      <ReviewJoyride />
      <DashboardPage />
    </div>
  );
}
