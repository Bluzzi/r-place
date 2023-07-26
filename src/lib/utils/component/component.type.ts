import type { Dispatch, ReactElement, SetStateAction } from "react";

export type Component<Props = object> = (props: Props) => ReactElement;
export type AsyncComponent<Props = object> = (props: Props) => Promise<ReactElement>;

export type SetState<T> = Dispatch<SetStateAction<T>>;