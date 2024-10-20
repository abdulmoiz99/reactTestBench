import { useState } from "react"

export default function Courses() {
    const [courseList, setCourseList] = useState([
        { id: 1, name: 'WAA' },
        { id: 2, name: 'WAP' },
        { id: 3, name: 'EA' },
    ])

    const add = () => {
        setCourseList([...courseList, { id: courseList.length + 1, name: "New Course" }])
    }

    return (
        <>
            {courseList.map(c => <input value={c.name} />)}
            <button onClick={add}>Add new course</button>
        </>
    )
}