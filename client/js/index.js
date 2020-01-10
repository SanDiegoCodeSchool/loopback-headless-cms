
import React, { useState, useEffect } from "react"
import ReactDom from "react-dom"

export default function Index() {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [imagePath, setImagePath] = useState("")
    const [content, setContent] = useState("")

    let valueHandler = () => {
        const testObject = {
            title: title, 
            author: author,
            imagePath: imagePath,
            content: content
        }
        console.log(testObject)
    }

    return(
        <div>
            <label htmlFor="title">title</label>
           <input id="title" onChange={e => setTitle(e.target.value)}></input>
           <label htmlFor="author">author</label>
           <input id="author" onChange={e => setAuthor(e.target.value)}></input>
           <label htmlFor="imagePath">Image Path</label>
           <input id="imagePath" onChange={e => setImagePath(e.target.value)}></input>
           <label htmlFor="content">content</label>
           <input id="content" onChange={e => setContent(e.target.value)}></input>
           <button onClick={valueHandler}>Save</button>
        </div>

    )

}

ReactDom.render(<Index />, document.getElementById("root"))