export default function Rating({ ratings }) {
    const renderRating = () => {
        const ratingLimit = 5;
        ratings = Math.round(ratings);
        
        return new Array(ratingLimit)
            .fill(null)
            .map((_, index) => (
                <div className={`w-4 h-4 rounded-full ${index <= ratings - 1 ? 'bg-green' : 'border-2 border-green' }`}/>
            ))
    }

    return (
        <div className="flex flex-row gap-1">
            {renderRating()}
        </div>
    )
}