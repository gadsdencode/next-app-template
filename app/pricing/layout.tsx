export default function PricingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
    <section className="flex flex-col h-screen justify-between items-center overflow-hidden">
    <div className="flex flex-grow items-stretch inline-block max-w-lg text-center justify-center">
				{children}
			</div>
		</section>
	);
}
