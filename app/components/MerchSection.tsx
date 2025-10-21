'use client'

/**
 * MerchSection Component
 * The WizKids Vault - Limited edition merch with countdown timer
 * 
 * Features:
 * - Live countdown timer updating every second
 * - 3 product cards with different statuses
 * - Featured product with special styling
 * - Scarcity-driven design for urgency
 */

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { MERCH_PRODUCTS } from '@/lib/data'
import { COUNTDOWN_DURATION } from '@/lib/constants'
import { getTimeRemaining, padZero, createFutureDate } from '@/lib/utils'
import type { CountdownState } from '@/lib/types'

export default function MerchSection() {
  // State for countdown timer
  const [countdown, setCountdown] = useState<CountdownState>({
    days: COUNTDOWN_DURATION.days,
    hours: COUNTDOWN_DURATION.hours,
    minutes: COUNTDOWN_DURATION.minutes,
    seconds: COUNTDOWN_DURATION.seconds,
    isExpired: false,
  })

  /**
   * Effect: Initialize and update countdown timer
   * Updates every second until the timer expires
   */
  useEffect(() => {
    // Create future date based on countdown duration
    const futureDate = createFutureDate(COUNTDOWN_DURATION)

    // Update countdown immediately
    setCountdown(getTimeRemaining(futureDate))

    // Set up interval to update every second
    const interval = setInterval(() => {
      const remaining = getTimeRemaining(futureDate)
      setCountdown(remaining)

      // Clear interval when countdown expires
      if (remaining.isExpired) {
        clearInterval(interval)
      }
    }, 1000)

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [])

  /**
   * Render button based on product status
   */
  const renderButton = (status: string) => {
    switch (status) {
      case 'sold-out':
        return (
          <button
            className="w-full mt-4 bg-wizards-navy text-white py-2 rounded-lg font-bold opacity-60 cursor-not-allowed"
            disabled
          >
            SOLD OUT
          </button>
        )
      case 'current':
        return (
          <button className="w-full mt-4 bg-wizards-navy text-white py-2 rounded-lg font-bold hover:bg-wizards-red transition duration-300">
            Shop Now
          </button>
        )
      case 'coming-soon':
        return (
          <button className="w-full mt-4 bg-wizards-navy text-white py-2 rounded-lg font-bold hover:bg-wizards-red transition duration-300">
            Coming Soon
          </button>
        )
      default:
        return null
    }
  }

  return (
    <section id="merch" className="py-20 bg-wizards-navy text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <header className="mb-8">
          <h2 className="text-4xl md:text-5xl font-anton uppercase tracking-wide">
            THE WIZKIDS VAULT
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-gray-300">
            Exclusive, limited-edition drops for true fans. Once they're gone, they're gone forever. 
            New item drops when the timer hits zero.
          </p>
        </header>

        {/* Countdown Timer */}
        <div
          id="countdown"
          className="text-4xl md:text-6xl font-anton tracking-wider my-6 bg-white text-wizards-red rounded-lg p-4 inline-block shadow-lg"
          role="timer"
          aria-live="polite"
        >
          {countdown.isExpired ? (
            <span>NEW DROP LIVE!</span>
          ) : (
            <>
              <span>{padZero(countdown.days)}D</span> : <span>{padZero(countdown.hours)}H</span> :{' '}
              <span>{padZero(countdown.minutes)}M</span> : <span>{padZero(countdown.seconds)}S</span>
            </>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {MERCH_PRODUCTS.map((product) => (
            <article
              key={product.id}
              className={`card-hover-effect bg-white text-gray-800 rounded-lg p-4 relative ${
                product.featured ? 'border-4 border-wizards-red shadow-2xl' : ''
              }`}
            >
              {/* Featured Badge */}
              {product.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-wizards-red text-white px-4 py-1 rounded-full font-bold uppercase tracking-wider text-sm">
                  Current Drop
                </div>
              )}

              {/* Product Image */}
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Product Details */}
              <h3 className="text-xl font-bold mt-4">{product.name}</h3>
              <p className="text-2xl font-bold text-wizards-red mt-2">
                ${product.price.toFixed(2)}
              </p>

              {/* Action Button */}
              {renderButton(product.status)}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

