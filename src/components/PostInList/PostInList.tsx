import { Post } from "../../models/Post/Post";

export function PostInList(props: { post: Post }) {

    return (
        <div>
            <h3>{props.post.title}</h3>

            <p>{props.post.thought}</p>
        </div>
    )
}