import { AUTHOR_IMAGE, AUTHOR_NAME, CATEGORY, TITLE } from "./actionTypes";

export const filterCategory = (value) => {
  return {
    type: CATEGORY,
    payload: value,
  };
};

export const filterAuthorName = (value) => {
  return {
    type: AUTHOR_NAME,
    payload: value,
  };
};

export const filterAuthorImage = (value) => {
  return {
    type: AUTHOR_IMAGE,
    payload: value,
  };
};

export const filterTitle = (value) => {
  return {
    type: TITLE,
    payload: value,
  };
};
