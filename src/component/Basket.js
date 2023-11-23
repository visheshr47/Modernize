import { useSelector } from "react-redux";
const Basket = () => {
    const accountUser = useSelector((store) => store.user.accounts);
    return (<>

        <h1 className="flex justify-center text-lg font-bold mt-8 ">User Accounts</h1>

        <div className="mx-auto w-6/12 my-4 p-4  bg-blue-50  flex  align-middle justify-around  shadow-lg  ">
            Account Added
        </div>
        <div className="mx-auto w-4/12 my-2 p-2 bg-blue-400 rounded-md  shadow-lg  ">
            <div className="flex justify-between ">
                <span className="ml-4  text-base font-bold  "> </span>

            </div>

            {accountUser.map((account) => (
                <div className="my-4" key={account}>
                    {account}
                </div>
            ))}
        </div>

    </>)
}
export default Basket;