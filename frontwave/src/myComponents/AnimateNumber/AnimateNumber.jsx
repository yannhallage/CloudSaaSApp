// src/components/AnimateNumber.jsx
import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const AnimateNumber = ({ value = 0, duration = 1 }) => {
    const motionValue = useMotionValue(0);
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        const controls = animate(motionValue, value, {
            duration,
            onUpdate: (latest) => setDisplay(Math.floor(latest)),
        });

        return controls.stop;
    }, [value]);

    return (
        <motion.span>
            {display.toLocaleString("fr-FR")} FCFA
        </motion.span>
    );
};

export default AnimateNumber;
