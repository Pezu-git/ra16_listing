/* eslint-disable no-unreachable */

import React from 'react'
import propTypes from 'prop-types'
import ListingItem from "./ListingItem";


function Listing(props) {
    //state: deleted
    let listArr = []
    props.items.forEach(i => {
        if (i.state !== 'removed') {
            listArr.push(i)
        }
    })

    return(
        <div className="item-list" >
            {listArr.map(item => (
                <div key={item.listing_id}>
                    <ListingItem 
                        url={item.url}
                        src={item.MainImage.url_570xN}
                        title={item.title}
                        currency={item.currency_code}
                        price={item.price}
                        quantity={item.quantity}
                    />
                </div>  
            ))}
        </div>
    )
}

Listing.defaultProps = {
    items: [],
}

Listing.propTypes = {
    items: propTypes.array
}

export default Listing
