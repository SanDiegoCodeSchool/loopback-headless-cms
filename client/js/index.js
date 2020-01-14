
import React, { useState, useEffect } from "react"
import ReactDom from "react-dom"
import axios from "axios"
import { Editor, EditorState } from 'draft-js';
import '../css/App.css'

//** COMPONENTS **//
// import WYSIWYG from './Components/WYSIWYG.js'

export default function Index() {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [imagePath, setImagePath] = useState("")
    const [editorState, setEditorState] = useState(EditorState.createEmpty())

    const editor = React.useRef(null);

    function focusEditor() {
        editor.current.focus();
    }

    React.useEffect(() => {
        focusEditor()
    }, []);

    let valueHandler = () => {
        axios.post("http://localhost:5000/api/blogs", {
            title: title,
            date: Date.now(),
            author: author,
            imagePath: imagePath,
            content: editorState
        })
            .then((response) => console.log(response))
    }

    const divStyle = {
        display: "grid",
        justifyContent: "center"
    };

    return (
        <div style={divStyle}>
            <label htmlFor="title">title</label>
            <input id="title" onChange={e => setTitle(e.target.value)}></input>
            <label htmlFor="author">author</label>
            <input id="author" onChange={e => setAuthor(e.target.value)}></input>
            <label htmlFor="imagePath">Image Path</label>
            <input id="imagePath" onChange={e => setImagePath(e.target.value)}></input>
            <div onClick={focusEditor}>
                <Editor
                    ref={editor}
                    editorState={editorState}
                    onChange={editorState  => setEditorState(editorState)}
                />
            </div>
            <button onClick={valueHandler}>Save</button>
        </div>
  
    )

}

ReactDom.render(<Index />, document.getElementById("root"))