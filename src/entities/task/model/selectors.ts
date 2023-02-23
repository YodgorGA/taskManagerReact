import { useAppSelector } from "app/store/hooks";
import { selectTaskInfo, taskSliceState } from "./taskSlice";

export const useTasks = () =>useAppSelector<taskSliceState>(selectTaskInfo);

export{}