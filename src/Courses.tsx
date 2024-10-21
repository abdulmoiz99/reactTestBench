import { useState } from "react";

export default function Courses() {
    const [courseList, setCourseList] = useState([
        { id: 1, name: 'WAA' },
        { id: 2, name: 'EA' },
        { id: 3, name: 'WAP' }
    ])

    const add = () => {
        setCourseList([...courseList, { id: courseList.length + 1, name: 'Some Course' }])
    }

    return (
        <>
            {courseList.map((course) => <input value={course.name} key={course.id} />)}
            <button onClick={add} >Add</button>
        </>
    )
}