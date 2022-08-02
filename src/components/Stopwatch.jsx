import React, { useEffect, useRef } from 'react';
import useTimer from '../hooks/useTimer';
import LapList from './LapList';
import StopwatchButton from './StopwatchButton';
import Timer from './Timer';

const Stopwatch = () => {
    const { centisecond, start, pause, createLap, reset, isRunning, laps } =
        useTimer();
    const lapResetBtnRef = useRef(null);
    const startPauseBtnRef = useRef(null);
    const onKeyDown = (e) => {
        if (e.code === 'KeyL') {
            lapResetBtnRef.current.click();
            return;
        }
        if (e.code === 'KeyS') {
            startPauseBtnRef.current.click();
            return;
        }
    };
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    });

    return (
        <section className="w-fit bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center m-auto mt-36 max-w-sm">
            <Timer centisecond={centisecond} />
            <div className="flex justify-between text-white pb-8 text-sm select-none">
                <StopwatchButton
                    label={isRunning ? '랩' : '리셋'}
                    color="bg-gray-600"
                    code="L"
                    handleClick={isRunning ? createLap : reset}
                    ref={lapResetBtnRef}
                />
                <StopwatchButton
                    label={isRunning ? '중단' : '시작'}
                    color={isRunning ? 'bg-red-600' : 'bg-green-600'}
                    code="S"
                    handleClick={isRunning ? pause : start}
                    ref={startPauseBtnRef}
                />
            </div>
            <LapList laps={laps} />
        </section>
    );
};

export default Stopwatch;
