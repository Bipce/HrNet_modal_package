export type ModalProps = {
  isOpen: boolean,
  sectionClassName?: string,
  pClassName?: string,
  btnClassName?: string,
  iconClassName?: string,
  message: string,
  onHandleClick?: () => void
}