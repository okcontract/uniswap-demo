import type React from "react";
import { useEffect, useState } from "react";

import { useCell, useCore, useStepper } from "@okcontract/sdk-react";

const App: React.FC = () => {
	const core = useCore();
	const wallet = useCell(core.WalletID);
	const name = useCell(core.WalletName);
	const verified = useCell(core.IsVerified);

	const stepper = useStepper();
	const current = useCell(stepper?.current);
	const canSendTX = useCell(current?.canSendTX, false);
	const buttonLabel = useCell(current?.btnLabel, "Send Transaction");
	const isSending = useCell(current?.isSending, false);
	const sent = useCell(current?.sentTx);
	const receipt = useCell(current?.receipt);
	const info = useCell(current?.infoLine);
	const chain = useCell(current?.chain);
	const chainOK = useCell(current?.chainOK);

	const [value, setValue] = useState(0.00001);
	useEffect(() => {
		if (current) {
			current.setValue(value);
		}
	}, [value, current]);

	return (
		<>
			<h1 className="mb-3">OKcontract SDK demo</h1>
			<div className="card bg-base-100 shadow-xl max-w-lg">
				<div className="card-body">
					<div className="text-base-content mb-3">
						{verified
							? "Connected wallet: "
							: "You need to connect your web3 wallet"}
						<span className="badge badge-outline">
							{name || wallet?.toString()}
						</span>
					</div>
					{wallet && verified ? (
						<button
							className="btn btn-neutral"
							onClick={() => core.Drop()}
							type="button"
						>
							Disconnect
						</button>
					) : (
						<button
							className="btn btn-secondary"
							onClick={() => core.Connect()}
							type="button"
						>
							Connect
						</button>
					)}
					<div className="divider" />
					<div className="card-title mb-3">
						Swap WETH to USDC on Uniswap V3 (Sepolia)
					</div>
					<label className="input input-bordered flex items-center gap-2">
						<input
							className="grow"
							onChange={(event) => setValue(() => +event.target.value)}
							value={value}
							disabled={isSending}
							type="number"
						/>{" "}
						ETH
					</label>
					<div className="mb-3">{info}</div>
					<button
						className="btn btn-secondary"
						onClick={() =>
							chainOK ? current?.sendTX() : current?.switchChain()
						}
						type="button"
						disabled={
							!current || !canSendTX || isSending || receipt !== undefined
						}
					>
						{chain && !chainOK
							? `Switch to ${chain?.name}`
							: isSending
								? "Please wait..."
								: buttonLabel}
					</button>
					{sent?.[sent.length - 1] && (
						<div>
							<a href={sent[sent.length - 1].url}>Explorer link</a>
						</div>
					)}
					{receipt && (
						<div>Mined in block {receipt.blockNumber?.toString()}</div>
					)}
				</div>
			</div>
			<p className="mt-3 text-base-content">
				Check out <a href="https://docs.okcontract.com">OKcontract docs</a> to
				learn more.
			</p>
		</>
	);
};

export default App;
