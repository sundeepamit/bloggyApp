// define schema
import mongoose from "mongoose";
const { Schema } = mongoose;
const blogSchema = new Schema({
  title: String,
  content: String,
  imageUrl: String,
  authorName: String,
  authorUrl: String,
  authorId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// creating a model
// export const BlogPost = mongoose.model("BlogPost", blogSchema);
/**
 * The mongoose.models.User || mongoose.model('User', UserSchema) pattern prevents model recompilation errors during hot reloading in development
 */
export const BlogPost =
  mongoose.models.BlogPost || mongoose.model("BlogPost", blogSchema);
