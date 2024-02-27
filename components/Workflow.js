import Image from "next/image";

const Workflow = () => {
    return (
        <div>
            <div className="absolute top-1/2 right-3 mr-20 transform -translate-y-1/2 blend-color-dodge mt-[190px] z-10 w-[200px] xl:w-[880px]">
                <Image src={'/A1.png'} width={460} height={400} className="w-full h-full" alt="" />
            </div>
        </div>


    )
};

export default Workflow;
