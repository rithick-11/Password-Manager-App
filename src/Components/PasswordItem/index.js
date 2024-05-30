const PasswordItem = prop => {
  const {data, deletePassword, showPassword} = prop
  const {id, website, username, password} = data

  return (
    <li className="grid grid-cols-5 items-center border-[1px] border-white rounded-md gap-2 px-3 py-1 text-white">
      <div className="h-[2rem] w-[2rem] rounded-full bg-red-300 flex justify-center items-center">
        <h1 className="font-bold text-xl">{website[0].toUpperCase()}</h1>
      </div>
      <div className="col-span-3">
        <p>{website}</p>
        <p className="col-span-3">{username}</p>
        {!showPassword ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="h-[24px]"
          />
        ) : (
          <p>{password}</p>
        )}
      </div>
      <button
        type="button"
        onClick={() => deletePassword(id)}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="h-[1.5rem]"
        />
      </button>
    </li>
  )
}

export default PasswordItem
