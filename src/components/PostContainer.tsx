import React from 'react';
import {postAPI} from "../services/PostService";

const PostContainer = () => {
    const {} = postAPI.useFetchAllPostsQuery('')

    return (
        <div>

        </div>
    );
};

export default PostContainer;