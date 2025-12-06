import { useState, useEffect, useContext } from "react";
import avatar from "../../images/avatar.png";
import Popup from "./components/Popup/Popup.jsx";
import EditProfile from "./components/EditProfile/EditProfile.jsx";
import NewCard from "./components/NewCard/NewCard.jsx";
import Card from "./components/Card/Card.jsx";
import ImagePopup from "./components/ImagePopup/ImagePopup.jsx";
import { api } from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";
import EditAvatar from "./components/EditAvatar/EditAvatar.jsx";

export default function Main({
  onOpenPopup,
  onClosePopup,
  popup,
  onCardLike,
  onDeleteCard,
  onImageClick,
  cards,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  // const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "New card", children: <NewCard /> };

  // const [cards, setCards] = useState([]);

  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };

  const editAvatarPopup = {
    title: "Alterar Avatar",
    children: <EditAvatar />,
  };

  // useEffect(() => {
  //   api
  //     .getInitialCards()
  //     .then((cardData) => {
  //       setCards(cardData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // async function handleCardLike(card) {
  //   const isLiked = card.isLiked;

  //   try {
  //     let newCard;
  //     if (isLiked) {
  //       console.log(card);
  //       newCard = await api.likeCardOff(card._id);
  //     } else {
  //       newCard = await api.likeCardOn(card._id);
  //     }

  //     setCards((state) =>
  //       state.map((currentCard) =>
  //         currentCard._id === card._id ? newCard : currentCard
  //       )
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  useEffect(() => {
    function handleEscClose(event) {
      if (event.key === "Escape") {
        onClosePopup();
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

  // function handleImageClick(card) {
  //   const imagePopup = {
  //     title: null, // ImagePopup não tem título
  //     children: <ImagePopup card={card} onClose={onClosePopup} />,
  //   };
  //   onOpenPopup(imagePopup);
  // }

  // async function handleDeleteClick(cardId) {
  //   try {
  //     await api.deleteCard(cardId);

  //     setCards((currentCards) =>
  //       currentCards.filter((currentCard) => cardId !== cardId)
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <>
      <section className="profile">
        <div className="profile__image-container">
          <img
            src={currentUser.avatar}
            alt="Profile Image"
            className="profile__image"
          />
          <img
            src="../src/images/Vector 2.png"
            alt="Ícone"
            className="profile__image-icon"
            onClick={() => onOpenPopup(editAvatarPopup)}
          />
        </div>
        <div className="profile__info">
          <div className="profile__name-button">
            <h2 className="profile__name">{currentUser.name}</h2>
            <button
              aria-label="Edit profile"
              className="profile__edit-button"
              type="button"
              onClick={() => {
                onOpenPopup(editProfilePopup);
              }}
            ></button>
          </div>
          <h1 className="profile__job">{currentUser.about}</h1>
        </div>
        <button
          aria-label="Add card"
          className="profile__add-image-button"
          type="button"
          onClick={() => onOpenPopup(newCardPopup)}
        ></button>
      </section>
      <ul className="cards__list">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardLike={onCardLike}
            onDeleteCard={onDeleteCard}
            onImageClick={onImageClick}
          />
        ))}
      </ul>

      {popup.isOpen && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </>
  );
}
