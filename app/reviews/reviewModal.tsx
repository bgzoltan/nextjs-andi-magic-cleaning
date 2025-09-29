import { ReviewI } from "../db/schema";
import { useReview } from "../globalStates/selectedReview";
import style from "./reviewModal.module.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface ReviewModalI {
  handleClick: () => void;
  review: ReviewI;
}

export default function ReviewModal({ review, handleClick }: ReviewModalI) {
  const { setSelectedReview } = useReview();

  const handleClose = () => {
    handleClick();
    setSelectedReview(null);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.modalContainer}>
          <div className={style.header}>
            <p className={style.title}>{review.client}</p>
            <button onClick={handleClose} className={style.icon}>
              <IoIosCloseCircleOutline size={24} />
            </button>
          </div>

          <div className={style.detailsContainer}>
            <div>{review.description}</div>
          </div>
        </div>
      </div>
    </>
  );
}
function useReviw(): { setSelectedReview: any } {
  throw new Error("Function not implemented.");
}
