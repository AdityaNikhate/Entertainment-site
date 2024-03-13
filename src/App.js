import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import {store} from './store/store'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SubBody from "./components/SubBody";
import ShowVideo from "./components/ShowVideo";
import LatestMovies from "./components/LatestMovies";
import MoviePage from "./components/MoviePage";
import TopRatedMovies from "./components/TopRatedMovies";

const route = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<SubBody/>
      },{
        path:'/showvideo',
        element:<ShowVideo/>
      },{
        path:'/latestmovies',
        element:<LatestMovies/>
      },{
        path:'/moviepage',
        element:<MoviePage/>
      },{
        path:'/topratedmovie',
        element:<TopRatedMovies/>
      }
    ]
  }
])

function App() {
  return (
    <div className="box-border overflow-x-hidden">
      <Provider store={store}>
      <Header/>
      <RouterProvider router={route} />
      </Provider>
    </div>
  );
}

export default App;
