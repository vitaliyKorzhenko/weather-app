import { useContext, useEffect, useRef } from 'react';
import ForecastContext from '../../Context/ForecastContext';

const CompassCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const forecast = useContext(ForecastContext);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const context = canvas.getContext('2d')!;
        const devicePixelRatio = window.devicePixelRatio || 1;
        canvas.width = 440 * devicePixelRatio;
        canvas.height = 440 * devicePixelRatio;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius2 = canvas.width / 2; // Radius of outer circle
        const radius1 = radius2 * 0.9; //Radius of inner circle
        const radius3 = radius2 * 0.1; //length of each arrow side
        const strokesNumber = 180;
        const angleBetweenStrokes = 360 / strokesNumber;
        //const font = 300;

        function degreesToRadians(degree: number) {
            return (Math.PI / 180) * degree;
        }

        function getCoordinates(r: number, radians: number) {
            //49.5, 0.035
            const x = r * Math.cos(radians); //49.5 * 0.999 = 49.45
            const y = r * Math.sin(radians); //49.5 * 0.034 = 1.73

            return [x, y] as const;
        }

        //context.lineWidth = 75;

        for (let i = 0; i < strokesNumber; i++) {
            //i=1
            const radians = degreesToRadians(i * angleBetweenStrokes); //0.035
            const [x1, y1] = getCoordinates(radius1, radians); // [49.45, 1.73]
            const [x2, y2] = getCoordinates(radius2, radians); // [55, 0]
            context.beginPath();
            context.lineWidth = 10;
            context.moveTo(x1 + centerX, y1 + centerY);
            context.lineTo(x2 + centerX, y2 + centerY);
            context.strokeStyle =
                i % 15 ? `rgb(120 120 120/ 70%)` : 'lightGray';
            context.stroke();
        }

        const [x, y] = getCoordinates(
            radius1,
            degreesToRadians(forecast!.current.wind_direction + 90)
        ); // arrow coordinates
        context.beginPath();
        context.lineWidth = 20;
        context.moveTo(centerX, centerY);
        context.lineTo(x + centerX, y + centerY);
        context.strokeStyle = '#ebac25';
        context.stroke();

        //arrow sides coordinates

        const [x1, y1] = getCoordinates(
            radius3,
            degreesToRadians(45 + forecast!.current.wind_direction + 180 + 90)
        );
        const [x2, y2] = getCoordinates(
            radius3,
            degreesToRadians(-45 + forecast!.current.wind_direction + 180 + 90)
        );

        context.beginPath();
        context.lineWidth = 5;
        context.moveTo(x + centerX, y + centerY); // Start from the endpoint of the arrow
        context.lineTo(x1 + x + centerX, y1 + y + centerY); // Draw line to first side
        context.lineTo(x2 + x + centerX, y2 + y + centerY); // Draw line to second side
        context.closePath(); // Close the path to complete the triangle
        context.fillStyle = '#ebac25'; // Set fill color
        context.fill(); // Fill the triangle
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={110}
            height={110}
            style={{ width: '110px', height: '110px' }}
        ></canvas>
    );
};

export default CompassCanvas;
