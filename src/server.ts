import App from "./app";
import 'dotenv/config';
import PostRoutes from "./routes/post.routes";

try {
  const app = new App([new PostRoutes()]);
  app.start();
} catch (error) {
  console.error(error);
}
