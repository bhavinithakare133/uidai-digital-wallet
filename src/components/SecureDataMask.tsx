import { useEffect, useState } from "react";

interface Props {
  sensitiveData: string;
}

const SecureDataMask = ({ sensitiveData }: Props) => {
  const [revealed, setRevealed] = useState(false);

  // mask function
  const maskData = (value: string) => {
    return `XXXX-XXXX-${value.slice(-4)}`;
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (revealed) {
      timer = setTimeout(() => {
        setRevealed(false);
      }, 10000);
    }

    return () => clearTimeout(timer);
  }, [revealed]);

  const handleReveal = () => {
    setRevealed(true);
  };

  return (
    <div>
                        <p
        aria-live="polite"
        aria-atomic="true"
        className="masked-text"
        >     {revealed
          ? sensitiveData
          : maskData(sensitiveData)}
      </p>

        <button
        onClick={handleReveal}
        aria-label={
            revealed
            ? "Sensitive data visible"
            : "Reveal sensitive data"
        }
        >  
              {revealed ? "Visible" : "Tap to Reveal"}
      </button>
    </div>
  );
};

export default SecureDataMask;