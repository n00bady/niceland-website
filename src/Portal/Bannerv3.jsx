import React, { useEffect, useState, useId } from "react";
import { ImArrowRight2 } from "react-icons/im"
import { Link } from "react-router-dom";

const BannerV3 = (props) => {

	return (
		<>
			<div className="banner3">
				<img className="banner-bg" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/comp/bannerv6.webp"></img>
				<div className="title font-banner-title">Niceland At Your Service </div>

				<div className="subtitle font-banner-subtitle">Join our communities for advanced customer support</div>

				<Link to={"/signup"} className="button font-button get-started">Register Here
					<ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
				</Link>

			</div>
		</>
	);
}

export default BannerV3;
