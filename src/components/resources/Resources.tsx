import Books from './Books';
import Newsletters from './Newsletters';

const Resources = () => {
	return (
		<div className="max-w-4xl mx-auto px-6 py-16">
			<h1 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
				Resources
			</h1>
			<p className="text-xl text-gray-600 mb-16 font-light leading-relaxed">
				A curated collection of newsletters and books that inspire and inform my
				work.
			</p>

			<Newsletters />
			<Books />
		</div>
	);
};

export default Resources;
