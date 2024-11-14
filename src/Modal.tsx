import React from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { ModalProps } from "./types";

export const Modal = (
  { sectionClassName, pClassName, btnClassName, iconClassName, message, onHandleClick }: ModalProps) => {

  return (
    <section className={sectionClassName}>
      <p className={pClassName}>{message}</p>
      <button className={btnClassName} onClick={onHandleClick}>
        <XMarkIcon className={iconClassName} />
      </button>
    </section>
  );
};