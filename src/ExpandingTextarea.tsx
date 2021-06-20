import React, { useRef, useState } from 'react';
import {
  Textarea,
  TextareaClone,
  TEXTAREA_PADDING,
  TEXTAREA_HEIGHT,
} from './Atoms';

export const ExpandingTextarea = ({
  onChange,
  placeholder,
}: {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder: string;
}) => {
  const [height, setHeight] = useState<number>(0);
  const textareaClone = useRef<HTMLTextAreaElement>(null);

  const onChangeInner: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    onChange(event);
    if (!textareaClone.current) {
      return;
    }
    textareaClone.current.value = event.target.value;
    const targetHeight =
      textareaClone.current.scrollHeight - 2 * TEXTAREA_PADDING;
    if (targetHeight > TEXTAREA_HEIGHT) {
      if (targetHeight !== height) {
        setHeight(targetHeight);
      }
    } else if (height > 0) {
      setHeight(0);
    }
  };

  const style = height
    ? {
        height,
        borderRadius: height / 2 + TEXTAREA_PADDING,
        padding: `${TEXTAREA_PADDING}px ${(height + TEXTAREA_PADDING) / 2}px`,
      }
    : {};

  return (
    <>
      <TextareaClone ref={textareaClone} />
      <Textarea
        onChange={onChangeInner}
        placeholder={placeholder}
        style={style}
      />
    </>
  );
};
