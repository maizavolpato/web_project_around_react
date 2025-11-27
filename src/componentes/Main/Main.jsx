import { useState, useEffect } from "react";
import avatar from "../../images/avatar.png";
import Popup from "./components/Popup/Popup.jsx";
import EditProfile from "./components/EditProfile/EditProfile.jsx";
import NewCard from "./components/NewCard/NewCard.jsx";
import Card from "./components/Card/Card.jsx";
import ImagePopup from "./components/ImagePopup/ImagePopup.jsx";

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "New card", children: <NewCard /> };

  const [cards, setCards] = useState([
    {
      isLiked: false,
      _id: "5d1f0611d321eb4bdcd707dd",
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:10:57.741Z",
    },
    {
      isLiked: false,
      _id: "5d1f064ed321eb4bdcd707de",
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:11:58.324Z",
    },
  ]);

  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };

  useEffect(() => {
    function handleEscClose(event) {
      if (event.key === "Escape") {
        handleClosePopup();
      }
    }
    // Adiciona o event listener apenas se há um popup aberto
    if (popup) {
      document.addEventListener("keydown", handleEscClose);
    }
    // remove o event listener quando o componente desmonta
    // ou quando o popup muda
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [popup]);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleImageClick(card) {
    const imagePopup = {
      title: null, // ImagePopup não tem título
      children: <ImagePopup card={card} onClose={handleClosePopup} />,
    };
    setPopup(imagePopup);
  }

  function handleDeleteCard(cardId) {
    setCards((currentCards) =>
      currentCards.filter((card) => card._id !== cardId)
    );
  }

  return (
    <>
      <section className="profile">
        <div className="profile__image-container">
          <img src={avatar} alt="Profile Image" className="profile__image" />
          <img
            src="../src/images/Vector 2.png"
            alt="Ícone"
            className="profile__image-icon"
          />
        </div>
        <div className="profile__info">
          <div className="profile__name-button">
            <h2 className="profile__name">Jacques Cousteau</h2>
            <button
              aria-label="Edit profile"
              className="profile__edit-button"
              type="button"
              onClick={() => {
                handleOpenPopup(editProfilePopup);
              }}
            ></button>
          </div>
          <h1 className="profile__job">Explorador</h1>
        </div>
        <button
          aria-label="Add card"
          className="profile__add-image-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>
      <ul className="cards__list">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onImageClick={handleImageClick}
            onDeleteCard={handleDeleteCard}
          />
        ))}
      </ul>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </>
  );
}
