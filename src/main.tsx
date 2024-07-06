import React from "react";
import ReactDOM from "react-dom/client";

import { OKContract, OKInstance, OKInteraction } from "@okcontract/sdk-react";

import App from "./App.tsx";
import "./index.css";

// Uniswap v3
const interactionID = "AbX2IbtBDbgJdkAXucGu";

const root = document.getElementById("root");

if (root)
	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<OKContract>
				<OKInstance>
					<OKInteraction id={interactionID}>
						<App />
					</OKInteraction>
				</OKInstance>
			</OKContract>
		</React.StrictMode>,
	);
