import { Service } from "typedi";
import { CreatePostDto } from "../dtos/create.post.dto";
import { PostDocument } from "../models/post.model";
import PostRepository from "../repositories/post.repository";

@Service()
class PostService {
    constructor(private readonly postRepo: PostRepository) {

    }

    async getAllPosts(): Promise<PostDocument[]> {
        return this.postRepo.getAllPosts()
    }

    async getPost(id: string) {
        return this.postRepo.getPost(id)
    }

    async createPost(postData: CreatePostDto) {
        return this.postRepo.creatPost(postData)
    }
}

export default PostService