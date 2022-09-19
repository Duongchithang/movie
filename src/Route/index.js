import Home from '../page/Home/home'
import Movie from '../page/Movie/movie'
import TV from '../page/TV/index'
let publicRouter = [
    {   display : 'Home',
        path : '/',
        component : Home
    },
    {   
        display : 'Movie',
        path : '/movie',
        component : Movie
    },
    {   
        display  : 'TV Series',
        path : '/tv',
        component : TV

    }
]
export default publicRouter;