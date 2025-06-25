export default function Card({
  title = "Nature",
  srcc = "https://images.pexels.com/photos/32495048/pexels-photo-32495048.jpeg",
}) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={srcc} alt="Random" className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 ">{title}</h2>
        <p className="text-gray-600 mt-2 text-sm">
          This is a simple card built using Tailwind CSS. You can customize the
          content, image, and layout easily.
        </p>
        <button className="mt-4 bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
}
