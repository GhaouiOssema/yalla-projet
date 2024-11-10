import { motion } from "framer-motion";
import { variants } from "../utils";

const Loader = () => {
    return (
        <div className="grid place-content-center bg-violet-600 px-4 py-24 h-screen w-screen">
            <motion.div
                transition={{
                    staggerChildren: 0.25,
                }}
                initial="initial"
                animate="animate"
                className="flex gap-1">
                <motion.div variants={variants} className="h-12 w-2 bg-white" />
                <motion.div variants={variants} className="h-12 w-2 bg-white" />
                <motion.div variants={variants} className="h-12 w-2 bg-white" />
                <motion.div variants={variants} className="h-12 w-2 bg-white" />
                <motion.div variants={variants} className="h-12 w-2 bg-white" />
            </motion.div>
        </div>
    );
};

export default Loader;
