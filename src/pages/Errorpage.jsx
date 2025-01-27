

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-50 overflow-hidden p-6 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        Oops! Something went wrong.
    </h1>
      <p className="text-lg text-gray-600 mb-8">
        We're sorry, but the page you're looking for cannot be found or an error
        occurred.
      </p>
      <div className="mb-8">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7465/7465751.png" // Replace with your own error image or icon
          alt="Error"
          className="w-36 h-36"
        />
      </div>
      <button
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={() => (window.location.href = "/")} // Redirect to home or reload the page
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
