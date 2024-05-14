import { useRef, useEffect } from 'react';

type SunriseSunsetProps = {
    sunrise: Date;
    sunset: Date;
    time: Date;
};

function CosineCanvas({ sunrise, sunset, time }: SunriseSunsetProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const context = canvas.getContext('2d')!;
        const devicePixelRatio = window.devicePixelRatio || 1;
        canvas.width = 160 * 4 * devicePixelRatio;
        canvas.height = 70 * 4 * devicePixelRatio;

        // Set up some constants
        const width = canvas.width;
        const height = canvas.height;
        const padding = 0;
        const centerX = width / 2;
        const centerY = height / 2;
        const scaleY = height / 3;
        const scaleX = Math.PI / (width / 2);

        const cosineFun = (x: number) => {
            const angle = (x - centerX) * scaleX;
            const y = -Math.cos(angle) * scaleY + centerY;
            return y;
        };

        // Draw the cosine function

        context.moveTo(padding, cosineFun(padding));
        context.lineWidth = 15;

        for (let x = padding; x <= width - padding; x++) {
            context.beginPath();
            context.moveTo(x - 1, cosineFun(x - 1));
            context.lineTo(x, cosineFun(x));
            context.strokeStyle =
                x > 0.25 * width && x < 0.75 * width ? '#8a9fca' : '#06265a';
            context.stroke();
        }
        // Draw the x and y axes
        context.beginPath();
        context.lineWidth = 10;
        context.moveTo(padding, centerY);
        context.lineTo(width - padding, centerY);
        // context.moveTo(centerX, padding);
        // context.lineTo(centerX, height - padding);
        context.strokeStyle = '#9d9d9f';
        context.stroke();

        //Get the sun coordinates
        const relativeSunPositionX =
            (time.getTime() - sunrise.getTime()) /
            (sunset.getTime() - sunrise.getTime());
        const sunPositionX =
            ((relativeSunPositionX - -0.5) / (1.5 - -0.5)) * width; // 0.5 and 1.5 they are relative numbers that we created to abstract the length of x axis

        const gradient = context.createRadialGradient(
            sunPositionX,
            cosineFun(sunPositionX),
            0,
            sunPositionX,
            cosineFun(sunPositionX),
            100
        );
        gradient.addColorStop(0, `rgb(255 255 255/ 50%)`); // Start color
        gradient.addColorStop(1, 'transparent'); // End color
        context.fillStyle = gradient;
        context.arc(sunPositionX, cosineFun(sunPositionX), 100, 0, Math.PI * 2);
        context.fill();

        //Draw the sun
        context.beginPath();
        context.ellipse(
            sunPositionX,
            cosineFun(sunPositionX),
            25,
            25,
            0,
            0,
            360
        );
        context.fillStyle = '#d5cdfe';
        context.fill();
    }, []);

    return (
        <canvas
            ref={canvasRef}
            // width={160}
            // height={70}
            style={{ width: '160px', height: '70px' }}
        ></canvas>
    );
}

export default CosineCanvas;
