const ErrorMessage = ( props ) => {

  return (
    <>
    {props.items.length === 0 && <h3>I am Still Hungry</h3>}
  </>
  );
};

export default ErrorMessage;