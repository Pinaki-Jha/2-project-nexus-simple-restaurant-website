import Header from "./Header"
import spiceMeetsSymphonyImage from "../assets/where_spice_meets_symphony.jpg"

function Home(){
    return(
        <div>
            <div className="min-h-screen py-4 background-sign">
                <Header/>

                <div className="flex flex-col justify-center h-screen text-center">
                    <h1 className="text-5xl md:text-7xl inline heading-main text-white" style={{backgroundColor:"rgba(0,0,0,0.2)"}}>Spice<span className="text-yellow-500">Symphony</span></h1>
                    <p className="text-xl md:text-3xl mt-3 heading-sub text-white">Crafting Culinary Melodies since 2024</p>
                </div>

                <div className="flex flex-col md:flex-row items-center rounded-2xl mb-64 mt-12 w-11/12 mx-auto bg-white">
                    <img className="mx-2 my-2 w-11/12 md:w-72 cover rounded-2xl" src={spiceMeetsSymphonyImage}/>
                    <div className="my-5 text-center md:text-left">
                        <h1 className="heading-main text-3xl md:text-5xl">Where<span className="text-yellow-500"> Spice</span> meets <span className="text-yellow-500">Symphony</span></h1>
                        <p className="heading-sub text-md md:text-lg mx-12 my-2">In the noisy world of today, music is a gift. In the busy world of today, peace is a gift. In the flavourless world of today, flavour is a gift.
                        Nothing soothes the soul more than having a delicious meal as you sit by the window on a sunny day, enjoying some soft beats. Or dancing in the rain with a juicecan in your hand, creating new melodious memories.
                        </p>
                        <p className="heading-sub text-md md:text-lg mx-12 my-2">We at SpiceSymphony believe it is these simple things in life that truly give us joy. Our restaurant seeks to deliver that joy to any who venture inside, with music,
                        food and ambience that delight the soul and entice the mind. At SpiceSymphony, as you put on your headphones and enjoy your favourite songs, don't forget to get up and dance every now and then, smile, and feel 
                        the world smiling back at you as you enjoy your meal.
                        </p>
                    </div>
                </div>
            </div>
            <div className="min-h-screen background-spice">
                <div className=" min-h-screen" style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
                    <div className="flex flex-row">
                        <div className="md:w-1/3"></div>
                        <div className="mx-auto md:mx-0">
                            <h1 className="heading-main text-center md:text-left text-5xl md:text-7xl md:pl-24 py-16  text-yellow-500">Explore the Spices</h1>
                        </div>
                    </div>
                    <div className=" w-5/6 mx-auto rounded-xl" style={{backgroundColor:"rgba(255,255,255,1)"}}></div>

                </div>
            </div>
        </div>

    )
}

export default Home