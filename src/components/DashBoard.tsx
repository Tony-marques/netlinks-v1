import {styled} from "styled-components"
import {useEffect, useState} from "react";

interface IPost {
    id: number;
    title: string;
    content: string;
}

const DashBoard = () => {
    const [posts, setPosts] = useState<IPost[] | null>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://localhost:8000/posts', {
                credentials: "include"
            })
            const data = await response.json();
            setPosts(data)
        }
        fetchData();
    }, []);

    return (
        <DashBoardStyled>
            {posts?.map((post) => {
                return (
                    <div>
                        <p>{post.title}</p>
                    </div>
                )
            })}
        </DashBoardStyled>
    );
};

export default DashBoard;

const DashBoardStyled = styled.div`

`