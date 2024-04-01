import React from "react";
import Pricing from "./sections/Pricing";
import Download from "./sections/Download";
import BannerNew from "./BannerNew";

const PricingPage = () => {
	window.scrollTo(0, 0);
	return (
		<>
			{/* <Banner></Banner> */}
			<BannerNew
				image={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/pricing-banner.webp"}
				mobileImage={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/pricing-banner-mobile.webp"}
				title={"Subscribe To Niceland"}
				subtitle={""}
				showLink={false}
				linkText={"Free Trial"}
				linkPath={"/register"}
			/>
			<Pricing row={1} bg={1}></Pricing>
			<Download row={"2"} bg={"2"}></Download>
		</>
	);
}

export default PricingPage;
