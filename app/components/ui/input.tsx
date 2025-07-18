import * as React from "react";

import { cn } from "~/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
	error?: string[];
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, error, ...props }, ref) => {
		return (
			<div className="flex-col gap-1">
				<input
					type={type}
					className={cn(
						"flex h-9 w-full p-2 font-poppins border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
						className
					)}
					ref={ref}
					{...props}
				/>
				{error && <span className="text-red-500 text-sm">{error}</span>}
			</div>
		);
	}
);
Input.displayName = "Input";

export { Input };
