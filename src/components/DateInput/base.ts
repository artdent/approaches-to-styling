export interface DateInputProps {
  value: string;
  onChangeString: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onChangeDate: (
    value: Date,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  disabled?: boolean;
}

export const cleaveOptions = {
  date: true,
  datePattern: ["m", "d", "Y"]
};
