let tl = gsap.timeline();

tl.from(".love-and-highlife .album-title span", 3, {
	y: 150,
	opacity: 0,
	stagger: {
		amount: 1.5,
	},
})
	.from(
		".love-and-highlife .album-table tr",
		1.5,
		{
			y: 50,
			opacity: 0,
			stagger: {
				amount: 1,
			},
		},
		"-=2.5"
	)
	.from(
		".love-and-highlife .album-image",
		3,
		{
			"clip-path": "polygon(0 0, 100% 0, 100% 0.1%, 0 0.1%)",
			ease: "sine.inOut",
		},
		"-=2.5"
	);
