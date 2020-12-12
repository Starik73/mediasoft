import React from "react";

import { padNumber } from "../../helpers/pad";

const Clock = () => {

    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        const clockInterval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(clockInterval);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const paddedHours = padNumber(hours);
    const paddedMinutes = padNumber(minutes);
    const paddedSeconds = padNumber(seconds);
    return (
        <div>
            { paddedHours}: { paddedMinutes}: { paddedSeconds}
        </div>
    );
};

export default Clock;