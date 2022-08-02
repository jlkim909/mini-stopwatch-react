import { memo } from 'react';
import formatTime from '../util/formatTime';

function LapList({ laps }) {
    const lapTimeArr = laps.reduce((acc, cur) => [...acc, cur[1]], []);
    const maxIdx = lapTimeArr.lastIndexOf(Math.max(...lapTimeArr));
    const minIdx = lapTimeArr.lastIndexOf(Math.min(...lapTimeArr));

    const minMaxStyle = (idx) => {
        if (laps.length < 2) return;
        if (idx === maxIdx) {
            return 'text-red-600';
        }
        if (idx === minIdx) {
            return 'text-green-600';
        }
        return '';
    };

    return (
        <ul className="text-gray-600 h-64 overflow-auto border-t-2">
            {laps.map((lap, idx) => (
                <li
                    className={`flex justify-between py-2 px-3 border-b-2 ${minMaxStyle(
                        idx
                    )}`}
                    style={{ color: 'text-red-600' }}
                    key={lap[0]}
                >
                    <span>{`랩 ${lap[0] + 1}`}</span>
                    <span>{formatTime(lap[1])}</span>
                </li>
            ))}
        </ul>
    );
}

export default memo(LapList);
