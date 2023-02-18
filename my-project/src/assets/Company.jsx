// import { useHistory } from 'react-router-dom';


export default function Company(){
    // const history = useHistory();
    // const handleClick = () => {
    //     history.goBack();
    //   };
    
    return(
        <div className="flex flex-col ml-[21rem]">
        <div className="flex p-10">
        <div className="bg-blue-500 h-40 w-64 m-6">
            <h1 className="text-center text-2xl pt-16 text-white">
                View Notifications
            </h1>
        </div>

        <div className="bg-blue-500 h-40 w-64 m-6">
            <h1 className="text-center text-2xl pt-16 text-white">
                View availabel Products
            </h1>
        </div>
        </div>
        <div className="flex p-10">
        <div className="bg-blue-500 h-40 w-64 m-6">
            <h1 className="text-center text-2xl pt-16 text-white">
                Track
            </h1>
        </div>

        <div className="bg-blue-500 h-40 w-64 m-6">
            <h1 className="text-center text-2xl pt-16 text-white">
                View or Return
            </h1>
        </div>
        </div>
        <button
      className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none w-[20%] mx-[40rem] m-4 focus:shadow-outline"
      
    >
      Back
    </button>
        </div>
    )
}