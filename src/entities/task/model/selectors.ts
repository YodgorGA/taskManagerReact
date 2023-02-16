import { useAppSelector } from "app/store/hooks";
import { selectTaskInfo } from "./taskSlice";

export const useTasks = () =>useAppSelector(selectTaskInfo);

export{}