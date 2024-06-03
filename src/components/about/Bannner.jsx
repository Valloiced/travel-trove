import BannerBG from "../../assets/about-bg.png"

export default function Banner() {
    return (
        <div className="w-screen h-3/4">
            <img
                src={BannerBG}
                className="w-full h-full object-fill"
                alt="Banner Background for About Section"
            />
        </div>
    )
}