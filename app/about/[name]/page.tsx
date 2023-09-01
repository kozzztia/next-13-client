import React from 'react';

type IdProps = {
    params : {
        name : string
    }
}


const Page = ({params: {name}} : IdProps) => {
    return (
        <div>
            {name}
        </div>
    );
};

export default Page;