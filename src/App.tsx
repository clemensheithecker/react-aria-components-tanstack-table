import type { CheckboxProps } from "react-aria-components";
import {
  Cell,
  Checkbox,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "react-aria-components";

function MyCheckbox({ children, ...props }: CheckboxProps) {
  return (
    <Checkbox {...props}>
      {({ isIndeterminate }) => (
        <>
          <div className="checkbox">
            <svg viewBox="0 0 18 18" aria-hidden="true">
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
    </Checkbox>
  );
}

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        React Aria Components and TanStack Table
      </h1>
      <Table aria-label="Files" selectionMode="multiple">
        <TableHeader>
          <Column>
            <MyCheckbox slot="selection" />
          </Column>
          <Column isRowHeader>Name</Column>
          <Column>Type</Column>
          <Column>Date Modified</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              <MyCheckbox slot="selection" />
            </Cell>
            <Cell>Games</Cell>
            <Cell>File folder</Cell>
            <Cell>6/7/2020</Cell>
          </Row>
          <Row>
            <Cell>
              <MyCheckbox slot="selection" />
            </Cell>
            <Cell>Program Files</Cell>
            <Cell>File folder</Cell>
            <Cell>4/7/2021</Cell>
          </Row>
          <Row>
            <Cell>
              <MyCheckbox slot="selection" />
            </Cell>
            <Cell>bootmgr</Cell>
            <Cell>System file</Cell>
            <Cell>11/20/2010</Cell>
          </Row>
          <Row>
            <Cell>
              <MyCheckbox slot="selection" />
            </Cell>
            <Cell>log.txt</Cell>
            <Cell>Text Document</Cell>
            <Cell>1/18/2016</Cell>
          </Row>
        </TableBody>
      </Table>
    </div>
  );
}

export default App;
