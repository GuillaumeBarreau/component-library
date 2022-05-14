export interface ComponentInputProps {
  className?: string;
  namedInput: string;
  labelDescription: string;
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: "text";
  placeholder?: string;
  value: string | undefined;
}
