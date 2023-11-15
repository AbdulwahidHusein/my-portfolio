import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField  from "@mui/material/TextField";
import { useEffect, useState } from "react";
import './blog.css'
const Blog = ({ posts }) => {
    const [selected_post, setSelected_post] = useState('');
    const postView = (post)=>{
        setSelected_post(post);
    }

  return (
    <>
    {!selected_post && (<Grid className="post-container" container spacing={2}>
      {posts.map((post) => (
        <Grid key={post.id} xs={12} md={6}>
          <Grid className="post-and-view">
            <Grid className="post-container-compressed">
            <p className="post-title">{`${post?.title?post.title : 'Untitled'}`}</p>
              <p className="post-text">{`${post.text.length < 100 ? post.text : post.text.slice(0, 99)+'...'}`}</p>
              <Button className="view-button" onClick={()=>postView(post)}>
              Read more...
            </Button>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>)
    }
    {
      selected_post && (
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
      )
    }
    </>
  );
};

export default Blog;
