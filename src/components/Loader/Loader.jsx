import { useEffect, useState, useMemo } from "react";
import "./Loader.css";

const Loader = ({ onDone }) => {
    const fullText = "NexGen";
    const [count, setCount] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    const tokens = useMemo(() => fullText.split(""), []);

    useEffect(() => {
        if (count < tokens.length) {
            const timer = setTimeout(() => setCount((c) => c + 1), 100);
            return () => clearTimeout(timer);
        }
    }, [count, tokens.length]);

    useEffect(() => {
        if (count === tokens.length) {
            const hold = setTimeout(() => {
                setFadeOut(true);
                setTimeout(() => {
                    console.log("Loader");
                    onDone?.();
                }, 500);
            }, 600);
            return () => clearTimeout(hold);
        }
    }, [count, tokens.length, onDone]);

    return (
        <div className={`loader - screen ${fadeOut ? "fade-out" : ""}`}>
            <div className="loader-logo">
                <h1 className="typing-text">
                    {tokens.slice(0, count).map((ch, idx) => (
                        <span key={idx} className="char">{ch}</span>
                    ))}
                    {count < tokens.length && <span className="caret" />}
                </h1>
                <p className="subtext">PLEASE WAIT</p>
            </div>
        </div >
    );
};

export default Loader;