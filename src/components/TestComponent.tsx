import type { BaseProps } from "@types";

interface TestComponentProps extends BaseProps {
	message: string;
}

export default function TestComponent({
	message,
	className,
}: TestComponentProps) {
	return (
		<div className={`p-4 bg-blue-100 rounded-lg ${className || ""}`}>
			<p className="text-blue-800">{message}</p>
		</div>
	);
}
