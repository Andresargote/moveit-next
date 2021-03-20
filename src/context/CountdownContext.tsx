import {createContext, ReactNode, useContext, useState, useEffect} from "react";
import {ChallengesContext} from "./ChallengesContext";

interface countdownContextData {
    minutes: number,
    seconds: number,
    hasFinished: boolean,
    isActive: boolean,
    startCountdown: () => void,
    resetCountdown: () => void,
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as countdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({children}: CountdownProviderProps) {
    const {startNewChallenges} = useContext(ChallengesContext);
    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHashFinished] = useState(false);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const startCountdown = () => {
        setIsActive(true);
    }
    const resetCountdown = () => {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
        setHashFinished(false);
    }
    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if(isActive && time === 0){
            setHashFinished(true);
            setIsActive(false);
            startNewChallenges();
        }
    }, [isActive, time])
    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    );
}
