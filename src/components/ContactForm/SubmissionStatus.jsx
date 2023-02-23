import { AiOutlineClose } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
import Backdrop from "../Backdrop";


export function SubmissionStatus({ status, onClose }) {
    return (
      <Backdrop>
        <div className="submissionWrap">
          <AiOutlineClose className="closeIcon" onClick={onClose} />
          <p className="submissionText">
            {status}
            {/* {status === "error" && "Submission failed. There was an error, please try again."} */}
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
  