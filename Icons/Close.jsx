import React from 'react'

function Close(props) {
    return (
        <div onClick={props.onClick} className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289C24.3166 6.90237 23.6834 6.90237 23.2929 7.29289L16 14.5858L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L14.5858 16L7.29289 23.2929C6.90237 23.6834 6.90237 24.3166 7.29289 24.7071C7.68342 25.0976 8.31658 25.0976 8.70711 24.7071L16 17.4142L23.2929 24.7071C23.6834 25.0976 24.3166 25.0976 24.7071 24.7071C25.0976 24.3166 25.0976 23.6834 24.7071 23.2929L17.4142 16L24.7071 8.70711Z" fill="#282828" />
            </svg>
        </div>
    )
}

export default Close