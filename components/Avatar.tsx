/* eslint-disable @next/next/no-img-element */


interface Props{
    url: string
    className: string
}

const Avatar = ({url,className}:Props) => {
    return (
        <img 
        src={url}
        loading="lazy"
        alt="avatar"
        className={`${className} rounded-full cursor-pointer transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110`}
        height={40}
        width={40}
        >
        </img>
    )
}

export default Avatar
