import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
    return (
        <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
            <div>
                <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
                    Better every day
                </span>
                <h3 className="text-4xl md:text-6xl font-semibold text-white">
                    Let s change it up a bit
                </h3>
                <p className="text-base md:text-lg text-gray-400 my-4 md:my-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nam nobis in error repellat voluptatibus ad.
                </p>
                <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
                    Find a class
                </button>
            </div>
            <ShuffleGrid />
        </section>
    );
};

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {
        id: 1,
        src: "data:image/jpeg;base64,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",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        id: 8,
        src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
    },
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
    },
    {
        id: 13,
        src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
        id: 14,
        src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    },
    {
        id: 15,
        src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
    },
    {
        id: 16,
        src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
    },
];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
            }}></motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
            {squares.map((sq) => sq)}
        </div>
    );
};

export default Hero;
