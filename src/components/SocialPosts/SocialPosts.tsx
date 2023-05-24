import { useState } from "react";
import { Post } from "../../models/Post/Post";
import { PostInList } from "../PostInList/PostInList";
import { PostForm } from "../PostForm/PostForm";
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root');

export function SocialPosts () {
    const [modalIsOpen, setIsOpen] = useState(false);
    
    const [ posts, setPosts ] = useState<Post[]>([ {
        title : 'Friends Not Food',
        thought: 'Errors are our friends'
    }])

    

    function closeModal() {
        setIsOpen(false);
      }

      

    return (
        <div>
            <h1>My Thoughts</h1>
            <button onClick={() => setIsOpen(true)}>New Thought</button>
            <div>
                {                  
                  posts.map(post => <PostInList post={post}></PostInList>)
                }
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">  
        
                <PostForm onClose={() => setIsOpen(false)} onSubmitForm={(newPost: Post) => setPosts([...posts, newPost])}></PostForm>
            </Modal>
        </div>
    )
}