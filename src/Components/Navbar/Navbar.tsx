import {AiOutlineMenu} from "react-icons/ai";


const Navbar = () => {


    return (
        <div className={'bg-teal-700 w-screen justify-center z-10 shadow-lg h-12'}>
            <AiOutlineMenu className={'m-3 hover:cursor-pointer'}/>
        </div>
    )

}

export {
    Navbar
}