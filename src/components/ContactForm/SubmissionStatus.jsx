import { AiOutlineClose } from "react-icons/ai";
import Backdrop from "../Backdrop";


export function SubmissionStatus({ status, onClose }) {
    return (
      <Backdrop>
        <div className="submissionWrap">
          <AiOutlineClose className="closeIcon" onClick={onClose} />
          <p className="submissionText">
            {status}
          </p>
        </div>
      </Backdrop>
    );
}