import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51H8U9WIevzn5dpAguT8tB9JNKj9PgxWevdDPdLLsPgMakIv2uQWCFP329npNmXFvqsbGniX9E1XdMY6xH2gpcNkV00ov3MC5Jr';

  const onToken = token => {
    axios({
      url: '/payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('Payment successful')
      })
      .catch(error => {
        console.log('Error: ', JSON.parse(error));
        alert('Payment failed')
      })

  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Co.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}

    />
  )
}

export default StripeCheckoutButton;
