export const onChangeInputFunc = (
  e: React.ChangeEvent<HTMLInputElement>,
  setState: any,
  currentState: any
) => {
  if (currentState) {
    setState({
      ...currentState,
      [e.target.name]: e.target.value,
    });
  }
};
export const onChangeDateFunc = (
  name: string,
  value: any,
  setState: any,
  currentState: any
) => {
  if (currentState) {
    setState({
      ...currentState,
      [name]: value,
    });
  }
};

export const onChangeTextAreaFunc = (
  e: React.ChangeEvent<HTMLTextAreaElement>,
  setState: any,
  currentState: any
) => {
  if (currentState) {
    setState({
      ...currentState,
      [e.target.name]: e.target.value,
    });
  }
};
