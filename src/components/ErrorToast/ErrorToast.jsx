import "../../assets/styles/ErrorToast.scss";

function ErrorModal({message}) {
  return (
    <div className="toast">
      <p>{message}</p>
    </div>

  );
}

export default ErrorModal;