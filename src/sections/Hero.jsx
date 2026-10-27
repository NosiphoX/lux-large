import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Hero.css'

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.to('.blob-1', { x: 40, y: -30, scale: 1.1, duration: 12, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.blob-2', { x: -35, y: 30, scale: 0.95, duration: 14, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.blob-3', { x: 25, y: 40, scale: 1.08, duration: 16, repeat: -1, yoyo: true, ease: 'sine.inOut' })

      
      gsap.from('.hero-content > *', { opacity: 0, y: 24, duration: 1.2, stagger: 0.15, ease: 'power2.out' })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="hero-content">
        <p className="hero-eyebrow">Handcrafted hair, made for you</p>
        <h1>A softer kind of luxury</h1>
        <p className="hero-text">
          Premium hair units and bespoke customization, delivered anywhere in South Africa.
        </p>
        <a href="#collection" className="hero-btn">Explore the Collection</a>
      </div>
    </section>
  )
}

export default Hero