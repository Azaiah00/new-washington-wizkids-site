/**
 * Utility Functions
 * Helper functions used throughout the application
 */

/**
 * Formats a number to always show 2 digits (adds leading zero if needed)
 * Used for countdown timer display
 * 
 * @param num - The number to format
 * @returns Formatted string with leading zero if needed
 * 
 * @example
 * padZero(5) // returns "05"
 * padZero(15) // returns "15"
 */
export function padZero(num: number): string {
  return String(num).padStart(2, '0')
}

/**
 * Calculates the time remaining until a future date
 * Returns an object with days, hours, minutes, and seconds
 * 
 * @param futureDate - The target date/time
 * @returns Object containing time units and expiration status
 */
export function getTimeRemaining(futureDate: Date): {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
} {
  const now = new Date().getTime()
  const distance = futureDate.getTime() - now

  // Check if countdown has expired
  if (distance < 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true,
    }
  }

  // Calculate time units
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  return {
    days,
    hours,
    minutes,
    seconds,
    isExpired: false,
  }
}

/**
 * Creates a future date based on a duration object
 * Used for setting up countdown timers
 * 
 * @param duration - Object with days, hours, minutes, seconds to add
 * @returns Future date object
 */
export function createFutureDate(duration: {
  days: number
  hours: number
  minutes: number
  seconds: number
}): Date {
  const futureDate = new Date()
  futureDate.setDate(futureDate.getDate() + duration.days)
  futureDate.setHours(futureDate.getHours() + duration.hours)
  futureDate.setMinutes(futureDate.getMinutes() + duration.minutes)
  futureDate.setSeconds(futureDate.getSeconds() + duration.seconds)
  return futureDate
}

/**
 * Smoothly scrolls to a section on the page
 * Used for navigation link behavior
 * 
 * @param sectionId - The ID of the section to scroll to
 */
export function scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

/**
 * Capitalizes the first letter of a string
 * Used for formatting stat names in charts
 * 
 * @param str - The string to capitalize
 * @returns Capitalized string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Placeholder function for analytics tracking
 * Can be extended with Google Analytics or other tracking services
 * 
 * @param eventName - Name of the event to track
 * @param elementId - ID of the element that triggered the event
 */
export function trackClick(eventName: string, elementId: string): void {
  // Placeholder for analytics tracking
  console.log(`Track: ${eventName} on ${elementId}`)
  
  // Example: Google Analytics 4 event tracking
  // if (typeof window !== 'undefined' && (window as any).gtag) {
  //   (window as any).gtag('event', eventName, {
  //     'custom_parameter': elementId
  //   })
  // }
}

