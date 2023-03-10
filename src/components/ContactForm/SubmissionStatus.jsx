import { AiOutlineClose } from "react-icons/ai";
import Backdrop from "../Backdrop";


export function SubmissionStatus({  closeModal, status }) {
    return (
        <Backdrop>
          <div className="submissionWrap">
            <AiOutlineClose className="closeIcon" onClick={closeModal} />
            <p className="submissionText">
              {status}
            </p>
          </div>
        </Backdrop>
    );
}