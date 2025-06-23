import { motion } from "framer-motion";

export function NavButtons({ event,icon,label }) {
    return (
        <>
            <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={event}
                className="flex items-center space-x-2 px-4 py-2 rounded-full cursor-pointer backdrop-blur-md bg-white/10 hover:bg-white/20 text-gray-700 shadow-md transition"
            >
                {icon}
                <span className="font-medium">{label}</span>
            </motion.button>
        </>
    );
}
