import App from "./App";

import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter} from 'react-router-dom';
import store from './redux/createStore'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
 /*  useQuery,
  gql */
} from "@apollo/client";


/* import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home";
import ProductList from './pages/ProductList';
import Items from './components/Items/all-items.components'; */
import { CartProvider } from './contexts/cart.context';
/* import CartDropdown from './components/cart-dropdown/cart-dropdown.component'; */






const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});
/*
const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
 function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}
 */
/* function App() {
  return (
    <div>
<Items/>
<Routes>
    
     <Route exact path="/" element={<Home/>}/>

 <Route path="/cart" element={<Cart/>} /> 
 <Route path="/eshop" element={<ProductList/>} /> 
</Routes>
      
    </div>
   
  );
}
 */

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
  
  <ApolloProvider client={client} store={store}>
    
    <BrowserRouter>
    <CartProvider>
    <App />
    </CartProvider>
    </BrowserRouter>

  </ApolloProvider>,
  
);