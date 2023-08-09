export default function PricingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full w-full flex justify-center items-center overflow-hidden">
    <div className="flex flex-grow items-stretch inline-block max-w-lg text-center justify-center">
				{children}
			</div>
		</section>
	);
}
