import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	selectedArticle: null,
    articleIsOpen: false
};


export const articleSlice = createSlice({
	name: 'article',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {

		selectArticle: (state, action) => {
			state.selectedArticle = action.payload;
		},

        openArticle: (state) => {
            state.articleIsOpen = true;
        },

        closeArticle: (state) => {
            state.articleIsOpen = false;
        }
	},

});

export const { selectArticle, openArticle, closeArticle } = articleSlice.actions;

export const selectArticleIsOpen = (state) => state.article.articleIsOpen;
export const selectOpenArticle = (state) => state.article.selectedArticle;


export default articleSlice.reducer;