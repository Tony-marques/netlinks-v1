import {ChangeEvent} from "react";

export const inputConfigs = (handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void, titleRef) => [
    {
        id: 1,
        type: "text",
        name: "title",
        placeholder: "titre",
        ref: titleRef,
        onChange: handleOnChange
    },
    {
        id: 2,
        type: "text",
        name: "content",
        placeholder: "contenu",
        onChange: handleOnChange
    }
];