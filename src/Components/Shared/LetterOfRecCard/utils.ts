export const disableBodyScroll = () => {
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
};

export const enableBodyScroll = () => {
  document.body.style.overflow = "auto";
  document.body.style.position = "";
  document.body.style.width = "";
};
