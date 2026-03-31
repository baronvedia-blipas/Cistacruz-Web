"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

export default function ImageSkeleton(props: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-sm" />
      )}
      <Image
        {...props}
        onLoad={() => setLoaded(true)}
        className={`${props.className ?? ""} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
