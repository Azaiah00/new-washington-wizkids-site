'use client'

/**
 * Hero Component
 * Full-screen hero section with YouTube video background
 * 
 * Features:
 * - Looping muted YouTube video background
 * - 65% dark overlay for text readability
 * - Responsive text sizing
 * - Call-to-action button linking to YouTube channel
 */

import { useEffect, useRef } from 'react'
import { YOUTUBE_VIDEO_ID, SOCIAL_LINKS } from '@/lib/constants'

// Extend Window interface to include YouTube IFrame API
declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export default function Hero() {
  const playerRef = useRef<any>(null)

  /**
   * Effect: Load and initialize YouTube IFrame API
   * Creates a looping, muted video background
   */
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    /**
     * Callback when YouTube API is ready
     * Creates the player instance with autoplay and loop
     */
    const onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID, // Required for looping
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })
    }

    /**
     * Player ready event handler
     * Starts video playback and ensures it's muted
     */
    const onPlayerReady = (event: any) => {
      event.target.playVideo()
      event.target.mute()
    }

    /**
     * Player state change event handler
     * Ensures video loops properly
     */
    const onPlayerStateChange = (event: any) => {
      // If video ended, restart it (backup for loop)
      if (event.data === window.YT.PlayerState.ENDED) {
        event.target.playVideo()
      }
    }

    // Check if YouTube API is already loaded
    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady()
    } else {
      // Load YouTube IFrame API script
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady

      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    }

    // Cleanup function
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
      }
    }
  }, [])

  return (
    <section className="hero-video-section" role="banner">
      {/* YouTube Video Background */}
      <div className="video-background">
        <div id="youtube-player" className="youtube-container"></div>
        {/* Dark tint overlay for text readability */}
        <div className="video-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-anton tracking-wide uppercase leading-tight">
          THE ONLY WIZARDS
          <br />
          TAKES THAT MATTER.
        </h1>
        
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          Hard-hitting analysis, unfiltered opinions, and die-hard fan perspective. 
          This is Washington WizKids. Your new home for all things Wizards.
        </p>
        
        <a
          href={SOCIAL_LINKS.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-wizards-red text-white text-xl font-bold py-4 px-10 rounded-full uppercase tracking-wider transition duration-300 hover:bg-white hover:text-wizards-red transform hover:scale-105"
        >
          Watch on YouTube Now!
        </a>
      </div>
    </section>
  )
}

