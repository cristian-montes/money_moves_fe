
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  Elements
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51K9YyABg9yAQBAw84bBZLY80FWMZ4hXz8ND78wNYA0kfDXip8mLTB5dOn2bsaQB8bkFE5FeJfbvywNxqPfZI0Ept0095gPwoiT');

render(

  <Elements stripe={stripePromise}>
    <App />
  </Elements>,
  document.getElementById('root')
);


reportWebVitals();
