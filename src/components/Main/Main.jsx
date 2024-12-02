import Card from '../post/Card/card'
import { posts } from '../../posts.jsx'
import Tags from '../Tags/Tags'
import { useState } from 'react'

function Main() {

    const [newPosts, setNewPosts] = useState(posts)
    const [newTitle, setTitle] = useState('Naruto')

    function addPost(e) {
        e.preventDefault()

        // const newTitle = newTitle.trim()



        const newPost = {
            id: Date.now(),
            title: newTitle,
            image: undefined /* compila questo campo */,
            content: '',
            tags: [],
            published: true,
        }



        if (newTitle === '') return



        setNewPosts([...newPosts, newPost])
        setTitle('')

        console.log({ newPost })
    }

    const tags = []

    posts.forEach(post => {
        const postTags = post.tags
        postTags.forEach((tag) => {
            !tags.includes(tag) && tags.push(tag)

        });
    });

    return (
        <>
            <main>
                <div className='container'>
                    <Tags tags={tags} />
                    <form onSubmit={addPost} className='form' action="submit">
                        <input className='input_field' type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Titolo del Post' value={newTitle} />
                        <input className='input_btn' type="submit" value='Crea nuovo post' />
                    </form>
                    <div className="row">

                        {newPosts.map((post) => (
                            <div key={post.id} className="col-6">
                                {post.published === true && <Card title={post.title} tags={post.tags} content={post.content} image={post.image} />}
                            </div>
                        ))}
                    </div>


                </div>


            </main >
        </>
    )
}

export default Main