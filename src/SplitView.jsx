import React from "react";
import { useEffect, useRef } from "react";
import "./SplitView.css"

function SplitView(props) {
	const resizer = useRef(null);
	const leftSide = useRef(null);
	const rightSide = useRef(null);

	useEffect(() => {
		let resizerRef;
		let mousePos, leftWidth, containerWidth;

		function mouseDownHandler(event) {
			// Get the current mouse position
			mousePos = {
				x: event.clientX,
				y: event.clientY,
			};

			// Set initial widths
			leftWidth = leftSide.current.getBoundingClientRect().width;
			containerWidth = resizer.current.parentNode.getBoundingClientRect().width;
		
			// Attach the listeners to `document`
			document.addEventListener('mousemove', mouseMoveHandler);
			document.addEventListener('mouseup', mouseUpHandler);
		}
		function mouseMoveHandler(event) {
			document.body.style.cursor = 'col-resize';
			document.body.style.userSelect = 'none';
			document.body.style.pointerEvents = 'none';

			const dx = event.clientX - mousePos.x;
			const dy = event.clientY - mousePos.y;
			mousePos = {
				x: event.clientX,
				y: event.clientY,
			};
		
			leftWidth = leftWidth + dx;
			leftSide.current.style.width = `${100 * leftWidth / containerWidth}%`;
		}
		function mouseUpHandler(event) {
			document.body.style.removeProperty('cursor');
			document.body.style.removeProperty('user-select');
			document.body.style.removeProperty('pointer-events');

			// Remove the handlers of `mousemove` and `mouseup`
			document.removeEventListener('mousemove', mouseMoveHandler);
			document.removeEventListener('mouseup', mouseUpHandler);
		}

		if (resizer && resizer.current) {
			resizerRef = resizer.current;
			resizer.current.addEventListener("mousedown", mouseDownHandler);
		}

		return function cleanup() {
			resizerRef.removeEventListener("mousedown", mouseDownHandler);
		};
	}, []);

	return (
		<div className="split-view" data-testid="split-view">
			<div ref={leftSide} style={{width: "50%"}}>{props.leftView}</div>
			<div ref={resizer} className="resizer"></div>
			<div ref={rightSide} style={{flex: "1 1 0%"}}>{props.rightView}</div>
		</div>
	);
}

export default SplitView;