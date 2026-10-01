import { useState } from "react";
import styles from "./HeartIcon.module.css";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";

function HeartIconComp({ isWishlistItem = false }) {
  const [isWishlist, setIsWishlistItem] = useState(isWishlistItem);
  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlistItem(!isWishlist);
  };

    const heartIconClassName = isWishlist
      ? `${styles.heartIcon} ${styles.heartIconSolid}`
      : styles.heartIcon;

  return (
    <>
      {isWishlist ? (
        <HeartIconSolid
          className={heartIconClassName}
          onClick={handleWishlistClick}
        />
      ) : (
        <HeartIcon
          className={heartIconClassName}
          onClick={handleWishlistClick}
        />
      )}
    </>
  );
}

export default HeartIconComp;
