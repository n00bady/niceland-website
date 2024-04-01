import React from "react";
import About from "./sections/about";
import Download from "./sections/Download";
import SupportSocial from "./sections/SupportSocial";
import BannerNew from "./BannerNew";


const AboutPage = () => {

	window.scrollTo(0, 0);

	return (
		<>
			<BannerNew
				image={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/about-banner.webp"}
				mobileImage={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/about-banner-mobile.webp"}
				title={"Learn About Niceland"}
				subtitle={"And its residents"}
				showLink={true}
				linkText={"Register Here!"}
				linkPath={"/signup"}
			/>

			<About row={"1"} bg={"1"}></About>
			<SupportSocial row={"2"} bg={"1"}></SupportSocial>
			<Download row={"3"} bg={"1"}></Download>

		</>
	)
}

export default AboutPage;
