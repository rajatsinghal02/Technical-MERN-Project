document.addEventListener('DOMContentLoaded', () => {
    const Container = document.getElementById('post-container');
    const loader = document.getElementById('loader');
        
    async function fetchPosts() {
        loader.classList.remove('hidden');
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const posts = await response.json();

            if (posts.length > 0) {
                posts.forEach(post => {
                    const div = document.createElement('div');
                    div.classList.add('post');
                    div.innerHTML = `<h1>${post.id}</h1><h3>${post.title}</h3><p>${post.body}</p>`;
                    Container.appendChild(postElement);
                });
            } else {
                window.removeEventListener('scroll', handleScroll);
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            loader.classList.add('hidden');
        }
    }


    function handleScroll() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
            fetchPosts();
        }
    }

    fetchPosts();

    window.addEventListener('scroll', handleScroll);
});
