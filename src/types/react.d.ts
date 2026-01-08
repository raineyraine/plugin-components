import type { Binding, InferEnumNames } from "@rbxts/react";

type ComponentProperty<T> = InferEnumNames<T> | T;
type ReactAttribute<T> = Binding<T> | ComponentProperty<T>;
