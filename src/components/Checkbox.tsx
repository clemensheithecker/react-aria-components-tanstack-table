import type { CheckboxProps as CheckboxPrimitiveProps } from "react-aria-components";
import { Checkbox as CheckboxPrimitive } from "react-aria-components";

type CheckboxProps = Omit<CheckboxPrimitiveProps, "className" | "styles">;

function Checkbox({ children, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive
      className="group flex items-center gap-[0.571rem] text-[1.143rem] text-[#393939] forced-color-adjust-none"
      {...props}
    >
      {({ isIndeterminate }) => (
        <>
          <div className="flex size-[1.143rem] items-center justify-center rounded border-2 border-[#6f46ed] transition-all duration-200 group-indeterminate:border-[#6f46ed] group-indeterminate:bg-[#6f46ed] group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-[#7a54ef] group-pressed:border-[#717171] group-selected:border-[#6f46ed] group-selected:bg-[#6f46ed] group-selected:group-pressed:border-[#522acd] group-selected:group-pressed:bg-[#522acd]">
            <svg
              viewBox="0 0 18 18"
              aria-hidden="true"
              stroke-dasharray="22"
              className="size-4 fill-none stroke-white stroke-[3px] transition-all duration-200 [stroke-dashoffset:66] group-indeterminate:fill-white group-indeterminate:stroke-none group-indeterminate:[stroke-dashoffset:44] group-selected:[stroke-dashoffset:44]"
            >
              {isIndeterminate ? (
                <rect x={1} y={7.5} width={15} height={3} />
              ) : (
                <polyline points="1 9 7 14 15 4" />
              )}
            </svg>
          </div>
          {children}
        </>
      )}
    </CheckboxPrimitive>
  );
}

export default Checkbox;
