import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";

const DeleteButton = ({ isOpen, setIsOpen }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer">
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden">
                        <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
                        <div className="relative z-10">
                            <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-red-500 grid place-items-center mx-auto">
                                <FiAlertCircle />
                            </div>
                            <h3 className="text-3xl font-bold text-center mb-2">
                                Attention !
                            </h3>
                            <p className="text-center mb-6">
                                Êtes-vous sûr de vouloir supprimer ce trajet ?
                                Cette action est irréversible.
                            </p>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="bg-transparent text-black font-semibold w-full py-2 rounded-full h-12 border border-red-500">
                                    Non, annuler
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="bg-red-500 hover:opacity-90 transition-opacity text-white font-semibold w-full py-2 rounded-full h-12">
                                    Oui, supprimer
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DeleteButton;
