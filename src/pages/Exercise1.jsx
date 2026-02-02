import DataCard from '../components/DataCard'
import { exercise1 } from '../data/data'

const Exercise1 = () => {
  return (
    <div className="exercise1 min-h-screen">
      <div className="relative w-full overflow-hidden">
        <div className="md:block hidden">
          <img
            src="https://placehold.co/1920x650"
            alt="Desktop banner"
            className="w-full h-auto block"
          />
        </div>

        <div className="block md:hidden">
          <img
            src="https://placehold.co/600x600"
            alt="Mobile banner"
            className="w-full"
          />
        </div>

        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 px-2">
          <h2 className="text-[70px] md:text-[70px] font-bold mb-4 leading-tight">
            Hello <br className="block md:hidden" />
            Developer!
          </h2>
          <p className="text-[30px] md:text-[40px] mt-3 font-light leading-snug">
            Lorem ipsum dolor sit amet, <br className="block md:hidden" />
            consectetur adipiscing elit
          </p>
        </div>
      </div>

      {exercise1.length > 0 && (
        <div className="py-2 mb-8 px-4 sm:px-6 md:px-4 lg:px-16">
          <div className="max-w-375 mx-auto">
            <div className="max-w-300 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 mt-8">
                {exercise1.map(card => (
                  <DataCard
                    key={card.id}
                    image={card.image}
                    content={card.content}
                    url={card.url}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Exercise1