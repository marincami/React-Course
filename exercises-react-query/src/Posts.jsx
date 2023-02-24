import { useState } from "react";
import { useQuery } from "react-query";

const Posts = () => {
	const [selectedPost, setSelectedPost] = useState(null);

	const fetchPosts = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0');
		return response.json();
	}

	const { data, isError, error, isLoading } = useQuery("posts", fetchPosts());
	if(isLoading) return <h3>Loading...</h3>;
	if(isError) return (
		<div>
			<h3>Oops! something went wrong</h3>
			<p>{error.toString()}</p>
		</div>
	)

	return (
		<ul>
			{data.map((post) => {
				<li
					key={post.id}
					className="post-title"
					onClick={() => setSelectedPost(post)}
				>
					{post.title}
				</li>
			})}
		</ul>
	)
}

export default Posts;