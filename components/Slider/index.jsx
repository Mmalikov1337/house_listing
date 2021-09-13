import React from "react";
import ChevronLeft from "../SVG/ChevronLeft";
import ChevronRight from "../SVG/ChevronRight";
import Dots from "./Dots";
import {Slide, SlideButtonNext, SlideButtonPrev, SliderContainer} from "./style";

export default function Slider(props) {
	const [active, setActive] = React.useState(0)
	const nextSlide = () => {
		if (active !== props.images.length - 1) {
			return setActive(active + 1)
		}
		setActive(0)
	}
	const prevSlide = () => {
		if (active !== 0) {
			return setActive(active - 1)
		}
		setActive(props.images.length - 1)
	}
	return (
		<SliderContainer>
			{
				props.images.map((img, ix) => (
					<Slide active={active === ix} key={img}>
						<img src={img} alt={`slide_${ix}`}/>
					</Slide>
				))
			}
			{props.images.length > 1 && <>
				<SlideButtonPrev onClick={prevSlide}>
					<ChevronLeft/>
				</SlideButtonPrev>
				<SlideButtonNext onClick={nextSlide}>
					<ChevronRight/>
				</SlideButtonNext>
				<Dots activeIndex={active} setActive={(ix) => setActive(ix)} len={props.images.length}/>
			</>
			}
		</SliderContainer>)
}
