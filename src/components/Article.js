import React from 'react';
import { useState } from 'react';

const Article = ({ article }) => {
    const [isEditing, setIsEditing] = useState(false);

    const dateFormater = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-FR', {
            years: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });
        return newDate;
    };

    return (
        <div className="article">
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>Posté le {dateFormater(article.date)}</em>
            </div>
            {   isEditing ? <textarea>{article.content}</textarea> : <p>{article.content}</p> }

            <div className="btn-container">
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button>Supprimer</button>
            </div>
        </div>
    );
};

export default Article;
