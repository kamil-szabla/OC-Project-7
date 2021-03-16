export default {
  async getPosts(subreddit) {
    const url = `https://api.reddit.com/r/${subreddit}/about.json`;
    const response = await fetch(url, {
      headers: {
        accept: 'application/json'
      }
    });
    const data = await response.json(); 
    if(response.ok) {
      return data.data;

    }
     
    const error = new Error(data.message || 'Failed to get post!');
    error.response = data; 
    throw error
  },
}