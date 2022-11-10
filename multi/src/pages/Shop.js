import tooth from '../img/toothbits.png';
import mouth from '../img/mouthwash.png';
import gel from '../img/whitening-gel.png';


const Shop = () => {
  return (        
  <>
  <div class='first'>     
    <div class='banner'>
      <h1>All Products</h1>
      <h4>Build your own plastic-free routine</h4>
    </div>
  </div>     
  <div class='content'>
    <div class='product-list'>
      <div class='type'>
        <h1 class ='content-h1'>Oral Care</h1>
          <div class='line'></div>
      </div>
      <div class='products-wraper'>
        <div class='products'>
          <div class='product'>
            <img src={tooth}/>
            <p>Toothpaste Bits</p>
            <p><em>Fresh Mint</em></p><br/>
            <div class="star">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>    
          </div>    
          <div class='product'>
            <img src={mouth}/>
            <p>Mouthwash Bits</p>
            <p><em>Fresh Mint</em></p><br/>
            <div class="star">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>    
          </div>
          <div class='product'>
            <img src={gel}/>
            <p>Whitening Gel</p>
            <p><em>Teeth Whitening Kit</em></p><br/>
            <div class="star">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>    
          </div>
        </div>
      </div>
                
    </div>
  </div> 
  </>
  );
};

export default Shop;