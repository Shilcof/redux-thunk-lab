import React from 'react'

function CatList(props) {
    return (
        <div>
            {props.catPics.map(c=><img key={c.id} src={c.url} alt={c.source_url} />)}
        </div>
    )
}

export default CatList