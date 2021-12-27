import React, { forwardRef } from 'react'

function ForwordRef(props,ref) {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
}

export default forwardRef(ForwordRef);
 