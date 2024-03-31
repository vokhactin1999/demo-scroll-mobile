import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ContactList from "./component/ContactList";

import GagoLogoAndIconLeft from "./component/GagoLogoAndIconLeft";
import SideLeft from "./component/SideLeft";
import SideRight from "./component/SideRight";

function App() {
	return (
		<div className='body'>
			<div className='cover-body'>
				<ContactList />
				<GagoLogoAndIconLeft />
				<div className='w-layout-hflex flex-block'>
					<SideLeft />
					<SideRight />
				</div>
			</div>
		</div>
	);
}

export default App;
