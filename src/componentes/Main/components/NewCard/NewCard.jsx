export default function NewCard() {
  return (
    <form id="form" className="popup__elements-edit" noValidate>
      <fieldset className="popup__fieldset">
        <input
          type="text"
          className="popup__input popup__elements-input"
          id="title"
          name="title"
          placeholder="Título"
          minLength="2"
          maxLength="30"
          required
        />
        <span id="title-error" className="popup__input-error-message">
          Error
        </span>
        <input
          type="url"
          className="popup__input popup__elements-input"
          id="image"
          name="image"
          placeholder="Link de Imagem"
          required
        />
        <span id="image-error" className="popup__input-error-message">
          Error
        </span>
        <button className="popup__button-submit" type="submit">
          Salvar
        </button>
      </fieldset>
    </form>
  );
}
