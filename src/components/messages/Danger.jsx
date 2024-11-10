import React from 'react'

const Danger = () => {
    return (
        <div className="flex items-center justify-between bg-red-100 text-red-800 text-xs font-medium  px-2.5 py-3 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
            <span>Continuer la verification de votre compte</span>
            <span className="underline"> Verifier </span>
        </div>)
}

export default Danger