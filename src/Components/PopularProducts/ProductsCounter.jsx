import { useState } from 'react';
import './PopularProducts.css';
import { motion, AnimatePresence } from 'framer-motion';
function ProductsCounter({ unit }) {
	const [count, setCount] = useState(0);
	return (
		<>
			<AnimatePresence mode="wait">
				{count === 0 ? (
					<motion.button
						key="add"
						className="add-to-cart"
						onClick={() => setCount(1)}
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: 50, opacity: 0 }}
						transition={{ duration: 0.35 }}
					>
						<div className="icon">
							<svg
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.92848 8.44807V4.74277C9.92848 4.54623 9.8504 4.35774 9.71143 4.21876C9.57245 4.07978 9.38396 4.00171 9.18742 4.00171C8.99088 4.00171 8.80238 4.07978 8.66341 4.21876C8.52443 4.35774 8.44636 4.54623 8.44636 4.74277V8.44807H4.74106C4.54452 8.44807 4.35603 8.52614 4.21705 8.66512C4.07808 8.80409 4 8.99259 4 9.18913C4 9.38567 4.07808 9.57416 4.21705 9.71314C4.35603 9.85211 4.54452 9.93019 4.74106 9.93019H8.44636V13.6355C8.44636 13.832 8.52443 14.0205 8.66341 14.1595C8.80238 14.2985 8.99088 14.3765 9.18742 14.3765C9.38396 14.3765 9.57245 14.2985 9.71143 14.1595C9.8504 14.0205 9.92848 13.832 9.92848 13.6355V9.93019H13.6338C13.8303 9.93019 14.0188 9.85211 14.1578 9.71314C14.2968 9.57416 14.3748 9.38567 14.3748 9.18913C14.3748 8.99259 14.2968 8.80409 14.1578 8.66512C14.0188 8.52614 13.8303 8.44807 13.6338 8.44807H9.92848Z"
									fill="white"
								/>
							</svg>
						</div>
						<span>افزودن به سبد خرید</span>
					</motion.button>
				) : (
					<motion.div
						key="counter"
						className="counter"
						initial={{ x: 50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -50, opacity: 0 }}
						transition={{ duration: 0.35 }}
					>
						<button className="icon" onClick={() => setCount(count + 1)}>
							<svg
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.92848 8.44807V4.74277C9.92848 4.54623 9.8504 4.35774 9.71143 4.21876C9.57245 4.07978 9.38396 4.00171 9.18742 4.00171C8.99088 4.00171 8.80238 4.07978 8.66341 4.21876C8.52443 4.35774 8.44636 4.54623 8.44636 4.74277V8.44807H4.74106C4.54452 8.44807 4.35603 8.52614 4.21705 8.66512C4.07808 8.80409 4 8.99259 4 9.18913C4 9.38567 4.07808 9.57416 4.21705 9.71314C4.35603 9.85211 4.54452 9.93019 4.74106 9.93019H8.44636V13.6355C8.44636 13.832 8.52443 14.0205 8.66341 14.1595C8.80238 14.2985 8.99088 14.3765 9.18742 14.3765C9.38396 14.3765 9.57245 14.2985 9.71143 14.1595C9.8504 14.0205 9.92848 13.832 9.92848 13.6355V9.93019H13.6338C13.8303 9.93019 14.0188 9.85211 14.1578 9.71314C14.2968 9.57416 14.3748 9.38567 14.3748 9.18913C14.3748 8.99259 14.2968 8.80409 14.1578 8.66512C14.0188 8.52614 13.8303 8.44807 13.6338 8.44807H9.92848Z"
									fill="white"
								/>
							</svg>
						</button>
						<span>
							{count} {unit}
						</span>
						<button className="icon" onClick={() => setCount(count - 1)}>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M19.875 11.625H4.125"
									stroke="white"
									stroke-width="2.25"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default ProductsCounter;
