import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField  from "@mui/material/TextField";
import { useEffect, useState } from "react";
import './blog.css'
const Blog = ({ post }) => {

  return (
    <>
        <Grid class="reading-page" container md={6}>
          <Grid style={{'display':'grid','placeItems':'center'}} md={8}>
          <p className="post-title">{`${selected_post?.title?selected_post.title : 'Untitled'}`}</p>
            <div class="text-container">
              {selected_post.text}
            </div>
          </Grid>
          <Button onClick={()=>postView()}>Exit</Button>
          <Grid>
            Comments
          </Grid>
          <Grid style={{'display':'flex', 'alignItems':'center', 'justifyContent':'center','margin-top':'100px'}} container className="comment-wrapper">
            <TextField md={6} className="comment-input" placeholder={'Comment ...'}>
            </TextField>
            <Button>
              Post
            </Button>
          </Grid>
        </Grid>
    </>
  );
};

export default Blog;
