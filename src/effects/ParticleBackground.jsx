import { useEffect, useRef } from "react";

function ParticleBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let particles = [];
        let animationId;
        let startTime = performance.now();

        const colors = [
            "16, 185, 129", // Emerald
            "245, 158, 11", // Amber
            "234, 179, 8",  // Gold
        ];

        const resizeCanvas = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;

            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        resizeCanvas();

        const particleCount = window.innerWidth < 768 ? 15 : 30;

        class Particle {
            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                this.x = Math.random() * window.innerWidth;
                this.y = Math.random() * window.innerHeight;

                this.size = Math.random() * 2.8 + 0.8;

                this.speedX = (Math.random() - 0.5) * 0.25;
                this.speedY = (Math.random() - 0.5) * 0.25;

                this.baseOpacity = Math.random() * 0.45 + 0.15;

                this.opacity = initial ? 0 : this.baseOpacity;

                this.color =
                    colors[Math.floor(Math.random() * colors.length)];

                this.glow = Math.random() * 12 + 8;

                this.fadeSpeed =
                    Math.random() * 0.008 + 0.003;

                this.fadeDirection =
                    Math.random() > 0.5 ? 1 : -1;
            }

            update(elapsed) {
                this.x += this.speedX;
                this.y += this.speedY;

                /*
                  Initial appearance animation
                */
                if (elapsed < 2500) {
                    const progress = elapsed / 2500;

                    this.opacity =
                        Math.min(1, progress) * this.baseOpacity;
                } else {
                    /*
                      After loading, particles gently
                      pulse between visible and faded.
                    */
                    this.opacity +=
                        this.fadeSpeed * this.fadeDirection;

                    if (this.opacity >= this.baseOpacity + 0.25) {
                        this.fadeDirection = -1;
                    }

                    if (this.opacity <= 0.08) {
                        this.fadeDirection = 1;
                    }
                }

                /*
                  Wrap particles around screen edges
                */
                if (this.x < -20) {
                    this.x = window.innerWidth + 20;
                }

                if (this.x > window.innerWidth + 20) {
                    this.x = -20;
                }

                if (this.y < -20) {
                    this.y = window.innerHeight + 20;
                }

                if (this.y > window.innerHeight + 20) {
                    this.y = -20;
                }
            }

            draw() {
                ctx.save();

                ctx.beginPath();

                ctx.shadowBlur = this.glow;
                ctx.shadowColor = `rgba(${this.color}, ${this.opacity})`;

                ctx.arc(
                    this.x,
                    this.y,
                    this.size,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;

                ctx.fill();

                ctx.restore();
            }
        }

        particles = Array.from(
            { length: particleCount },
            () => new Particle()
        );

        const animate = (time) => {
            const elapsed = time - startTime;

            ctx.clearRect(
                0,
                0,
                window.innerWidth,
                window.innerHeight
            );

            particles.forEach((particle) => {
                particle.update(elapsed);
                particle.draw();
            });

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        window.addEventListener("resize", resizeCanvas);

        return () => {
            cancelAnimationFrame(animationId);

            window.removeEventListener(
                "resize",
                resizeCanvas
            );
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-0 opacity-70"
        />
    );
}

export default ParticleBackground;