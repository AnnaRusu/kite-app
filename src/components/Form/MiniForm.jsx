import "../../assets/styles/MiniForm.scss";

export default function MiniForm(props) {
  const {
    inputValue1,
    inputValue2,
    label1,
    label2,
    buttonText,
    classNameButton,
    setInputValue1,
    setInputValue2,
    handleSubmit
  } = props;

  return (
    <div className="container-mini-form">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-field">
          <label>{label1}</label>
          <input
            value={inputValue1}
            type="text"
            onChange={(e) => setInputValue1(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label>{label2}</label>
          <input
            value={inputValue2}
            type="text"
            onChange={(e) => setInputValue2(e.target.value)}
          />
        </div>

        <button type="submit" className={classNameButton}>
          {buttonText}
        </button>
      </form>
    </div>
  );
}