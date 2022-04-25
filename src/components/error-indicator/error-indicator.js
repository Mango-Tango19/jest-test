const ErrorIndicator = ({message}) => {
  return (
    <div className='alert alert-danger' role='alert'>
    { message ? message : 'Something went wrong, please connect the support' }
    </div>
  );
};


export default ErrorIndicator