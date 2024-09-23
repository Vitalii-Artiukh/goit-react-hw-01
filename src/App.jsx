import Profile from './components/Profile/Profile';
import './components/App.css';

// const example = [
//   {
//     id: 222,
//     name: 'Arkadii',
//   },
//   {
//     id: 333,
//     name: 'Vit Art',
//   },
//   {
//     id: 444,
//     name: 'Aleksandr',
//   },
// ];

// const userData = {
//   username: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

const App = props => {
  return (
    <div>
      <h1 className="title">Hello world!</h1>

      <Profile
        username="Jacques Gluke"
        tag="@jgluke"
        location="Ocho Rios, Jamaica"
        avatar="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
        stats="followers: 5603
    views: 4827
   likes: 1308"
      />
    </div>
  );
};

export default App;
