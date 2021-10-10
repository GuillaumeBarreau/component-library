export interface ComponentInputProps {
  className?: string;
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: "text"
  placeholder?: string;
  value: string | undefined;
}