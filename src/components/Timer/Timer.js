import React from "react";
import { Button } from "react-bootstrap";

function Timer() {
    const [seconds, setSeconds] = React.useState(100);
    const [timerActive, setTimerActive] = React.useState(false);

    React.useEffect(() => {
        if (seconds > 0 && timerActive) {
            setTimeout(setSeconds, 100, seconds - 1);
        } else {
            setTimerActive(false);
        }
    }, [seconds, timerActive]);

    return (
        <div> Можно поиграть с таймером:
            {seconds ?
                <React.Fragment>
                    <div className="p-2"><span className="h4">{seconds}</span></div>
                    <Button onClick={() => setTimerActive(!timerActive)}>
                        {timerActive ? 'Стоп' : 'Старт'}
                    </Button>


                </React.Fragment>
                : <React.Fragment>
                    <div className="p-2"><span className="h4">{seconds}</span></div> <Button onClick={() => setSeconds(60)}>Обновить</Button>
                </React.Fragment>
            }
        </div>
    );
}

export default Timer;