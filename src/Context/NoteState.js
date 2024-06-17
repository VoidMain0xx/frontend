import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
    const initialNotes = [
        {
            "_id": "66645013914aa37142d180b7",
            "user": "6664381bc17985beeaecf088",
            "title": "Another Interesting Book",
            "description": "This book provides deep insights into the world of quantum physics. Enjoy your read!",
            "tag": "Science",
            "date": "2024-05-01T10:00:00.000+00:00",
            "__v": 0
        },
        {
            "_id": "66645013914aa37142d180b8",
            "user": "6664381bc17985beeaecf089",
            "title": "A Journey Through Time",
            "description": "Travel through time and explore different eras with this fascinating narrative.",
            "tag": "History",
            "date": "2024-04-15T15:30:00.000+00:00",
            "__v": 0
        },
        {
            "_id": "66645013914aa37142d180b9",
            "user": "6664381bc17985beeaecf090",
            "title": "Cooking With Love",
            "description": "Discover the secrets to cooking delicious meals with simple ingredients.",
            "tag": "Cooking",
            "date": "2024-03-22T08:45:00.000+00:00",
            "__v": 0
        },
        {
            "_id": "66645013914aa37142d180ba",
            "user": "6664381bc17985beeaecf091",
            "title": "Mastering The Art Of Chess",
            "description": "A comprehensive guide to improving your chess skills, from beginner to advanced levels.",
            "tag": "Games",
            "date": "2024-02-14T19:00:00.000+00:00",
            "__v": 0
        },
        {
            "_id": "66645013914aa37142d180bb",
            "user": "6664381bc17985beeaecf092",
            "title": "The World of Artificial Intelligence",
            "description": "Explore the latest advancements and applications of AI in various fields.",
            "tag": "Technology",
            "date": "2024-01-10T13:20:00.000+00:00",
            "__v": 0
        },
        {
            "_id": "66645013914aa37142d180bc",
            "user": "6664381bc17985beeaecf093",
            "title": "Creative Writing Tips",
            "description": "Enhance your writing skills with these practical tips and exercises.",
            "tag": "Writing",
            "date": "2023-12-05T17:55:00.000+00:00",
            "__v": 0
        },
        {
            "_id": "66645013914aa37142d180bd",
            "user": "6664381bc17985beeaecf094",
            "title": "The Adventures of Sherlock Holmes",
            "description": "Join Sherlock Holmes and Dr. Watson as they solve intriguing mysteries.",
            "tag": "Fiction",
            "date": "2023-11-11T11:11:00.000+00:00",
            "__v": 0
        },
        {
            "_id": "66645013914aa37142d180be",
            "user": "6664381bc17985beeaecf095",
            "title": "The Art of Meditation",
            "description": "Learn how to meditate effectively to reduce stress and improve well-being.",
            "tag": "Health",
            "date": "2023-10-20T09:30:00.000+00:00",
            "__v": 0
        }
    ];

    const [notes, setNotes] = useState(initialNotes);

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
