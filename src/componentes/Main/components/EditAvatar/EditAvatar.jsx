export default function EditAvatar() {
  return (
    <form id="form" class="popup__update-avatar" novalidate>
      <fieldset class="popup__fieldset">
        <input
          type="url"
          class="popup__input popup__avatar-input"
          id="avatar"
          name="avatar"
          placeholder="Link de Imagem"
          required
        />
        <button class="popup__button-submit" type="submit">
          Salvar
        </button>
      </fieldset>
    </form>
  );
}
