export default function EditProfile() {
  return (
    <form id="form" className="popup__profile-edit" noValidate>
      <fieldset className="popup__fieldset">
        <input
          type="text"
          className="popup__input popup__profile-input"
          id="name"
          name="name"
          placeholder="Name"
          required
          minLength="2"
          maxLength="40"
        />
        <span id="name-error" className="popup__input-error-message">
          Error
        </span>

        <input
          type="text"
          className="popup__input popup__profile-input"
          id="detail"
          name="detail"
          placeholder="Detail"
          required
          minLength="2"
          maxLength="40"
        />
        <span id="detail-error" className="popup__input-error-message">
          Error
        </span>
        <button className="popup__button-submit" type="submit">
          Salvar
        </button>
      </fieldset>
    </form>
  );
}
