const LikeButton = ({
  liked,
  toggleLike,
}: {
  liked: boolean;
  toggleLike: () => void;
}) => {
  return (
    <button
      className={`flex items-center justify-center px-2 py-1 rounded-md shadow-sm 
        ${liked ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}
        hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
      onClick={() => toggleLike()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 mr-1 ${liked ? 'text-white' : 'text-gray-600'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18l-1.45-1.32C4.4 12.45 2 10.67 2 7.5 2 5.42 3.42 4 5.5 4c1.54 0 3.04.99 4.5 2.45C11.96 4.99 13.46 4 15 4c2.08 0 3.5 1.42 3.5 3.5 0 3.17-2.4 4.95-6.55 9.18L10 18z"
          clipRule="evenodd"
        />
      </svg>
      {liked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
