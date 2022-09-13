import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

export const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    const guardar = async (e) => {
        e.preventDefault()
        await axios.post(URI, {
            title: title,
            content: content
        })
        navigate('/')
    }

    return (
        <div>
            <h3>creador post</h3>
            <form onSubmit={guardar}>
                <div>
                    <label>titulo</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type='text'
                        className='form-control'

                    ></input>
                </div>
                <div>
                    <label>contenido</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        type='text'
                        className='form-control'

                    >

                    </textarea>
                </div>
                <button
                    onClick={() => { alert('Contenido guardado regrese a la pagina principal'); }}>
                    Guardar
                </button>
            </form>
        </div>
    )

}