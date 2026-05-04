interface BlobProps {
  color: string;
  className?: string;
  animation?: "animate-drift" | "animate-drift-slow" | "animate-drift-reverse";
  delay?: string;
  duration?: string;
}

export default function FloatingBlobs({ blobs }: { blobs?: BlobProps[] }) {
  const defaultBlobs: BlobProps[] = [
    { color: "bg-purple-600/30", className: "-top-[20%] -left-[10%] w-[70%] h-[70%]", animation: "animate-drift" },
    { color: "bg-orange-600/30", className: "-bottom-[20%] -right-[10%] w-[70%] h-[70%]", animation: "animate-drift-slow", delay: "2s" },
    { color: "bg-blue-600/20", className: "top-[20%] right-[10%] w-[50%] h-[50%]", animation: "animate-drift-reverse", delay: "4s" },
  ];

  const activeBlobs = blobs || defaultBlobs;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        {activeBlobs.map((blob, i) => (
          <div
            key={i}
            className={`absolute rounded-full blur-[120px] ${blob.color} ${blob.className} ${blob.animation}`}
            style={{ 
              animationDelay: blob.delay || "0s",
              animationDuration: blob.duration 
            }}
          />
        ))}
      </div>
    </div>
  );
}
