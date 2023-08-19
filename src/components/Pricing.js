const Pricing = () => {
    return ( 
        <div className="h-[66.5vh]">

        <div className="flex flex-col md:flex-row items-center md:space-y-0 space-y-[90px] md:space-x-[150px] py-[30px] m-auto bg-gray-500 text-black justify-center mt-[190px]">
            <div className="flex flex-col">
                <h1 className="uppercase text-8xl font-bold">PRO <span className="text-xl">99.99$</span></h1>
                <p className="font-bold">Possibilities</p>
                <p>- Advanced Features</p>
                <p>- Custumization</p>
                <p>- Security</p>
                <p>- Customer support</p>
                <p>- Sacrability</p>
                <a href="" className=" border hover:bg-gray-600 rounded-3xl p-[8px] text-white transition duration-300 ease mt-[20px]">Subscribe</a>
            </div>

            <div className="flex flex-col">
                <h1 className="uppercase text-8xl font-bold">Free</h1>
                <p className="font-bold">Possibilities</p>
                <p>- Basic Features</p>
                <p>- Easy usage</p>
                <a href="" className="mt-[70px] border hover:bg-gray-600 rounded-3xl p-[8px] text-white transition duration-300 ease">Subscribe</a>
            </div>
        </div>
        </div>

     );
}
 
export default Pricing;