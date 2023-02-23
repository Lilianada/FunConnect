import { AiOutlineClose } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
import Backdrop from "../Backdrop";


export function SubmissionStatus({ onClose }) {
    return (
      <Backdrop>
        <div className="subscribeWrap">
          <AiOutlineClose className="closeIcon" onClick={onClose} />
          <p className="subscribeText">
            You've already subscribed.
          </p>
        </div>
      </Backdrop>
    );
  }
  
  export function SubmissionLoader() {
    return (
      <Backdrop>
          <span className="preloadText">
            <Typewriter
              words={["Loading...", "Loading..."]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={200}
              deleteSpeed={180}
              delaySpeed={500}
              infinite={false}
            />
          </span>
      </Backdrop>
    );
  }
  