import { title } from "@/components/primitives";
import Image from "next/image";

export default function PricingPage() {
	return (
    <div className="bg-white flex justify-center items-center">
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
		<h1 className={title()}>Pricing</h1>
        </div>
      </header>
      <div className="container mx-auto my-8 flex-grow">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow transform transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4">
            <Image src="/logo2.png" alt="Product Image" width={300} height={200} />
            <h3 className="text-lg font-bold my-2">Product 1</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded-full">Add to Cart</button>
          </div>
          <div className="bg-white rounded-lg shadow transform transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4">
            <Image src="/logo2.png" alt="Product Image" width={300} height={200} />
            <h3 className="text-lg font-bold my-2">Product 2</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded-full">Add to Cart</button>
          </div>
          <div className="bg-white rounded-lg shadow transform transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4">
            <Image src="/logo2.png" alt="Product Image" width={300} height={200} />
            <h3 className="text-lg font-bold my-2">Product 3</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded-full">Add to Cart</button>
          </div>
          <div className="bg-white rounded-lg shadow transform transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4">
            <Image src="/logo2.png" alt="Product Image" width={300} height={200} />
            <h3 className="text-lg font-bold my-2">Product 1</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded-full">Add to Cart</button>
          </div>
          <div className="bg-white rounded-lg shadow transform transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4">
            <Image src="/logo2.png" alt="Product Image" width={300} height={200} />
            <h3 className="text-lg font-bold my-2">Product 2</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded-full">Add to Cart</button>
          </div>
          <div className="bg-white rounded-lg shadow transform transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4">
            <Image src="/logo2.png" alt="Product Image" width={300} height={200} />
            <h3 className="text-lg font-bold my-2">Product 3</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded-full">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
	);
}
