import sea from './img/plastic.jpeg';
import bottle from './img/bottle.jpg';
import bag from './img/bag.jpg';

const Sustainability = () => {

  return (     
    <>     
  <div class='header'>
      <img class='img-header' src={sea}/> 
      <div class='center'>
          <h1>Sustainability</h1>
          <p>Join us and millions of others on our journey to
          reduce plastic waste. Here’s how and why we do it—every little bit counts.</p>
      </div>
  </div>
        
    <div class='wrapper-shop-now'>
      <button class = 'shop-now'><a href='/CreativeProject/shop.html'>Shop Now </a></button>
    </div> 
    <div class='plastic-free'>
      <h1>We’re different and<br/>
      it makes a difference.</h1>
      <p>Here’s how we happily avoid plastic</p>
    </div> 
    <div class='content'> 
      <div class='bottle-wrapper'>
          <div class='packaging right'>
              <h2>Bottles</h2>
              <p>We only ever use glass bottles. Why? Unlike plastic, glass is infinitely recyclable, looks great, and breaks down into sand at the end of its life.</p>
          </div>
          <div class='img-wrapper left'>
              <img class='img-packaging' src={bottle}/>
          </div>
      </div> 
      <div class='envelopes-wrapper'>
          <div class='packaging left'>
              <h2>Envelopes</h2>
              <p>nstead of plastic poly-mailers, we ship with kraft envelopes padded with post-consumer recycled newspapers.</p>
          </div>
          <div class='img-wrapper right'>
              <img class='img-packaging' src={bag}/>
          </div>
        
      </div>   
    </div> 
    {/* <div class='api'>
          
          <img id="img" src="" />
      </div> */}
      </>  
      )
};

export default Sustainability;