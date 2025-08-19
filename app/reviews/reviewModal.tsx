import { ReviewI } from "../db/schema";
import style from "./reviewModal.module.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface ReviewModalI {
  handleClick: () => void;
  review: ReviewI;
}

export default function ReviewModal({ review, handleClick }: ReviewModalI) {
  return (
    <>
      <div className={style.container}>
        <div className={style.modalContainer}>
          <div className={style.header}>
            <p className={style.title}>{review.client}</p>
            <button onClick={handleClick} className={style.icon}>
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
