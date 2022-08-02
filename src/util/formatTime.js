const formatString = (num) => (num < 10 ? '0' + num : num);

const formatTime = (centisecond) => {
    const seconds = parseInt((centisecond / 100) % 60);
    const minutes = parseInt(centisecond / 6000);
    return `${formatString(minutes)}:${formatString(seconds)}.${formatString(
        centisecond % 100
    )}`;
};

export default formatTime;
