async function getAllPosts() {
    try {
      const posts = await axios.get('https://proyecto-mongoose-socia-media-huvkfdv9t-volodymyrkolomiets.vercel.app/posts/getAll');
      console.log(posts.data);
    } catch (error) {
      console.log(error);
    }
  }
  getAllPosts()