import {
    motion,
    useAnimate,
    useDragControls,
    useMotionValue,
} from 'framer-motion';
import { ReactElement } from 'react';
import useMeasure from 'react-use-measure';

export const DragCloseDrawer = ({
    open,
    setOpen,
    children,
}: {
    open: boolean;
    setOpen: (open: boolean) => void;
    children: ReactElement;
}) => {
    const [scope, animate] = useAnimate();

    const [drawerRef, { height }] = useMeasure();

    const y = useMotionValue(325);

    const controls = useDragControls();

    const handleClose = async () => {
        // animate(scope.current, {
        //     opacity: [1, 0],
        // });

        const yStart = typeof y.get() === 'number' ? y.get() : 325;

        // await animate('#drawer', {
        //     y: [yStart, height],
        // });

        setOpen(false);
    };

    return (
        <div ref={scope} className="fixed inset-0 z-50">
            <motion.div
                id="drawer"
                ref={drawerRef}
                onClick={(e) => e.stopPropagation()}
                // initial={{ y: '100%' }}
                // animate={{ y: '0%' }}
                transition={{
                    ease: 'easeInOut',
                }}
                className="absolute bg-gradient-to-b from-[rgba(46,51,90,0.40)] to-[rgba(28,27,51,0.40)] backdrop-blur-xl rounded-t-[44px] w-full h-[75vh] overflow-hidden"
                style={{ y }}
                drag="y"
                dragControls={controls}
                onDragEnd={() => {
                    if (y.get() >= 100) {
                        handleClose();
                    }
                }}
                dragListener={false}
                dragConstraints={{
                    top: 0,

                    bottom: 500,
                }}
                // dragElastic={{
                //     top: 0,

                //     bottom: 0,
                // }}
            >
                <div
                    onPointerDown={(e) => {
                        controls.start(e);
                    }}
                    className="absolute left-0 right-0 top-0 z-10 flex justify-center"
                >
                    <button className="w-[48px] h-[5px] rounded-full bg-black opacity-30 mx-auto mt-[9px]"></button>
                </div>

                <div className="relative z-0 h-full overflow-y-scroll">
                    {children}
                </div>
            </motion.div>
        </div>
    );
};
