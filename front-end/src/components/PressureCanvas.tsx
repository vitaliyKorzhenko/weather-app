import { useContext, useEffect, useRef } from 'react';
import ForecastContext from '../../Context/ForecastContext';

const PressureCanvas = () => {
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
        const radius2 = canvas.width / 2 - 25; // Radius of outer circle
        const radius1 = radius2 * 0.9; //Radius of inner circle
        const strokesNumber = 75;
        const angleBetweenStrokes = 270 / strokesNumber;
        const pressuremin = 950; // x1
        const pressuremax = 1070; // x2
        const anglemin = 225; // y1
        const anglemax = -45; // y2

        const getArrowAngle = (
            x1: number,
            x2: number,
            y1: number,
            y2: number,
            x: number
        ) => ((x - x1) * (y1 - y2)) / (x1 - x2) + y1; // linear interpolation (also short - lerp)

        function getCoordinates(r: number, radian: number) {
            const x = r * Math.cos(radian);
            const y = r * Math.sin(radian);

            return [x, y] as const;
        }

        for (let i = 0; i < strokesNumber; i++) {
            const radians = ((i * angleBetweenStrokes + 135) * Math.PI) / 180;
            const [x1, y1] = getCoordinates(radius1, radians); // [x1, y1]
            const [x2, y2] = getCoordinates(radius2, radians);
            context.beginPath();
            context.lineWidth = 10;
            context.moveTo(x1 + centerX, y1 + centerY);
            context.lineTo(x2 + centerX, y2 + centerY);
            context.strokeStyle = `rgb(120 120 120/ 70%)`;
            context.stroke();
        }

        //arrow position
        const arrowAngle = getArrowAngle(
            pressuremin,
            pressuremax,
            anglemin,
            anglemax,
            forecast!.current.pressure
        );

        //gradient arrows

        for (
            let i = arrowAngle, opacity = 75;
            i > arrowAngle - 20;
            i -= 20 / 25, opacity -= 2
        ) {
            const radians = ((i + 135) * Math.PI) / 180;
            const [x1, y1] = getCoordinates(radius1, radians); // [x1, y1]
            const [x2, y2] = getCoordinates(radius2, radians);
            context.beginPath();
            context.lineWidth = 15;
            context.moveTo(x1 + centerX, y1 + centerY);
            context.lineTo(x2 + centerX, y2 + centerY);
            context.strokeStyle = `rgb(255 255 255/ ${opacity}%)`;
            context.stroke();
        }

        const [x, y] = getCoordinates(
            radius2 + 10,
            ((arrowAngle + 135) * Math.PI) / 180
        ); //coordinates of the arrow on the outer circle

        const [x1, y1] = getCoordinates(
            radius1 - 10,
            ((arrowAngle + 135) * Math.PI) / 180
        ); //coordinates of the arrow on the inner circle

        context.beginPath();
        context.lineWidth = 30;
        context.lineCap = 'round';
        context.moveTo(x1 + centerX, y1 + centerY);
        context.lineTo(x + centerX, y + centerY);
        context.strokeStyle = 'white';
        context.stroke();

        // context.clearRect(0, 0, canvas.width, canvas.height);

        context.font = '14px';
        context.fillStyle = 'white';
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ width: '110px', height: '110px' }}
        ></canvas>
    );
};

export default PressureCanvas;
