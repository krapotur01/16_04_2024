import {StaticImageData} from "next/image";

export default interface SliderProps {
    data: {
        id: number;
        src: StaticImageData;
        comment: string;
        name: string;
        profession: string;
    }[];
    index: number
    turnLeft: VoidFunction;
    turnRight: VoidFunction;
};