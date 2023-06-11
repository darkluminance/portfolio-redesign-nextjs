import Topnav from '@/components/Topnav';
import '../contact.css';

export default function Contact() {
	return (
		<>
			<Topnav></Topnav>
			<div className="contactItems ">
				<div className="contactHeader">
					<h1>HELLO.</h1>
				</div>
				<div className="contactItem">
					<p>You can contact me through the folllowing ways</p>
				</div>
				<div className="contactItem">
					<p>
						Email:{' '}
						<a href="mailto:ryeofficial13@gmail.com" className="text-link">
							ryeofficial13@gmail.com
						</a>
					</p>
					<p>Phone: +8801840054144</p>
					<div className="contactLinks">
						<p>On the internet:&nbsp;</p>
						<div className="contactLinkItems">
							<div className="contactLinkItem">
								<a
									href="https://www.linkedin.com/in/rye013/"
									target="_blank"
									rel="noreferrer"
									className="text-link"
								>
									LinkedIn
								</a>
							</div>
							<div className="contactLinkItem">
								<a
									href="https://dribbble.com/darkluminance"
									target="_blank"
									rel="noreferrer"
									className="text-link"
								>
									Dribbble
								</a>
							</div>
							<div className="contactLinkItem">
								<a
									href="https://www.facebook.com/darkluminance/"
									target="_blank"
									rel="noreferrer"
									className="text-link"
								>
									Facebook
								</a>
							</div>
							<div className="contactLinkItem">
								<a
									href="https://www.instagram.com/rye_013/"
									target="_blank"
									rel="noreferrer"
									className="text-link"
								>
									Instagram
								</a>
							</div>
							<div className="contactLinkItem">
								<a
									href="https://github.com/darkluminance/"
									target="_blank"
									rel="noreferrer"
									className="text-link"
								>
									Github
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
