import { useState } from "react";
import { Post } from "../../models/Post/Post";

export function PostForm(props: { onSubmitForm: (post: Post) => void, onClose: () => void }) {

    const [title, setTitle] = useState('');
    const [thought, setThought] = useState('');

    function handleFormSubmit(e: any) {
        e.preventDefault();

        const post = {
            title, thought
        };
        
        props.onSubmitForm(post);
        props.onClose();
    } 

    return (
        <div>
            <button onClick={() => props.onClose()}>X</button>
            <form onSubmit={handleFormSubmit}>
                <label>Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                <label>Thought</label>
                <textarea value={thought} onChange={e => setThought(e.target.value)}></textarea>
                <button>Add Post</button>
            </form>
        </div>
    )
}