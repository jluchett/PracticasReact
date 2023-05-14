import { useState } from "react";

export function TwitterFollowCard({ name, username, isfollowing }) {
  const [isFollow, setIsFollow] = useState(isfollowing);

  const text = isFollow ? "Siguiendo" : "Seguir";
  const btnClassNane = isFollow
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

    const handleClick = () => {
        setIsFollow(!isFollow)
    }
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${username}`}
          alt="Jorge Github"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{username}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={btnClassNane}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
