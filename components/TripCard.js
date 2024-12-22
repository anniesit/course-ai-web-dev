export default function TripCard({ trip }) {
    const { name, price, image, discountPrice, isDiscounted } = trip;
    return (
        <div className="shadow-md rounded-md overflow-hidden">
            <img src={image} alt={name} />
            <div className="px-4 pt-2 pb-4">
                <h2 className="leading-tight pb-1">{name}</h2>
                <p>{isDiscounted ? (
                    <>
                        <span className="line-through text-gray-400">${price}</span>
                        <span className="ml-2 text-green-700">${discountPrice}</span>
                    </>
                ) : (
                    <span>${price}</span>
                )}
                </p>
            </div>
        </div>
    )
}