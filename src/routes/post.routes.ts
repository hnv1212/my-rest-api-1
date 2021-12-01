import { Router } from 'express'
import Container from 'typedi';
import PostController from '../controllers/post.controller';
import testMiddleware from '../middlewares/test.middleware';

class PostRoutes {
    public router = Router() 
    
    constructor() {
        this.configureRoute()
    }

    public configureRoute() {
        const postController = Container.get(PostController)

        this.router.get('/posts', testMiddleware, (req, res) => postController.getAllPosts(req, res))
        this.router.post('/posts', (req, res, next) => postController.createPost(req, res, next))

        // app.route('/posts').get((req: express.Request, res: express.Response) => postController.getAllPosts(req, res))
    }
}

export default PostRoutes