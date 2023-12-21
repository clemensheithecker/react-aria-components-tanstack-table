import type { ColumnProps as ColumnPrimitiveProps } from "react-aria-components";
import { Column as ColumnPrimitive } from "react-aria-components";

type ColumnProps = Omit<ColumnPrimitiveProps, "className" | "styles">;

export function Column(props: ColumnProps) {
  return (
    <ColumnPrimitive
      className="px-2 py-1 text-left outline-none focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#7a54ef]"
      {...props}
    >
      {({ allowsSorting, sortDirection }) => (
        <>
          {props.children}
          {allowsSorting && (
            // TODO: Hide sort indicator when not sorted
            <span aria-hidden="true" className="px-0.5 py-0">
              {sortDirection === "ascending" ? "▲" : "▼"}
            </span>
          )}
        </>
      )}
    </ColumnPrimitive>
  );
}
