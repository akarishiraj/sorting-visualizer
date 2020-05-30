import React, { useRef, useImperativeHandle, forwardRef } from "react";

import Button from "../UI/Button/Button";

let PlayControls = (props, ref) => {
	let playControls = useRef();

	useImperativeHandle(ref, () => ({
		classList: playControls.current.classList,
	}));

	return (
		<div className="play-controls" ref={playControls}>
			<div className="buttons">
				<svg
					onClick={props.backwardStepClicked}
					disabled={props.disabled}
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="step-backward"
					className="svg-inline--fa fa-step-backward fa-w-14"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
				>
					<path
						fill="currentColor"
						d="M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"
					></path>
				</svg>
				{props.paused ? (
					<Button
						className="play-control"
						clicked={props.playClicked}
						disabled={props.disabled}
					>
						{props.playText}
					</Button>
				) : (
					<Button
						className="burgundy play-control"
						clicked={props.pauseClicked}
						disabled={props.disabled}
					>
						{props.pauseText}
					</Button>
				)}
				<svg
					onClick={props.forwardStepClicked}
					disabled={props.disabled}
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="step-forward"
					className="svg-inline--fa fa-step-forward fa-w-14"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
				>
					<path
						fill="currentColor"
						d="M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"
					></path>
				</svg>
			</div>
		</div>
	);
};

PlayControls = forwardRef(PlayControls);

export default PlayControls;
