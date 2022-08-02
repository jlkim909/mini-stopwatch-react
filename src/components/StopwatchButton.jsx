import React, { forwardRef, memo } from 'react';

const StopwatchButton = forwardRef(
    ({ label, color, code, handleClick }, ref) => {
        return (
            <button
                className={`${color} rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md`}
                onClick={handleClick}
                ref={ref}
            >
                <p className="text-base">{label}</p>
                <p className="text-xs">{code}</p>
            </button>
        );
    }
);

export default memo(StopwatchButton);
