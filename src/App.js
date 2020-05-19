import React, {useState} from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({stateUrl : '', stateName : ''});
  const [friends, setFriends] = useState([]);
  // const [name, setName] = useState('');
  // const [friends, addFriend] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value}));
  }

  const addFriend = () => {
    const {stateUrl, stateName} = state;
    setFriends(friends => [...friends, {url: stateUrl, name: stateName}]);
    setState({stateUrl: '', stateName:''});
    console.log(state);
  }

  const friendsList = (
    friends.map((friend, i) => (
      <div key={i}>
        <img src={friend.url} />
        <span>{friend.name}</span>
      </div>
    ))
  )

  return (
    <div>
      <label>
        Photo URL:<input name='stateUrl' value={state.stateUrl} onChange={handleInput}/>
      </label>

      <label>
        Name:<input name='stateName' value={state.stateName} onChange={handleInput}/>
      </label>

      <button onClick={addFriend}>Add Friend</button>

      {friendsList}
    </div>
  );
}

export default App;
