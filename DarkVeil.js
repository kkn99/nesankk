// Dark Veil - Golden Wave (Top Variant)
class DarkVeil {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.resize();
    this.time = 0;

    window.addEventListener('resize', () => this.resize());
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  drawWaves() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // dark background
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, this.width, this.height);

    // gold wave layers (top area)
    const waves = [
      { color: 'rgba(165,134,12,0.4)', amplitude: 400, speed: 0.0025, freq: 0.503 },
      { color: 'rgba(247, 179, 9, 0.3)', amplitude: 170, speed: 0.0018, freq: 0.0823 },
      { color: 'rgba(207, 241, 9, 0.2)', amplitude: 110, speed: 0.0033, freq: 0.07 }
    ];
    //    const waves = [
    //   { color: 'rgba(255, 190, 30, 0.4)', amplitude: 400, speed: 0.0025, freq: 0.503 },
    //   { color: '#a5860c', amplitude: 170, speed: 0.0018, freq: 0.0823 },
    //   { color: 'rgba(29, 28, 26, 0.2)', amplitude: 110, speed: 0.0033, freq: 0.07 }
    // ];
    waves.forEach((wave, i) => {
      ctx.beginPath();
      for (let x = 0; x <= this.width; x += 10) {
        // Wave originates near the top instead of center
        const y =
          this.height * 0.3 +
          Math.sin(x * wave.freq + this.time * wave.speed + i * 1) * wave.amplitude +
          Math.sin(x * wave.freq * 0.6 + this.time * wave.speed * 1.5) * wave.amplitude * 0.5;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      // close shape upward (top fade)
      ctx.lineTo(this.width, 0);
      ctx.lineTo(0, 0);
      ctx.closePath();

      // gradient fades downward now (since it's at top)
      const grad = ctx.createLinearGradient(0, 0, 0, this.height * 5);
      grad.addColorStop(0, wave.color);
      grad.addColorStop(0.5, 'rgba(0,0,0,0.4)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.fillStyle = grad;
      ctx.filter = 'blur(15px)';
      ctx.fill();
      ctx.filter = 'none';
    });
  }

  animate = () => {
    this.time += 9; // controls wave speed
    this.drawWaves();
    requestAnimationFrame(this.animate);
  };
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new DarkVeil('darkVeil'));
} else {
  new DarkVeil('darkVeil');
}
