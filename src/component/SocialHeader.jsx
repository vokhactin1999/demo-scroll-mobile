import React, { useState } from "react";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Button,
} from "reactstrap";
import "./SocialHeader.css";
import { useGetElementById } from "../hook";
function SocialHeader(props) {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const selectedElement = useGetElementById();
	const toggle = () => setDropdownOpen((prevState) => !prevState);

	return (
		<div className='html-embed-2 w-embed w-script'>
			<div className='header'>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<Dropdown
								isOpen={dropdownOpen}
								toggle={toggle}
								size='xs'>
								<DropdownToggle
									className='rounded-pill white'
									style={{
										background: selectedElement.itemColor,
										border: "none",
									}}
									caret>
									Download Proposal
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem>
										<a
											className='dropdown-item download-proposal-vietnamese'
											target='_blank'
											href='https://docs.google.com/presentation/d/e/2PACX-1vQR6p7y1MC2m-rZGfbb_m1ejnyKmpET-WFStW4r9DSFxOmlwBtDEMrGHNS1-bLXFA/pub?start=false&loop=false&delayms=3000'>
											Vietnamese version
										</a>
									</DropdownItem>
									<DropdownItem>
										<a
											className='dropdown-item download-proposal-english'
											target='_blank'
											href='https://docs.google.com/presentation/d/e/2PACX-1vRuvcis7uEg4gpG_llsVir2Koo-7DufYtOsVLfYlHXOWAX3RwG3aKE6Vqxun_O3uw/pub?start=false&loop=false&delayms=3000'>
											English version
										</a>
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
						<div className='col'>
							<div className='social'>
								<a
									href='https://www.behance.net/gagostudios'
									target='_blank'
									className='header-link'
									style={{
										background: `${selectedElement.itemColor}`,
									}}>
									<img src='behance.svg' />
								</a>
								<a
									href='https://www.instagram.com/gago.studios/'
									target='_blank'
									className='header-link'
									style={{
										background: `${selectedElement.itemColor}`,
									}}>
									<img src='instagram.svg' />
								</a>
								<a
									href='https://www.facebook.com/gagostudios'
									target='_blank'
									className='header-link'
									style={{
										background: `${selectedElement.itemColor}`,
									}}>
									<img src='Facebook.svg' />
								</a>
								<a
									href='https://www.linkedin.com/company/gago-studios'
									target='_blank'
									className='header-link'
									style={{
										background: `${selectedElement.itemColor}`,
									}}>
									<img src='Linkedin.svg' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SocialHeader;
