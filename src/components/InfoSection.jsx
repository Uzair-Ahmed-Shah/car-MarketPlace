import React from 'react'

function InfoSection() {
  return (
    <div>
        <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
      <div className="md:col-span-3">
        <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/220721175751-woman-mechanic-stock.jpg?c=original"
          className="rounded"
          alt=""
        />
      </div>

      <div className="md:col-span-1">
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Start exploring now and drive away in your perfect car!
          </h2>

          <p className="mt-4 text-gray-700">
          At car-MarketPlace, we connect buyers and sellers with ease. Browse through a wide range of vehicles, from new arrivals to trusted pre-owned cars. Find exactly what you need with a simple, user-friendly experience.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      
    </div>
  )
}

export default InfoSection
