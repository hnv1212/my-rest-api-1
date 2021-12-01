import { Service } from "typedi";
import express, { NextFunction } from "express";
import PostService from "../services/post.service";
import HttpException from "../utils/exceptions/http.exception";

@Service()
class PostController {
  constructor(private readonly postService: PostService) {}

  async getAllPosts(_req: express.Request, res: express.Response) {
    const result = await this.postService.getAllPosts();
    return res.json(result);
  }

  async createPost(req: express.Request, res: express.Response, next: NextFunction) {
    if (Object.keys(req.body).length === 0) {
        return next(new HttpException(401, 'You are not admin'))
        
    } else {
      const post = await this.postService.createPost(req.body);
      return res.json(post);
    }
  }
}

export default PostController;
