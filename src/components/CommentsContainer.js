import React from "react";

const commentsData = [
  {
    name: "Parm Musale",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Parm Musale",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Parm Musale",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Parm Musale",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Parm Musale",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Parm Musale",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Parm Musale",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Parm Musale",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  // Add more sample comments as needed
];

// Comment component to display individual comment
const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex bg-white shadow-md p-3 rounded-lg my-3">
      <img
        className="w-12 h-12 rounded-full"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="ml-4">
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
};

// Recursive component to display nested comments and replies
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="ml-8">
      <Comment data={comment} />
      {comment.replies.length > 0 && (
        <div className="pl-6 border-l-2 border-gray-300">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

// Main comments container component
const CommentsContainer = () => {
  return (
    <div className="m-6 p-4 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
