import React from 'react'

const CHAR_LIMIT = 100;

function CreateNote({ textHandler, saveHandler, inputText }) {
    const charLeft = CHAR_LIMIT - inputText.length;
    return (
        <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
            <textarea
                cols="10"
                rows="5"
                placeholder="Type...."
                maxLength="{{ CHAR_LIMIT }}"
                value={inputText}
                onChange={textHandler}
            ></textarea>
            <div className="note__footer">
                <span className="label">{charLeft} characters left</span>
                <button className="note__save" onClick={saveHandler}>Save</button>
            </div>
        </div>
    )
}

export default CreateNote