import React from 'react'

interface ChildElementProps {
    text: string;
}

const Card: React.FC<ChildElementProps> = ({
    text,
}) => {

    return (
        <div className='flex flex-col flex-auto border border-black border-solid rounded'>
            <p className='text-black flex flex-auto'>{text}</p>
        </div>
    )
}

export default Card