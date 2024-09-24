import { useKeenSlider } from 'keen-slider/react'
import "keen-slider/keen-slider.min.css"
import { useEffect, useState } from "preact/hooks";

// const Arrow = (props: {
//     disabled: boolean
//     left?: boolean
//     onClick: (e: any) => void
// }) => {
//     const arrowtailwind = "w-10 h-full absolute -translate-y-1/2 cursor-pointer"
//     const lefttailwind = "left-5"
//     const righttailwind = "right-5"

//     const disabled = props.disabled ? " hidden" : ""
//     return (
//         <div className="">
//             <svg
//                 onClick={props.onClick}
//                 className={`${arrowtailwind} ${props.left ? arrowtailwind : righttailwind} ${disabled}`}

//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//             >
//                 {props.left && (
//                     <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//                 )}
//                 {!props.left && (
//                     <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//                 )}
//             </svg>
//         </div>
//     )
// }


const HobbyCarousel = () => {
    const images = [
        {
            info: "Cape Nothumberland, Australia",
            img: "image1.png"
        },
        {
            info: "Uluru, Australia",
            img: "image2.png"
        },
        {
            info: "Kings Canyon, Australia",
            img: "image3.png"
        },
        {
            info: "Hang Tien Cave, Vietnam",
            img: "image4.png"
        },
        {
            info: "Ban Gioc Waterfall, Vietnam",
            img: "image5.png"
        },
        {
            info: "Toorongo Falls Reserve, Australia",
            img: "image6.png"
        },
        {
            info: "Murray River, Australia",
            img: "image7.png"
        },
    ]

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState<boolean[]>([])

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        animationEnded(s) {
            setCurrentSlide(s.track.details.rel)
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        loop: true,
        initial: 0
    })

    useEffect(() => {
        const new_loaded = [...loaded]
        new_loaded[currentSlide] = true
        setLoaded(new_loaded)

        console.log("LOADED")
    }, [currentSlide])


    return (
        <div className="flex align-middle cursor-pointer bg-gray-100 dark:bg-zinc-800 rounded-lg p-5">
            {/* {loaded && instanceRef.current && (
                <>
                    <Arrow
                        left
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.prev()
                        }
                        disabled={currentSlide === 0}
                    />
                </>
            )} */}
            <div className="keen-slider" ref={sliderRef}>
                {images.map((src, idx) => (
                    <div key={idx} className="keen-slider__slide flex flex-col justify-start">
                        <p className="w-full text-center text-black dark:text-white">{src.info}</p>
                        <img
                            className="object-contain max-h-72"
                            src={loaded[idx] ? `img/hobbies/${src.img}` : ""}
                        />
                    </div>
                ))}
            </div>
            {/* {loaded && instanceRef.current && (
                <>
                    <Arrow
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.next()
                        }
                        disabled={
                            currentSlide ===
                            instanceRef.current.track.details.slides.length - 1
                        }
                    />
                </>
            )} */}
        </div>
    )
}

export default HobbyCarousel;