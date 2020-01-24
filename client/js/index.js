
import React, { useState, useEffect } from "react"
import ReactDom from "react-dom"
import axios from "axios"
import '../css/App.css'

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function Index() {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [imagePath, setImagePath] = useState("")
    const [editorState, setEditorState] = useState(EditorState.createEmpty())

    let valueHandler = () => {
        axios.post("http://localhost:5000/api/blogs", {
            title: title,
            date: Date.now(),
            author: author,
            imagePath: imagePath,
            content: JSON.stringify(editorState)
        })
            .then((response) => console.log(`Response`,response)); // `\n\neditorstate.getCurrentContent ${JSON.stringify(convertToRaw(editorState.getCurrentContent()))}`))
            // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
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
            <div>
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={setEditorState}
            />
            </div>
            <button onClick={valueHandler}>Save</button>
            <label htmlFor="rawPreview">Raw unprocessed HTML string</label>
            <div id="rawPreview "> 
                {draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            </div>
            <label htmlFor="htmlPreview">HTML Preview</label>
            <div 
                id="htmlPreview" 
                dangerouslySetInnerHTML={{ __html:draftToHtml(convertToRaw(editorState.getCurrentContent( ))) }} 
            />
        </div>
    )
}

ReactDom.render(<Index />, document.getElementById("root"))
