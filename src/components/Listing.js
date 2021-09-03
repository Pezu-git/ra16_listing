/* eslint-disable no-unreachable */

import React from 'react'
import propTypes from 'prop-types'
import ListingItem from "./ListingItem";


function Listing(props) {
    //state: deleted
    props.items.splice(22, 1)

    return(
        <div className="item-list" >
            {props.items.map(item => (
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
