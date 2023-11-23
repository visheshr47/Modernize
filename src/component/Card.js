const Card = () => {
    return (<>
        <div className="grid grid-cols-4 grid-rows gap-y-6 justify-items-center mt-8 ">

            {Array(12).fill("").map((item, index) => <div className="  p-3 w-[300px] h-[350px] border-2  rounded-2xl bg-gray-500   hover:bg-blue-100  shadow-lg " key={index}></div>)}

        </div>
    </>)
}
export default Card;