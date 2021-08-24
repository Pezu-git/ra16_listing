const ListingItem = ({url, src, title, currency, price, quantity}) => {
    let currentCurrency = `${price} GBP`;
    if (currency === 'USD') {
      currentCurrency = `$${price}`
    }
    if (currency === 'EUR') {
      currentCurrency = `€${price}`
    }
  
    let quantityClass = 'item-quantity';
    if (quantity > 20) {
      quantityClass += ' level-high';
    }
    if (quantity <= 10) {
      quantityClass += ' level-low';
    }
    if (quantity > 10 && quantity <= 20) {
      quantityClass += ' level-medium';
    }
  
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
          <p className={quantityClass}>{quantity} left</p>
        </div>
      </div>
    );
  }
  
  export default ListingItem;