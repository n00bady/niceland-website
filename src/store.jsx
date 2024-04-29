import moment from "moment";

const DATA = "data_";

var STORE = {
	PayPalInputs: {},
	Config: {
		CLIENT: "https://nicelandvpn.is", // local client
		COUNTER_URL: "https://pay.nicelandvpn.is/count/",
		REGISTER_URL: "https://pay.nicelandvpn.is/user/create",
		AFFILIATE_URL: "https://pay.nicelandvpn.is/affiliate",
		PAYMENT_URL: "https://pay.nicelandvpn.is/paypal/payment",

		APITimeout: 20000,
		// API: "https://api.sveinn.is/", // disabling for now to use our test api
		ID: "tunnels-is-portal-id",
		HEADERS: {
			// "X-AUTH-TOKEN": "some-authentication-token",
			"Content-Type": "application/json",
			"Accept": "*/*",
		},
		otherPayments: [
			{
				Title: "Anonymous License Key",
				Price: 9,
				URL: "https://nicelandvpn.lemonsqueezy.com/buy/e8cbc47c-c19b-4ef7-9f8a-c8e2b94597dd"
			}
		],
		subs: [
			{
				Title: "1 Month",
				Price: 9,
				URL: "https://nicelandvpn.lemonsqueezy.com/buy/6f75871d-ea8d-46e3-927b-f62dc2453ad3"
			},
			{
				Title: "6 Month",
				Price: 49,
				URL: "https://nicelandvpn.lemonsqueezy.com/buy/214e7bee-3e9c-4d14-8e3d-0a96a1b48361"
			},
			{
				Title: "12 Month",
				Price: 69,
				URL: "https://nicelandvpn.lemonsqueezy.com/buy/71bb1dd8-8fac-4d56-bfbf-63cfd6081c5a"
			}

		],

	},
	PrintCodes() {
		Object.keys(STORE.Config.affiliateCodes).forEach(c => {
			try {
				console.log(c, atob(c))
			} catch (e) {
			}
		});
	},
	GoodJobFindingThis(honey) {
		if (STORE.Config.affiliateCodes[btoa(honey)]) {
			return true
		} else {
			return false
		}
	},
	LoadNewCSSToStore: function(newCSS) {
		STORE.CSS = {
			...STORE.TEMPLATE_CSS,
			...newCSS
		}
	},
	Content: {
		Features: {
			// SECURITY FEATURES
			"NoLogging": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-no-logging.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/no-logging.svg",
				title: "No-Logging Policy",
				short: "Niceland does not track any user activity in any form. The most important functionality of Niceland is not knowing anything about our users. You can't share what you don't have.",
				long: "",
			},
			"AnonymousMetaData": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-anon-mask.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/file-vault.svg",
				title: "Anonymous MetaData",
				short: "Session data and meta-data is something many VPN users are worried about. Niceland is designed with a custom Tag-Routing protocol which keeps any session information anonymous. Additionally Niceland does not keep any session data or meta data after users have disconnected.",
				long: "",
			},
			"AnonymousAccounts": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-anon-mask.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/anon.svg",
				title: "Anonymous User Acccounts",
				short: "In order to protect our users anonymity, we offer account registration using usernames or pre-generated tokens.",
				long: "",
			},
			"CashPayments": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/cash-payments.svg",
				title: "Cash Payments",
				short: "Users can pay for an account using mail-in cash, this adds another layer of anonymity to user accounts for individuals that want to go the extra mile.",
				long: "",
			},
			"PaymentProcessor": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/secure-server.svg",
				title: "Payment Processor Direct Connection",
				short: "To prevent excessive data collection Niceland decided to not use any 3rd party payment processing platforms like PayPal or stripe. Instead, we have a direct contract with a payment processor in Iceland.",
				long: "",
			},
			"OffsitePaymentProcessing": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/offsite.svg",
				title: "Offsite Payment Processing",
				short: "Recurring payments are processed on an off-site server. This means that once the initial payment has been made, subsequent payments will be processed in an isolated environment in order to reduce the risk of interference from malicious actors.",
				long: "",
			},
			"ProtectedKeys": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/exchange-teal.svg",
				title: "Protected Key Exchanges",
				short: "Encryption key exchanges between users and the VPN is protected by an additional layer of encryption. This means that the public keys are not visible in network inspection.",
				long: "",
			},
			"DNSLeaks": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/umbrella.svg",
				title: "DNS Leak Prevention",
				short: "All DNS traffic is forwarded through Niceland in order to protect users' privacy. Users can pick whichever DNS server they want to use by changing their DNS settings in the Niceland App.",
				long: "",
			},
			"IPv6Leaks": {
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/umbrella.svg",
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "IPv6 Leak prevention",
				short: "Niceland does not support IPv6, and to prevent your IPv6 from leaking we disable it whenever you connect.",
				long: "",
			},
			"DoubleVPN": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/multiple-documents.svg",
				title: "Default Double VPN",
				short: "Niceland uses what is called Double VPN as its default mode of transport. What that means is your internet traffic will travel through two separate servers or IPs before reaching the internet.",
				long: "",
			},
			"TwoFactorAuthentication": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/two-factor.svg",
				title: "Two-Factor Authentication",
				short: "Standard email/password authentication is sometimes not enough to keep your accounts safe, which is why Niceland enables users to activate Two-Factor Authentication for their accounts.",
				long: "",
			},
			// QUALITY FEATURES
			"GuaranteedBandwidth": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/speedtest.svg",
				title: "Minimum Bandwidth Guarantee",
				short: "Instead of over-crowding servers with users, Niceland only places a limited number of users on each server. With our custom built algorithms we do our best to ensure every user has enough bandwidth to enjoy the internet without interruption.",
				long: "",
			},
			"Multithreading": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/multi-threaded.svg",
				title: "Multi-threaded VPN",
				short: "Nicelands core systems are multi-threaded, which allows us to squeeze more performance out of our servers.",
				long: "",
			},
			"UniqueBuffersAndTunnels": {
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/user-focused.svg",
				title: "User dedicated Tunnels",
				short: "Each user on Niceland's VPN system gets his own dedicated TCP Tunnel and processing buffers. This allows for more stability for individual users' connections and offer greater insulation between user tunnels.",
				long: "",
			},
			"NoPersistanceService": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/computer-desk.svg",
				title: "None-Persistent Software",
				short: "Nicelands APP was designed to not leave any running background services on your device once the app has been closed. This makes Niceland's footprint on your device even smaller.",
				long: "",
			},
			"CrossContinent": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/globe.svg",
				title: "Cross-Continent Speed Up",
				short: "When possible Niceland will send your traffic across continents using private datacenter routes. These private routes have a higher capacity for bandwidth than the public internet and in some cases can provide a boost in internet speed.",
				long: "",
			},
			"CustomDNS": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/dns.svg",
				title: "User Selected DNS",
				short: "Unlike many other VPNs, Niceland does not offer its own DNS services but instead lets users pick which DNS services they  want to use.",
				long: "",
			},
			"SandboxedUserActions": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/secure-laptop.svg",
				title: "Sandboxed User Action",
				short: "User registration and payments are only possible within the Niceland VPN app. This is to increase security and to prevent malicious web browser activity interacting with Nicelands Users.",
				long: "",
			},
			"DomainBlocking": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/red-notifications.svg",
				title: "Optional Domain Blocking",
				short: "Niceland VPN uses various domain blocking lists to improve the browsing experience of it's users. These block lists include things like Ads, Malware, Adult Content, Fake news, Gamling and various other content types that users might want to avoid while browsing the internet.",
				long: "",
			},
			"FastIPTurnover": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/speedtest.svg",
				title: "Fast IP Turnover",
				short: "VPN server IP Addresses get blocked all the time. To combat this NicelandVPN was designed to run on smaller servers that can easily be replaced. Rotating IP Addresses is often not enough since they are likely on the same network, hence switching servers completely is a more efficient tactic.",
				long: "",
			},
			"FirewallPenetration": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/secure-server.svg",
				title: "Firewall Penetration",
				short: "NicelandVPN runs on a custom routing protocol that is designed to penetrate firewalls. While using NicelandVPN all of your network traffic looks like you are talking to a website (HTTPS).",
				long: "",
			},

			// BUSINESS VPN FEATURES

			"BUSINESS-SimpleSetup": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/secure-files.svg",
				title: "Simple Setup",
				short: "The VPN does not require any port-forwarding or network configurations. The VPN will connect outwards to a pre-configured Niceland router.",
				long: "",
			},
			"BUSINESS-UnlimitedUsers": {
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/alot.svg",
				title: "No User Limits",
				short: "The number of users connected to each VPN is only limited by the amount of bandwidth given to the VPN. This configuration can be controlled via a simple configuration setting. Additionally, each user can be allocated a certain amount of minimum guaranteed bandwidth.",
				long: "",
			},
			"BUSINESS-CustomDNS": {

				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/dns.svg",
				title: "Custom DNS Records",
				short: "VPNs can register custom DNS Records within the VPN network. These records can be used to quickly access file servers, databases or any development environments.",
				long: "",
			},
			"BUSINESS-NAT": {
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/nat.svg",
				title: "Network NAT",
				short: "NAT configurations can be applied to the VPN networks. This will help prevent IP conflicts which tend to happen when within a corporate environment.",
				long: "",
			},
			"BUSINESS-ToggleAccess": {
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/settings.svg",
				title: "Controlled Internet/Local Access",
				short: "Internet and Local network access can be toggled on or off with a simple press of a button.",
				long: "",
			},
			"BUSINESS-BlackWhiteListing": {
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/secure-laptop.svg",
				title: "Security by Default",
				short: "All sub-networks are blocked by default. In order to give users access to a certain network, a whitelist must be generated for the VPN. This prevents default deployments from giving global access to networks.",
				long: "",
			},

			// PRIVATE VPN FEATURES
			"PRIVATE-NoPortForwarding": {
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "No Port Forwarding",
				short: "The private VPN does not require any router modification, instead it will create an outgoing connection to Niceland's network.",
				long: "",
			},
			"PRIVATE-UnlimitedUsers": {
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "Unlimited User Invites",
				short: "Any user that has a Niceland VPN subscription can be invited to access private VPN by their owners. No additional payments required.",
				long: "",
			},
			"PRIVATE-CustomDNS": {
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "Custom DNS Records",
				short: "Private VPN owners can register custom DNS Records within the private VPN network. These records are only visible to users with access to the private network.",
				long: "",
			},
			"PRIVATE-NAT": {
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "Private Network NAT",
				short: "Private VPN owners can apply NAT configurations to the VPN network. This configurations will prevent IP conflicts between known local network IP Addresses.",
				long: "",
			},
			"PRIVATE-ToggleAccess": {
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "Controlled Internet/Local Access",
				short: "Private VPN owners have the ability to turn on/off local area or internet acces from their VPN network as needed.",
				long: "",
			},
			"PRIVATE-BlackWhiteListing": {
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "White/Blacklisting of networks",
				short: "Access to sub-networks can be white/blacklisted depending on the VPN networks owner's needs.",
				long: "",
			},
			"GEOUnblocking": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/streaming.svg",
				title: "Unlock Your Favourite Content",
				short: "Unlocking GEO-blocked content is something VPN users have come to expect. Niceland intercepts all DNS queries and re-writes the IP information, then forwards those DNS queries through the encrypted user connections. Additionally Niceland has fewer users per VPN server, making it less likely to get blocked.",
				long: "",
			},
			// TO BE ANNOUNCED / LAUNCHED
			"PersistentSessions": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "Persistent Sessions",
				short: "Niceland offers users the ability to purchause persistent session on VPN servers. This means that even when disconnected, Niceland saves you a spot on your selected VPN server.",
				long: "",
			},
			"CryptoPayments": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "Crypto Currency Payments",
				short: "We are currently looking into different crypto currency payment platforms. We want to support as many crypto currencies as possible, but Bitcoin, Etherum and Monero are a must.",
				long: "",
			},
			"GamingMode": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "Cross-Continent Gaming",
				short: "Niceland VPN was designed to route user traffic using private datacenter networks. These networks often have better latency, more bandwidth and less restrictions than the public internet. We will be using this functionality to create a Gaming Mode for Niceland VPN later this year.",
				long: "",
			},
			"IncreasedMinimumBandwidth": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "More User Bandwidth",
				short: "In a few weeks, users will be able to purchase additional minimum bandwidth in increments of 5mbps.",
				long: "",
			},
			"PrivateVPN": {
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/computer-desk.svg",
				title: "Private VPN for the Home",
				short: "Niceland will be announcing a private VPN for homes which connects directly to the global Mesh network. This VPN will include custom DNS records, NAT capabilities, network White/Black listing and User access control.",
				long: "",
			},
			"iOSAPP": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "Niceland iOS + Apple TV App",
				short: "Developing a VPN for iPhones is tricky, they do not let developers have the same level of control as Android which makes it hard to guarantee the same level of security. However, due to popular demand we are going to offer an iOS VPN solution that has the highest level of security possible.",
				long: "",
			},
			"AndroidAPP": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "Niceland Android + TV App",
				short: "The next major development project for Niceland will be an Android mobile app. Development on the app will start soon after official product launch.",
				long: "",
			},
			"DetailedDocs": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "Detailed Technical Documentation",
				short: "Most VPNs do not share technical details when it comes to their implementation. Niceland will try to share as much technical detail as possible via more detailed text and visual descriptions on the website.",
				long: "",
			},
			"SecurityAudit": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "3rd Party Security Audits",
				short: "Niceland will be subject to 3rd party security audits once we have enough revenue to pay for them.",
				long: "",
			},
			"OpenSource": {
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/exchange-teal.svg",
				title: "Open Source Client",
				short: "The Niceland App will be open sourced in the coming weeks. Before we can open source the app, we will need to set up proper procedures for community contributions and bug reporting.",
				long: "",
			},
			"StandAloneCLI": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "Stand Alone CLI / TUI",
				short: "Niceland VPN will be available as a stand-alone and portable CLI application soon after launch. We want terminal lovers to to be able to launch the VPN without the need of a GUI.",
				long: "",
			},
			"LinuxSecuritySigning": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "Linux security signing",
				short: "The Windows and MacOS applications are already signed with verified certificates, but the Linux app still needs security signing implementations. This will be a top priority in the coming days.",
				long: "",
			},
			"PortForwarding": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "Port Forwarding",
				short: "Being able to forward ports enables users to share websites and private servers with other users without the risk of exposing their own IP address.",
				long: "",
			},
			"RouteOnlyVPN": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "Custom Route VPN",
				short: "Being able to forward specific routes/IP Addresses and not others is a feature requested by many system administrators and we are happy to announce that it is officially on the roadmap.",
				long: "",
			},
			"HardwareCompatibility": {
				// icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				title: "Hardware Compatibility",
				short: "Running VPNs on a router or modem is common these days. We want that to be the case for NicelandVPN as well. ",
				long: "",
			},
		},
		Guides: [
			{
				title: "Getting Started With Niceland VPN",
				tag: "getting-started",
				content: [
					"title:::Step 1: Downloading Niceland",
					"html:::Download Niceland VPN by clicking <a target='_blank' href='/#/download'>this link</a>",

					"title:::Step 2: Opening Niceland",
					"text:::On Windows and Linux you can simply run Niceland! no install needed. ",
					"text:::On macOS you will need to drag the application to the applications folder.",

					"title:::Step 3: Creating Your Account",
					"text:::Accounts are created inside the Niceland VPN app not on the website. This is for security reasons.",

					"title:::Step 4: Choosing A Subscription",
					"html:::Detailed subscription information can be seen by clicking <a target='_blank' href='/#/signup'>this link</a>",

					"title:::Step 5: Activating Your License Key",
					"text:::Once payment is complete, you will receive a License key.",
					"text:::You can use this key inside the 'Settings' page in the app to activate your account.",
					"image:::https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/sections/how-to-use-niceland/lkh.png",

					"title:::Step 6: Connecting To Niceland",
					"text:::Click a country of your choosing and select yes!",
				]
			},

		]
	},
	GetAndSaveDomain: function() {
		let host = window.location.host
		let domain = "default"

		try {
			var hostSplit = host.split('.')
			domain = hostSplit[hostSplit.length - 1]
		} catch (error) {
			console.log("ERROR PARSING DOMAIN")
			console.dir(error)
		}

		STORE.Cache.Set("domain", domain)
		return domain
	},
	GetAndSaveSubdomain: function() {
		var host = window.location.host
		let subdomain = ""

		try {
			subdomain = host.split('.')[0]
		} catch (error) {
			console.log("ERROR PARSING FIRST SUBDOMAIN")
			console.dir(error)
		}

		Store.Set("subdomain", subdomain)
		return subdomain
	},
	Cache: {
		Clear: function(key) {
			return window.localStorage.clear()
		},
		Get: function(key) {
			return window.localStorage.getItem(key)
		},
		GetBool: function(key) {
			let data = window.localStorage.getItem(key)
			if (data === "true") {
				return true
			}
			return false
		},
		Set: function(key, value) {
			window.localStorage.setItem(key, value)
		},
		Del: function(key) {
			window.localStorage.removeItem(key)
		},
		DelObject: function(key) {
			window.localStorage.removeItem(DATA + key)
			window.localStorage.removeItem(DATA + key + "_ct")
		},
		GetObject: function(key) {
			let jsonData = null
			try {
				jsonData = JSON.parse(window.localStorage.getItem(DATA + key))
				console.log("%cGET OBJECT:", 'background: lightgreen; color: black', key, jsonData)
			}
			catch (e) {
				console.log(e)
				return undefined
			}

			if (jsonData === null) {
				return undefined
			}

			return jsonData
		},
		SetObject: function(key, object) {
			try {
				console.log("%cSET OBJECT:", 'background: lightgreen; color: black', key, object)
				let data = JSON.stringify(object)
				window.localStorage.setItem(DATA + key, data)
				window.localStorage.setItem(DATA + key + "_ct", moment().unix())
			}
			catch (e) {
				console.log(e)
				alert(e)
			}

		},
	},
	SessionCache: {
		Clear: function(key) {
			return window.sessionStorage.clear()
		},
		Get: function(key) {
			return window.sessionStorage.getItem(key)
		},
		GetBool: function(key) {
			let data = window.sessionStorage.getItem(key)
			if (data === "true") {
				return true
			}
			return false
		},
		Set: function(key, value) {
			window.sessionStorage.setItem(key, value)
		},
		Del: function(key) {
			window.sessionStorage.removeItem(key)
		},
		DelObject: function(key) {
			window.sessionStorage.removeItem(DATA + key)
			window.sessionStorage.removeItem(DATA + key + "_ct")
		},
		GetObject: function(key) {
			let jsonData = null
			try {
				jsonData = JSON.parse(window.sessionStorage.getItem(DATA + key))
				console.log("%cGET OBJECT:", 'background: lightgreen; color: black', key, jsonData)
			}
			catch (e) {
				console.log(e)
				return undefined
			}

			if (jsonData === null) {
				return undefined
			}

			return jsonData
		},
		SetObject: function(key, object) {
			try {
				console.log("%cSET OBJECT:", 'background: lightgreen; color: black', key, object)
				let data = JSON.stringify(object)
				window.sessionStorage.setItem(DATA + key, data)
				window.sessionStorage.setItem(DATA + key + "_ct", moment().unix())
			}
			catch (e) {
				console.log(e)
				alert(e)
			}

		},
	},

};


export default STORE;
