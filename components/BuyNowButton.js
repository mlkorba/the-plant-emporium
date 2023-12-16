export function BuyNowButton ({ priceID }) {
  return (
    <form action='/api/checkout' method='POST'>
      <input type='hidden' name='id' value='from dashboard' />
      {/* ADD THE PRICE ID TO THE HIDDEN FIELD */}
      <input type='hidden' name='price' value={priceID} />
      <button
        type='submit'
        value='submit'
        className='w-1/2 text-xl font-bold rounded-full bg-jungleGreen hover:bg-oliveGreen duration-300 cursor-pointer text-white py-2'
      >
        Buy Now
      </button>
    </form>
  )
}
