const Welcomemessage = ({onGetPostsCLick}) => {
  return (
    <center>
  <h1 className="welcome-message"> There Are no Posts </h1>
  <button type="button" onClick={onGetPostsCLick}
  className="btn btn-primary">Get Post From Server</button>
  </center>
  );
}
    

export default Welcomemessage;