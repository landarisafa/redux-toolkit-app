import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Test from './redux/features/parent/fils/Test';

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Profile />
        <Login />
        <Test />
      </Provider>
    </div>
  );
}
