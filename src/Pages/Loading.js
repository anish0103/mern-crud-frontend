import React from 'react'

import './CSS/Loading.css'

const Loading = () => {
    return (
        <div className="loadingpage-maincontainer" >
            <div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading