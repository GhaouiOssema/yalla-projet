import { Hero } from "../components";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div className="relative z-0">
            <div className=" h-screen py-20">{/* <Hero /> */}</div>
            {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div> */}
        </div>
    );
};

export default Home;
