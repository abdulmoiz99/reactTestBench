import { memo } from "react";

type PropsType = {
    onChange: (text: string) => void;
}

function Search(props: PropsType) {
    const { onChange } = props;
    console.log("Search has been render")
    return (
        <>

            <input
                type="text"
                placeholder="Search Users...."
                onChange={(e) => onChange(e.target.value)}
            />
        </>
    )
}
export default memo(Search);