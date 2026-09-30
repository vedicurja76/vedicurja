'use client';

import { useEffect } from 'react';

const FAV_SIZE = 64;         // higher resolution for crisp compass
const SPEED = 80;            // ms per frame

function makeFrame(t: number): string {
  const canvas = document.createElement('canvas');
  canvas.width = FAV_SIZE;
  canvas.height = FAV_SIZE;
  const ctx = canvas.getContext('2d')!;
  const s = FAV_SIZE;
  const cx = s / 2;
  const cy = s / 2;
  const outerR = s * 0.46;
  const innerR = s * 0.39;

  // 1. Dark cosmic background
  ctx.clearRect(0, 0, s, s);
  const bgGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, outerR);
  bgGrad.addColorStop(0, '#0a0618');
  bgGrad.addColorStop(1, '#020408');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, s, s);

  // 2. Golden outer ring
  ctx.strokeStyle = 'rgba(212,175,55,0.7)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
  ctx.stroke();

  // 3. Inner dotted ring
  ctx.strokeStyle = 'rgba(255,240,190,0.25)';
  ctx.lineWidth = 0.8;
  ctx.setLineDash([3, 4]);
  ctx.beginPath();
  ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]); // reset

  // 4. Tick marks (N, E, S, W)
  const directions = [
    { label: 'N', angle: 0 },
    { label: 'E', angle: Math.PI / 2 },
    { label: 'S', angle: Math.PI },
    { label: 'W', angle: Math.PI * 1.5 },
  ];
  ctx.strokeStyle = 'rgba(255,255,255,0.55)';
  ctx.lineWidth = 1.2;
  ctx.font = 'bold 7px "Times New Roman", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  directions.forEach(dir => {
    const x = cx + Math.cos(dir.angle) * (outerR * 0.78);
    const y = cy + Math.sin(dir.angle) * (outerR * 0.78);
    // tick line
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(dir.angle) * (outerR - 5), cy + Math.sin(dir.angle) * (outerR - 5));
    ctx.lineTo(cx + Math.cos(dir.angle) * (outerR - 1), cy + Math.sin(dir.angle) * (outerR - 1));
    ctx.stroke();
    // label
    ctx.fillStyle = '#f0d060';
    ctx.fillText(dir.label, x, y);
  });

  // 5. Additional small ticks every 30°
  for (let i = 0; i < 12; i++) {
    const angle = (i * Math.PI) / 6;
    // skip major ticks already drawn
    if (i % 3 === 0) continue;
    const x1 = cx + Math.cos(angle) * (outerR - 2);
    const y1 = cy + Math.sin(angle) * (outerR - 2);
    const x2 = cx + Math.cos(angle) * (outerR - 4);
    const y2 = cy + Math.sin(angle) * (outerR - 4);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.lineWidth = 0.6;
    ctx.stroke();
  }

  // 6. Rotating red needle (arrow)
  const needleAngle = t * Math.PI * 2; // full rotation per frame cycle

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(needleAngle);

  // Red needle (arrow pointing north)
  const needleLength = outerR * 0.75;
  const needleWidth = 2.5;
  const arrowHeadSize = 4;

  // Needle body
  ctx.beginPath();
  ctx.moveTo(0, -needleLength);
  ctx.lineTo(needleWidth, 0);
  ctx.lineTo(0, needleLength * 0.3);
  ctx.lineTo(-needleWidth, 0);
  ctx.closePath();
  ctx.fillStyle = '#c10000'; // kumkuma red
  ctx.shadowColor = '#ff0000';
  ctx.shadowBlur = 6;
  ctx.fill();
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;

  // Arrow head (triangle at tip)
  ctx.beginPath();
  ctx.moveTo(0, -needleLength - 2);
  ctx.lineTo(arrowHeadSize, -needleLength + 4);
  ctx.lineTo(-arrowHeadSize, -needleLength + 4);
  ctx.closePath();
  ctx.fillStyle = '#ff4444';
  ctx.shadowColor = '#ff0000';
  ctx.shadowBlur = 8;
  ctx.fill();
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;

  // Shine sweep on needle (horizontal clip in local coords)
  const shineX = (t * 60) - 15;
  ctx.save();
  ctx.beginPath();
  ctx.rect(shineX - 4, -needleLength - 5, 10, needleLength + 12);
  ctx.clip();
  const shineGrad = ctx.createLinearGradient(shineX - 4, 0, shineX + 10, 0);
  shineGrad.addColorStop(0, 'rgba(255,255,255,0)');
  shineGrad.addColorStop(0.4, 'rgba(255,255,255,0.7)');
  shineGrad.addColorStop(0.6, 'rgba(255,255,255,0.7)');
  shineGrad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = shineGrad;
  // Fill the needle again inside clip for shine
  ctx.beginPath();
  ctx.moveTo(0, -needleLength - 2);
  ctx.lineTo(arrowHeadSize, -needleLength + 4);
  ctx.lineTo(needleWidth, 0);
  ctx.lineTo(0, needleLength * 0.3);
  ctx.lineTo(-needleWidth, 0);
  ctx.lineTo(-arrowHeadSize, -needleLength + 4);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  ctx.restore(); // back to normal

  // 7. Central golden pivot
  ctx.beginPath();
  ctx.arc(cx, cy, 2, 0, Math.PI * 2);
  ctx.fillStyle = '#d4af37';
  ctx.shadowColor = '#000';
  ctx.shadowBlur = 3;
  ctx.fill();
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.beginPath();
  ctx.arc(cx, cy, 0.8, 0, Math.PI * 2);
  ctx.fillStyle = '#fff';
  ctx.fill();

  // 8. Floating gold particles
  for (let i = 0; i < 3; i++) {
    const angle = (t * Math.PI * 2) + (i * 2.1);
    const rad = outerR * 0.68 + i * 1.2;
    const px = cx + Math.cos(angle) * rad;
    const py = cy + Math.sin(angle) * rad;
    const alpha = 0.3 + 0.3 * Math.abs(Math.sin(angle * 3));
    ctx.fillStyle = `rgba(255,215,0,${alpha})`;
    ctx.beginPath();
    ctx.arc(px, py, 0.7, 0, Math.PI * 2);
    ctx.fill();
  }

  return canvas.toDataURL('image/png');
}

export default function AnimatedFavicon() {
  useEffect(() => {
    const frames: string[] = [];
    for (let i = 0; i < 36; i++) {
      frames.push(makeFrame(i / 36));
    }

    let link = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }

    let idx = 0;
    const update = () => {
      link!.href = frames[idx];
      idx = (idx + 1) % frames.length;
    };
    update();
    const interval = setInterval(update, SPEED);
    return () => clearInterval(interval);
  }, []);

  return null;
}
