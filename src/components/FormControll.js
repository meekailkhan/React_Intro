import React, { useState } from 'react'

function FormControll() {
    const [username, nameUpdater] = useState('');
    const [comment, commentUpdater] = useState('');
    const [skill, skillSelector] = useState('react');

    function userNameHandler(e) {
        nameUpdater(e.target.value)
    }
    function commentHandler(e) {
        commentUpdater(e.target.value)
    }
    function skillChangeHandler(e) {
        skillSelector(e.target.value)
    }
    function handleSubmit(e) {
        alert(`username is ${username} and msg is ${comment} and user know ${skill}`)
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>username</label>
                <input value={username} onChange={userNameHandler} />
            </div>
            <div>
                <label>comment</label>
                <input value={comment} onChange={commentHandler} />
            </div>
            <div>
                <select value={skill} onChange={skillChangeHandler}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default FormControll
