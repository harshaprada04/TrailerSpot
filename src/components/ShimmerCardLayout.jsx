import ShimmerCard from "./ShimmerCard";

function ShimmerCardLayout(){
    return(
        <div className="pt-15 w-full flex overflow-x-auto no-scrollbar space-x-6">
          {" "}
          (
          {[...Array(5)].map((_, i) => (
            <ShimmerCard key={i} />
          ))}
          )
        </div>
    )
}

export default ShimmerCardLayout;