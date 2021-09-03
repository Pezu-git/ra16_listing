// let quantityClass = require('classnames')
import cn from 'classnames';


const ListingItem = ({url, src, title, currency, price, quantity}) => {
    let currentCurrency = `${price} GBP`;
    if (currency === 'USD') {
      currentCurrency = `$${price}`
    }
    if (currency === 'EUR') {
      currentCurrency = `€${price}`
    }
    
    const btnClass = cn('item-quantity', {'level-high': quantity > 20}, {'level-low': (quantity <= 10)}, {'level-medium': (quantity > 10 && quantity <= 20)});
    
  
    return (
      <div className="item">
        <div className="item-image">
          <a href={url}>
            <img src={src} alt={title}/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title}</p>
          <p className="item-price">{currentCurrency}</p>
          <p className={btnClass}>{quantity} left</p>
        </div>
      </div>
    );
  }
  
  export default ListingItem;