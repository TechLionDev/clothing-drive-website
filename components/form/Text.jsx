const Text = ({ label, placeholder, type, required }) => {
  return (
    <>
      <div className='flex flex-col'>
        <label className='text-left'>{label}:</label>
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          className='w-full p-2 transition duration-300 ease-in-out border-2 rounded-lg border-surface2 bg-surface0 text-text focus:outline-none focus:border-blue hover:border-blue hover:bg-surface1'
        />
      </div>
    </>
  );
};

export default Text;
