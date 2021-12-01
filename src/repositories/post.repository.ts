import { Service } from "typedi";
import { CreatePostDto } from "../dtos/create.post.dto";
import PostModel, { PostDocument } from "../models/post.model";

@Service()
class PostRepository {
  private post = PostModel;

  public async getAllPosts(): Promise<PostDocument[]> {
    return this.post.find({});
  }

  public async getPost(id: string): Promise<PostDocument> {
    return this.post.findById({ _id: id });
  }

  public async creatPost(postData: CreatePostDto) {
    // const post = new this.post(postData)
    // return post.save()

    const post = await this.post.create(postData);
    return post;
  }

  public async updatePost(id: string, postData: CreatePostDto) {
    return this.post.findByIdAndUpdate(id, postData);
  }

  public async deletePost(id: string) {
    return this.post.findByIdAndRemove(id);
  }
}

export default PostRepository;
