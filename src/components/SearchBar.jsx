import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements.searchInput.value.trim();
    if (inputValue === '') {
      toast.error('Please enter search term!');
      return;
    }
    onSubmit(inputValue);
    event.target.reset();
  };
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleSubmit}>
        <input name="searchInput" type="text" autoComplete="off" autoFocus />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;
