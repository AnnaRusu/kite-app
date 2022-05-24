export default function Form(props) {
  const {
    inputUsername,
    inputPassword,
    setInputUsername,
    setInputPassword,
    buttonText,
    classNameButton,
    handleSubmit,
  } = props;
  
  const usernameLabel = "USERNAME";
  const passwordLabel = "PASSWORD";

  return (
    <div className="container-form">

      <form onSubmit={handleSubmit} className="form">
        <div className="form-field">
          <label>{usernameLabel}</label>
          <input
            value={inputUsername}
            type="text"
            onChange={(e) => setInputUsername(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label>{passwordLabel}</label>
          <input
            value={inputPassword}
            type="password"
            onChange={(e) => setInputPassword(e.target.value)}
          />
        </div>

        <button type="submit" className={classNameButton}>
          {buttonText}
        </button>
      </form>
    </div>
  );
}
