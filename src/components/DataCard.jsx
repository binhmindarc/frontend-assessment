const DataCard = ({ image, content, url }) => {

  return (
    <div className="bg-white rounded-lg p-6 shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex flex-col h-full">
      <div className="card-image">
        {image ? (
          <img
            src={image.url}
            alt={image.alt || "Image"}
            className="w-full h-auto rounded-lg mb-4"
          />
        ) : (
          <img
            src="https://placehold.co/400x300"
            alt="Placeholder image"
            className="w-full h-auto rounded-lg mb-4"
          />
        )}
      </div>
      <div className="card-info flex-1 flex flex-col">
        {content && (
          <p className="text-gray-600 leading-relaxed text-center flex-1">
            {content}
          </p>
        )}
        {url && (
          <div className="mt-10 text-center">
            <a href={url} className="cursor-pointer border-2 uppercase font-bold border-black hover:border-black hover:bg-black hover:text-white rounded-full px-4 py-2 transition-colors duration-300">
              Read more
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default DataCard