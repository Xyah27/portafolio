"use client";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";

import { MouseEventHandler, PropsWithChildren, HTMLAttributes } from "react";

type CardProps = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({ children, className = "", style, ...rest }) => {
	const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
	const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

	function onMouseMove({ currentTarget, clientX, clientY }: any) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}
	const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
	const maskStyle = { maskImage, WebkitMaskImage: maskImage };

	       return (
		       <div
			       onMouseMove={onMouseMove}
			       className={`overflow-hidden relative duration-700 border rounded-xl hover:bg-purple-900/10 group md:gap-8 hover:border-purple-400/50 border-purple-800/50 ${className}`}
			       style={style}
			       {...rest}
		       >
			<div className="pointer-events-none">
				<div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
				<motion.div
					className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-purple-300/10  transition duration-1000 group-hover:opacity-50 "
					style={maskStyle}
				/>
				<motion.div
					className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
					style={maskStyle}
				/>
			</div>

			{children}
		</div>
	);
};
