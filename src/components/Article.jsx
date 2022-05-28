import { BlockOutlined, Close, ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";
import { Dialog, DialogTitle, DialogActions, DialogContent, IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeArticle, selectArticleIsOpen, selectOpenArticle } from "../features/articleSlice";


function Article() {

	const articleIsOpen = useSelector(selectArticleIsOpen);
    const article = useSelector(selectOpenArticle);
    const dispatch = useDispatch();

	const closeArticleDialog = () => {
        dispatch(closeArticle());
    }

	return (
		<Dialog
			open={articleIsOpen}
			onClose={closeArticleDialog}	

		>
			<DialogTitle>  
				<div className="flex items-center justify-between">
					<h1>{article?.title}</h1>
					<span className="-mr-4 -mt-2">
						<IconButton onClick={closeArticleDialog}>
							<Close/>	
						</IconButton>	
					</span> 
				</div>
			</DialogTitle>
			<DialogContent>
				<div>
					<div>
						<img src={article?.imgUrl} alt="" />
					</div>
					<div className="mt-4">
						<p>{article?.description}</p>
					</div>
				</div>
			</DialogContent>

			<DialogActions 
				sx={{
					'& MuiDialogActions-root': {
						justifyContent: "space-between !important"
					}
				}}
			>
					<div className="flex space-x-2 ml-4">
						<IconButton>
							<ThumbUpOutlined/>
						</IconButton>

						<IconButton>
							<ThumbDownOutlined/>
						</IconButton>

						<IconButton
							onClick={(e) => {
								e.target.style.color = 'red'
							}}
						>
							<BlockOutlined/>
						</IconButton>
					</div>

					<button 
						className="px-6 py-2 mx-4 my-3 bg-gray-600 rounded-lg shadow-md text-white font-bold border-2 border-gray-200 border-solid hover:bg-slate-300 hover:text-gray-700 hover:border-gray-700"
						onClick={closeArticleDialog}
					> Close </button>
			</DialogActions>
		</Dialog>
	)
}

export default Article