export default function Grid() {
    return (
      <div className="grid grid-cols-3 gap-4 p-8 bg-gray-200">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="bg-blue-200 p-4 rounded-lg text-center">
            {i + 1}
          </div>
        ))}
      </div>
    );
  }