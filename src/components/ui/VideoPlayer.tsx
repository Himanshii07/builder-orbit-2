
import React, { useRef, useState } from 'react';
import { Maximize } from 'lucide-react';

// Helper to extract YouTube video ID from URL
function getYouTubeId(url) {
  const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[1].length === 11 ? match[1] : null;
}

const CustomVideoPlayer = ({ src, title = "Project Showcase", className = "" }) => {
  const containerRef = useRef(null);
  const [showControls, setShowControls] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Check if src is a YouTube link
  const youtubeId = getYouTubeId(src);

  // Fullscreen logic for iframe
  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!document.fullscreenElement) {
      container.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative group rounded-3xl overflow-hidden bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-yellow-400/20 ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video or YouTube Embed */}
      {youtubeId ? (
        <>
          <iframe
            className="w-full h-full aspect-video object-cover"
            src={`https://www.youtube.com/embed/${youtubeId}?controls=0&autoplay=1&mute=0&rel=0&modestbranding=1`}
            title={title}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          />
          {/* Open on YouTube Button */}
          <div className="absolute top-8 right-8 z-20">
            <a
              href={`https://youtu.be/${youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white/20 text-white border border-white/30 rounded-full hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
            >
              Open on YouTube
            </a>
          </div>
        </>
      ) : (
        <video
          className="w-full h-full object-cover"
          src={src}
          autoPlay
          loop
          controls
          playsInline
        />
      )}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Video Info Badge */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
        <div className="bg-white/10 text-white border border-white/20 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold">
          {title}
        </div>
        <div className="text-white/80 text-sm">
          Result Video • 3D Modeling & Environment
        </div>
      </div>

      {/* Custom Fullscreen Button (always visible on hover) */}
      <div
        className={`absolute bottom-8 right-8 z-10 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
      >
        <button
          onClick={toggleFullscreen}
          className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
        >
          <Maximize size={16} />
        </button>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;