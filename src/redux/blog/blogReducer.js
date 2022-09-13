import { AUTHOR_IMAGE, AUTHOR_NAME, CATEGORY, TITLE } from "./actionTypes";

const initialState = [
  {
    id: 1,
    category: "Article",
    image:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    author_logo: "https://avatars.githubusercontent.com/u/73503432?v=4",
    author_name: "Sumit",
    title: "Boost your conversion rate",
  },
  {
    id: 2,
    category: "Poem",
    image:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    author_logo:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
    author_name: "Rihanna",
    title: "How to use search engine optimization to drive sales",
  },
  {
    id: 3,
    category: "Song",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    author_logo: "https://www.w3schools.com/howto/img_avatar2.png",
    author_name: "Shakira",
    title: "Improve your customer experience",
  },
  {
    id: 4,
    category: "Song",
    image:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    author_logo: "https://avatars.githubusercontent.com/u/73503432?v=4",
    author_name: "Sumit",
    title: "Shine bright like a diamond",
  },
  {
    id: 5,
    category: "Poem",
    image:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    author_logo:
      "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
    author_name: "Charlie puth",
    title: "Smoke like butter BTS",
  },
  {
    id: 6,
    category: "Article",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    author_logo:
      "https://us.123rf.com/450wm/yupiramos/yupiramos1610/yupiramos161007352/64369849-young-man-avatar-isolated-icon-vector-illustration-design.jpg?ver=6",
    author_name: "Rihanna",
    title: "Oh, na,na, what's my name",
  },
];

const blogReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case CATEGORY:
      return state.filter((item) => item.category === action.payload);
    case AUTHOR_NAME:
      return state.filter((item) => item.author_name === action.payload);
    case AUTHOR_IMAGE:
      return state.filter((item) => item.author_logo === action.payload);

    case TITLE:
      return {
        ...state,
        title: state.title.toLowerCase().includes(action.payload.toLowerCase()),
      };
    // return state.filter((item) => item.title === action.payload);

    default:
      return state;
  }
};

export default blogReducer;
