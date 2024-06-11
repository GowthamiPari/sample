import { useNavigate } from 'react-router-dom'
const ErrorFallback = () => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  
    return (
      <div style={{textAlign: 'center',justifyContent: 'center',marginTop: '100px',alignItems:"flex-end"}}>
        <h2>Oops!!!</h2>
        <h2>Something went wrong</h2> 
        <div>
        <button type='button' onClick={() => handleClick()}>  Go back </button>
        </div>
        </div>
    );
  }
  export default ErrorFallback