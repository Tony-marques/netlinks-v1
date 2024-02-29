import {ChangeEvent} from "react";

export const modalConfigs = (handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void) => [
    {
        id: 1,
        type: "text",
        name: "title",
        onChange: handleOnChange
    },
    {
        id: 2,
        type: "text",
        name: "content",
        onChange: handleOnChange
    }
];