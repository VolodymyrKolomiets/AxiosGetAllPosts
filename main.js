const wiewPosts = async () => {
    try {
    const response = await axios.get('http://localhost:8080/posts/getAll');
    const posts = response.data.posts;
    console.log(posts);
    const postsContainer = document.querySelector('#posts');
    postsContainer.innerHTML = '';
    const postElements = posts.map(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
      return postElement;
    });
    postsContainer.append(...postElements);
  } catch (error) {
    console.log(error);
  }
}

const button = document.querySelector('#button');
button.addEventListener('click', wiewPosts);
