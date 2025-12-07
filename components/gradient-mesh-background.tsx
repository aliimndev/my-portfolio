"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export function GradientMeshBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        // Only render on dark mode
        if (resolvedTheme !== "dark") return

        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationId: number
        let time = 0

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const noise = (x: number, y: number, t: number) => {
            return Math.sin(x * 0.01 + t) * Math.cos(y * 0.01 + t) * 0.5 + 0.5
        }

        const animate = () => {
            time += 0.005

            const width = canvas.width
            const height = canvas.height

            // Create gradient mesh effect
            const imageData = ctx.createImageData(width, height)
            const data = imageData.data

            for (let y = 0; y < height; y += 2) {
                for (let x = 0; x < width; x += 2) {
                    const n1 = noise(x, y, time)
                    const n2 = noise(x + 100, y + 100, time * 1.3)
                    const n3 = noise(x + 200, y + 50, time * 0.7)

                    // Deep space colors - purple, blue, cyan (original dark theme)
                    const r = Math.floor(n1 * 30 + n2 * 20)
                    const g = Math.floor(n2 * 15 + n3 * 25)
                    const b = Math.floor(n1 * 40 + n3 * 60)

                    // Fill 2x2 block for performance
                    for (let dy = 0; dy < 2 && y + dy < height; dy++) {
                        for (let dx = 0; dx < 2 && x + dx < width; dx++) {
                            const i = ((y + dy) * width + (x + dx)) * 4
                            data[i] = r
                            data[i + 1] = g
                            data[i + 2] = b
                            data[i + 3] = 255
                        }
                    }
                }
            }

            ctx.putImageData(imageData, 0, 0)

            // Add some glowing orbs
            const orbs = [
                { x: width * 0.3, y: height * 0.4, r: 200, color: "rgba(139, 92, 246, 0.15)" },
                { x: width * 0.7, y: height * 0.6, r: 250, color: "rgba(59, 130, 246, 0.12)" },
                { x: width * 0.5, y: height * 0.3, r: 180, color: "rgba(6, 182, 212, 0.1)" },
            ]

            orbs.forEach((orb, i) => {
                const offsetX = Math.sin(time + i) * 50
                const offsetY = Math.cos(time * 0.8 + i) * 30

                const gradient = ctx.createRadialGradient(
                    orb.x + offsetX, orb.y + offsetY, 0,
                    orb.x + offsetX, orb.y + offsetY, orb.r
                )
                gradient.addColorStop(0, orb.color)
                gradient.addColorStop(1, "transparent")

                ctx.fillStyle = gradient
                ctx.fillRect(0, 0, width, height)
            })

            animationId = requestAnimationFrame(animate)
        }

        resize()
        window.addEventListener("resize", resize)
        animate()

        return () => {
            window.removeEventListener("resize", resize)
            cancelAnimationFrame(animationId)
        }
    }, [resolvedTheme])

    // Don't render on light mode - just use pure white bg from CSS
    if (!mounted || resolvedTheme !== "dark") {
        return null
    }

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, #0a0a0f, #0f0a1a)" }}
        />
    )
}


