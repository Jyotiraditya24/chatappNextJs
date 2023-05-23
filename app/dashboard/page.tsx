import React from 'react';

interface pageProps{
    name:string
}

const page:React.FC<pageProps> = ({name}) => {
  return (
    <div>{name}
        name
    </div>
  )
}

export default page