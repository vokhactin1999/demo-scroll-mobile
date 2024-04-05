import React from "react";
import Picker from "react-mobile-picker";
import "./GagoScrollingMobile.css";
import { useContext, useState } from "react";
import { data_temoin } from "../assets/data-temoin";
import { ScrollInfoContext } from "../ScrollInfoContext";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Button,
} from "reactstrap";
import { useGetElementById } from "../hook";
import { useTranslation } from "react-i18next";
function GagoScrollingMobile() {
	const { setSelectedId, selectedId } = useContext(ScrollInfoContext);

	const getSelectedElementId = (value) => {
		setSelectedId(value);
	};
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const selectedElement = useGetElementById();
	const toggle = () => setDropdownOpen((prevState) => !prevState);
	const { t } = useTranslation();
	return (
		<div className='scrollingdiv-mobile'>
			<Picker
				value={selectedId}
				onChange={getSelectedElementId}
				wheel='normal'
				style={{ height: "200px", itemHeight: "40px" }}
				className='picker-scroll'>
				<Picker.Column key={name} name='gagoId'>
					{data_temoin.map((option) => (
						<Picker.Item key={option.id} value={option.id}>
							{({ selected }) => (
								/* Use the `selected` state ti conditionally style the selected item */
								<div
									className='heading-2'
									style={{
										color: "#fff",
									}}>
									<p
										style={{
											fontSize: "18px",
											fontFamily: "Berlin Sans FB",
											fontWeight: "bold",
										}}>
										{option.title}
									</p>
								</div>
							)}
						</Picker.Item>
					))}
				</Picker.Column>
			</Picker>
			{/* <div className="bottom-mobile">
			<div className="bottom-mobile-l">
			<Dropdown
								isOpen={dropdownOpen}
								toggle={toggle}
								size='xs' className="gago__dropdown_mobile">
								<DropdownToggle
									className='rounded-pill white toggle-mobile'
									style={{
										background: selectedElement.itemColor,
										border: "none",
									}}
									caret>
									{t("download proposal")}
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem>
										<a
											className='dropdown-item download-proposal-vietnamese'
											target='_blank'
											href='https://docs.google.com/presentation/d/e/2PACX-1vS_KSmBUey_jTUqgbdIux_iE3GcmPR4jYamr4581xfaoNH8_4Wv1_OPUiBUt6iI6h1klVgz5-65rJOq/pub?start=false&loop=false&delayms=3000'>
											{t("en version")}
										</a>
									</DropdownItem>
									<DropdownItem>
										<a
											className='dropdown-item download-proposal-english'
											target='_blank'
											href='https://docs.google.com/presentation/d/e/2PACX-1vQGnFrDfUNCodXyiCb2y3V0YRyRFMnG14IR3M0MaFkYz3VsHiUcwsgDlVaKh2YmGQef-sGQHWiNNtZW/pub?start=false&loop=false&delayms=3000'>
											{t("vn version")}
										</a>
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
			</div>
			<div className="bottom-mobile-r">
			<div className='contact-social-list_mobile'>
				<a className="item" target='_blank' href='https://m.me/111087687927395'>
					<img className='image-icon' src='messenger.png' alt='' />
				</a>
				<a className="item" target='_blank' href='https://wa.me/84984802030'>
					<img className='image-icon' src='phone.png' alt='' />
				</a>
				<a className="item" target='_blank' href='https://t.me/+84984802030'>
					<img className='image-icon' src='telegram.png' alt='' />
				</a>
				<a className="item" target='_blank' href='https://zalo.me/0938346221'>
					<img className='image-icon' src='zalo.png' alt='' />
				</a>
			</div>
			</div>
			

			</div> */}
		</div>
	);
}

export default GagoScrollingMobile;
