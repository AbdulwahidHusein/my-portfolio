
<Button onClick={()=>postView()}>Exit</Button>
function blogView(props){
    return <>
    <Grid class="reading-page" container md={6}>
          <Grid style={{'display':'grid','placeItems':'center'}} md={8}>
          <p className="post-title">{`${props.selected_post?.title?props.selected_post.title : 'Untitled'}`}</p>
            <div class="text-container">
              {props.selected_post.text}
            </div>
          </Grid>
        
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
}

export default blogView;