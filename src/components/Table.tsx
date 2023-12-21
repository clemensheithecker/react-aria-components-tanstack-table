import type {
  ColumnProps as ColumnPrimitiveProps,
  TableHeaderProps as TableHeaderPrimitiveProps,
} from "react-aria-components";
import {
  Collection,
  Column as ColumnPrimitive,
  TableHeader as TableHeaderPrimitive,
  useTableOptions,
} from "react-aria-components";
import Checkbox from "./Checkbox";

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

type TableHeaderProps<T extends object> = Omit<
  TableHeaderPrimitiveProps<T>,
  "className" | "styles"
>;

export function TableHeader<T extends object>({
  columns,
  children,
}: TableHeaderProps<T>) {
  const { selectionBehavior, selectionMode } = useTableOptions();

  return (
    <TableHeaderPrimitive className="border-b text-[#393939] after:table-row after:h-0.5 after:content-[''] [&>tr]:last:cursor-default [&>tr]:last:border-solid [&>tr]:last:border-[#8f8f8f]">
      {selectionBehavior === "toggle" && (
        <Column>
          {selectionMode === "multiple" && <Checkbox slot="selection" />}
        </Column>
      )}
      <Collection items={columns}>{children}</Collection>
    </TableHeaderPrimitive>
  );
}
