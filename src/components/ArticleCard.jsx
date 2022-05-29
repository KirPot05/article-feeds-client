import React from "react";
import { useDispatch } from "react-redux";
import { openArticle, selectArticle } from "../features/articleSlice";


function ArticleCard({title, description, category, id}) {

    const truncate = (text) => {
        return text.slice(0, 120) + "...";
    }

    const dispatch = useDispatch();


    const openArticleDialog = () => {
        dispatch(selectArticle({
            id: id,
            title: title,
            description: description,
            imgUrl: "https://st2.depositphotos.com/2026267/5233/i/950/depositphotos_52334423-stock-photo-news-article-on-digital-tablet.jpg"
        }));

        dispatch(openArticle());
    }

    return (
        <React.Fragment>
            <div 
                className="flex flex-col w-72 bg-white p-8 rounded-md cursor-pointer shadow-md"
                onClick={openArticleDialog}
            >
                <div className="flex items-center justify-center">
                    <img
                        className="object-contain h-32 rounded-sm"
                        src="https://st2.depositphotos.com/2026267/5233/i/950/depositphotos_52334423-stock-photo-news-article-on-digital-tablet.jpg"
                        alt="" />
                </div>

                <div className="mt-5">
                    <h3 className="font-bold text-xl mb-2">{title}</h3>
                    <p className="text-lg">{truncate(description || "")}</p>
                    <p className="mt-5"> <span className="font-bold mr-1"> Category: </span> {category} </p>
                </div>

            </div>

        </React.Fragment>
    )
}

export default ArticleCard