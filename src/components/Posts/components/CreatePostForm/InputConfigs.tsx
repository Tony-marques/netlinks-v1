import {ChangeEvent, RefObject} from "react";

export const inputConfigs = (handleOnChange: (e: ChangeEvent<HTMLTextAreaElement>) => void, contentRef: RefObject<HTMLTextAreaElement>) => [
    {
        id: 2,
        type: "text",
        name: "content",
        placeholder: "contenu",
        ref: contentRef,
        onChange: handleOnChange
    }
];