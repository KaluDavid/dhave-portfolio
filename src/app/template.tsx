"use client";
import AboutSkeleton from "@/components/skeletons/about-skeleton";
import CaseStudySkeleton from "@/components/skeletons/caseStudy-skeleton";
import HomeSkeleton from "@/components/skeletons/homer-skeleton";
import { SkeletonGate } from "@/components/skeletons/skeleton-gate";
import { usePathname } from "next/navigation";
import React from "react";

function useSkeleton() {
  const pathname = usePathname();

  if (pathname.startsWith("/about")) return <AboutSkeleton />;
  if (pathname.startsWith("/case-study")) return <CaseStudySkeleton />;

  return <HomeSkeleton />;
}
const Template = ({ children }: { children: React.ReactNode }) => {
  return <SkeletonGate skeleton={useSkeleton()}>{children}</SkeletonGate>;
};

export default Template;
