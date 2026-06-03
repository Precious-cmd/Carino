import { useState } from 'react';

interface VideoPreviewProps {
  thumbnail: string;
  videoUrl: string;
  title: string;
  description?: string;
}

export function VideoPreview({ thumbnail, videoUrl, title, description }: VideoPreviewProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={thumbnail} alt={title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/70 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10">
          <span className="text-3xl text-white">▶</span>
        </div>
      </div>
      {isHovered ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : null}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {description ? <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p> : null}
      </div>
    </div>
  );
}
