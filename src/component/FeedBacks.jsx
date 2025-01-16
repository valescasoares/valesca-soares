export default function FeedBacks({feedbacks}){
    return (
        <div className="w-screen h-auto text-center flex-col">
            <h1 className="font-extrabold text-4xl text-[#023C40] mb-10">O QUE DIZEM SOBRE O MEU TRABALHO</h1>
            <div className="w-full gap-10 p-10 items-center justify-center grid-cols-2 grid max-[1200px]:grid-cols-1">
                {feedbacks.map((feedback)=>(
                    <img className="rounded-3xl w-full" src={feedback.image} alt="" />
                ))}
            </div>
        </div>
    )
};