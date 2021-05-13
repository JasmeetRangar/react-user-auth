import { useHistory } from 'react-router-dom'

export default function Logout(props) {
  const history = useHistory()

  const handleLogout = () => {
    props.handleLogout();
    history.push('/login');
  }
  return(
    <button onClick={handleLogout}>Logout</button>
  )
}