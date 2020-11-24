import PostList from './PostList.js'
import './App.css';

let post1 = {
  id: 1,
  message: 'First post!',
  username: 'ds.danielh',
  created_at: '12/11/2020 12:31:32'
}

let post2 = {
  id: 2,
  message: 'Second post!',
  username: 'ds.danielh',
  created_at: '13/11/2020 12:31:32'
}

let posts = [post1, post2]

function App() {
  return (
    <div className="App">
      <PostList posts={posts} />
    </div>
  );
}

export default App;
