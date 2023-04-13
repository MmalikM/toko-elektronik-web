import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router';
import { Provider } from 'react-redux';
import store from './store';



function App() {
  return (
    <div style={{backgroundColor:"#dde5b6"}}>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    </div>
  
  );
}

export default App;
