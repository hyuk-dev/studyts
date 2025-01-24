import icHeartImg from '../../../../../assets/ic_heart.png'
import '../../../../../styles/BestItem.css'
import { Product } from '../types/product';

interface bestProductProps {
  bestProducts : Product[];
}
const BestItem : React.FC<bestProductProps> = ({ bestProducts } ) => {
  return (
    <>
      { bestProducts.map((bestProduct : Product, key : number )=> {
        return (
          <div className='bestItem' key={key}>
            <div className='imgArea'>
              <img className='bestProductImage' src={bestProduct.images[0]} />
            </div>
            <div>{bestProduct.name}</div>
            <div className='bestProductPrice'>{bestProduct.price}원</div>
            <div>
                <img src={icHeartImg} />{bestProduct.favoriteCount}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default BestItem;