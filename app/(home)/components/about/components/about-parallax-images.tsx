import ParallaxImage from "@/components/parallax-image";

export default function AboutParallaxImages() {
    return (
        <div className="w-full flex justify-center items-center h-full">
            <div className="relative">
                <ParallaxImage
                    image="/home/about/about-center.jpg"
                    alt="About Parallax Image 1"
                    motionRange={'medium'}
                    className="w-[25vw] h-[75vh]"
                />

                <div className="absolute top-0 -left-12">
                    <ParallaxImage
                        image="/home/about/about-left.jpg"
                        alt="About Parallax Image 2"
                        motionRange={'small'}
                        className="w-[10vw] h-[25vh]"
                        reverse
                    />
                </div>

                <div className="absolute bottom-0 -right-12">
                    <ParallaxImage
                        image="/home/about/about-right.jpg"
                        alt="About Parallax Image 2"
                        motionRange={'small'}
                        className="w-[10vw] h-[25vh]"
                        reverse
                    />
                </div>
            </div>
        </div>
    )
}