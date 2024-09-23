import Profile from './components/Profile/Profile';
import './components/App.css';
import userData from './components/Profile/userData.json';

const App = () => {
  return (
    <div>
      <h1 className="title">Hello world!</h1>

      <Profile
        username={userData.username}
        tag={'@' + userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
};

export default App;
