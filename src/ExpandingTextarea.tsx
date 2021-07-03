import React, { useRef, useState } from 'react';
import {
  Textarea,
  TextareaClone,
  TEXTAREA_PADDING,
  TEXTAREA_HEIGHT,
  TextareaContainer,
} from './Atoms';

export const ExpandingTextarea = ({
  onChange,
  placeholder,
}: {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder: string;
}) => {
  const [height, setHeight] = useState<number>(TEXTAREA_HEIGHT);
  const textareaClone = useRef<HTMLTextAreaElement>(null);

  const onChangeInner: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    onChange(event);
    if (!textareaClone.current) {
      return;
    }
    textareaClone.current.value = event.target.value;
    const targetHeight = Math.max(
      textareaClone.current.scrollHeight - 2 * TEXTAREA_PADDING,
      TEXTAREA_HEIGHT
    );
    if (targetHeight !== height) {
      setHeight(targetHeight);
    }
  };

  return (
    <>
      <TextareaClone ref={textareaClone} />
      <TextareaContainer targetHeight={height}>
        <span>{'{'}</span>
        <Textarea
          onChange={onChangeInner}
          placeholder={placeholder}
          targetHeight={height}
        />
        <span>{'}'}</span>
      </TextareaContainer>
    </>
  );
};
