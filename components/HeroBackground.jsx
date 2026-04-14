"use client";
import { useEffect, useRef } from "react";
import styles from "./HeroBackground.module.css";

export default function HeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Klasy Grad i Noise pozostają bez zmian - to poprawna implementacja Perlina
    class Grad {
      constructor(x, y, z) { this.x = x; this.y = y; this.z = z; }
      dot2(x, y) { return this.x * x + this.y * y; }
    }

    class Noise {
      constructor(seed = 0) {
        this.grad3 = [
          new Grad(1, 1, 0), new Grad(-1, 1, 0),
          new Grad(1, -1, 0), new Grad(-1, -1, 0),
        ];
        this.p = Array.from({ length: 256 }, () => Math.floor(Math.random() * 256));
        this.perm = new Array(512);
        this.gradP = new Array(512);
        this.seed(seed);
      }
      seed(seed) {
        for (let i = 0; i < 256; i++) {
          const v = this.p[i];
          this.perm[i] = this.perm[i + 256] = v;
          this.gradP[i] = this.gradP[i + 256] = this.grad3[v % this.grad3.length];
        }
      }
      fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
      lerp(a, b, t) { return (1 - t) * a + t * b; }
      perlin2(x, y) {
        let X = Math.floor(x), Y = Math.floor(y);
        x -= X; y -= Y;
        X &= 255; Y &= 255;
        const n00 = this.gradP[X + this.perm[Y]].dot2(x, y);
        const n01 = this.gradP[X + this.perm[Y + 1]].dot2(x, y - 1);
        const n10 = this.gradP[X + 1 + this.perm[Y]].dot2(x - 1, y);
        const n11 = this.gradP[X + 1 + this.perm[Y + 1]].dot2(x - 1, y - 1);
        const u = this.fade(x);
        return this.lerp(this.lerp(n00, n10, u), this.lerp(n01, n11, u), this.fade(y));
      }
    }

    const noise = new Noise(Math.random());
    let lines = [];
    let frameId;

    const config = {
      lineColor: "rgba(255,255,255,0.2)",
      waveSpeedX: 0.008,
      waveSpeedY: 0.003,
      waveAmpX: 24,
      waveAmpY: 12,
      // 🔥 KROK 2: Zwiększone odstępy drastycznie zmniejszają ilość obliczeń
      xGap: 24, // Zmieniono z 12 (mniej punktów w poziomie)
      yGap: 48, // Zmieniono z 24 (mniej linii w pionie)
    };

    const setSize = () => {
      // Optymalizacja rozdzielczości logicznej (canvas internal resolution)
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const setLines = () => {
      lines = [];
      const totalLines = Math.ceil(canvas.width / config.xGap);
      const totalPoints = Math.ceil(canvas.height / config.yGap);

      for (let i = 0; i <= totalLines; i++) {
        const pts = [];
        for (let j = 0; j <= totalPoints; j++) {
          pts.push({
            x: i * config.xGap,
            y: j * config.yGap,
            wave: { x: 0, y: 0 }
            // Usunięto niepotrzebny obiekt cursor
          });
        }
        lines.push(pts);
      }
    };

    const movePoints = (time) => {
      lines.forEach((pts) => {
        pts.forEach((p) => {
          const move = noise.perlin2(
            (p.x + time * config.waveSpeedX) * 0.002,
            (p.y + time * config.waveSpeedY) * 0.0015
          ) * 12;

          p.wave.x = Math.cos(move) * config.waveAmpX;
          p.wave.y = Math.sin(move) * config.waveAmpY;
        });
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.strokeStyle = config.lineColor;

      lines.forEach((points) => {
        ctx.moveTo(points[0].x, points[0].y);
        points.forEach((p) => {
          ctx.lineTo(p.x + p.wave.x, p.y + p.wave.y);
        });
      });

      ctx.stroke();
    };

    const tick = (t) => {
      movePoints(t);
      draw();
      frameId = requestAnimationFrame(tick);
    };

    window.addEventListener("resize", () => {
      setSize();
      setLines();
    });

    // Usunięto nieużywany nasłuchiwacz myszki (mousemove) - duża ulga dla przeglądarki!

    setSize();
    setLines();
    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}