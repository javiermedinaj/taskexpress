import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

export const EditBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    //acutalizar
    const update = async (e) => {
        e.preventDefault();
        await axios.put(URI + id, {
            title: title,
            content: content
        });
        navigate('/');
    };
    useEffect(() => {
        getBlogById();
    }, []);

    const getBlogById = async () => {
        const res = await axios.get(URI + id);
        setTitle(res.data.title);
        setContent(res.data.content);
    };

    return (
        <div>
            <h2>edit</h2>
            <form onSubmit={update}>
                <div>
                    <label>titulo</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control" />
                </div>
                <div>
                    <label>contenido</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        type="text"
                        className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">editar</button>
            </form>
        </div>
    );
}



