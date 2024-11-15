import { MapPin, Trash2 } from "lucide-react";

const MonTrajetList = ({ handleDeleteStop, idx, handleStopChange, stop }) => {
    return (
        <div className="relative">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
                type="text"
                placeholder={`Étape ${idx + 1}`}
                value={stop}
                onChange={(e) => handleStopChange(idx, e.target.value)}
                className="w-full pl-12 pr-12 py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-500"
            />
            <button
                onClick={() => handleDeleteStop(idx)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Trash2 className="h-5 w-5 text-gray-400 hover:text-red-500" />
            </button>
        </div>
    );
};

export default MonTrajetList;
