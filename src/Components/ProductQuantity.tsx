import React from "react";
import { Select, SelectOption, SelectList } from "@patternfly/react-core/next";
import { MenuToggle, MenuToggleElement } from "@patternfly/react-core";

interface IProps {
  selectedValue: number;
  onSelectValue: (value: number) => void;
}

export const ProductQuantity = (props: IProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  // const [selected, setSelected] = React.useState<number>(1);

  const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
  ];

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (
    _event: React.MouseEvent<Element, MouseEvent> | undefined,
    itemId: string | number | undefined
  ) => {
    // setSelected(itemId as number);
    props.onSelectValue(itemId as number);
    setIsOpen(false);
  };

  const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
    <MenuToggle
      ref={toggleRef}
      onClick={onToggleClick}
      isExpanded={isOpen}
      style={
        {
          width: "200px",
        } as React.CSSProperties
      }
    >
      {props.selectedValue}
    </MenuToggle>
  );

  return (
    <Select
      id="single-select"
      isOpen={isOpen}
      selected={props.selectedValue}
      onSelect={onSelect}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
      toggle={toggle}
    >
      <SelectList>
        {options.map((option, index) => (
          <SelectOption key={index} itemId={option.value}>
            {option.label}
          </SelectOption>
        ))}
      </SelectList>
    </Select>
  );
};
