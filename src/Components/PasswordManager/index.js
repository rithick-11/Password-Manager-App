import {Component} from 'react'
import {v4} from 'uuid'
import NoPassword from '../NoPassword'
import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    inputUrl: '',
    inputUsername: '',
    inputPassword: '',
    passwordList: [],
    searchInput: '',
    showPassword: false,
  }

  addPassword = e => {
    e.preventDefault()
    const {inputUrl, inputUsername, inputPassword} = this.state
    const newPassword = {
      id: v4(),
      website: inputUrl,
      username: inputUsername,
      password: inputPassword,
    }
    this.setState(pre => ({
      passwordList: [...pre.passwordList, newPassword],
      inputPassword: '',
      inputUrl: '',
      inputUsername: '',
    }))
  }

  deletePassword = id => {
    console.log('adasdad')
    this.setState(pre => ({
      passwordList: pre.passwordList.filter(each => each.id !== id),
    }))
  }

  render() {
    const {
      inputUrl,
      inputUsername,
      inputPassword,
      passwordList,
      showPassword,
      searchInput,
    } = this.state

    const filteredPassswords = passwordList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-[#9ba9eb] min-h-screen">
        <div className="container py-3 px-3 mx-auto flex flex-col  gap-3 items-start">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="h-[3rem]"
          />
          <div className="bg-[#5763a5] rounded-md w-full py-4 px-2 flex flex-col md:flex-row-reverse gap-3 justify-center">
            <div className=" self-center md:grow md:shrink-0">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt="password manager"
                className="h-[268px] mx-auto"
              />
            </div>
            <form
              onSubmit={this.addPassword}
              className="bg-[#454f84] py-3 px-4 flex flex-col md:grow md:shrink-0 gap-3 rounded-md"
            >
              <h1 className="text-white text-xl font-bold">Add New Password</h1>
              <div className="flex gap-2 items-center bg-white px-2 rounded-sm ">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="h-[1.5rem]"
                />
                <input
                  type="text"
                  required
                  value={inputUrl}
                  className="w-full px-3 py-1 outline-none border-l-[.5px] border-[#94a3b8]"
                  placeholder="Enter Website"
                  onChange={e => this.setState({inputUrl: e.target.value})}
                />
              </div>
              <div className="flex gap-2 items-center bg-white px-2 rounded-sm ">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="h-[1.5rem]"
                />
                <input
                  type="text"
                  required
                  value={inputUsername}
                  className="w-full px-3 py-1 outline-none border-l-[.5px] border-[#94a3b8]"
                  placeholder="Enter Username"
                  onChange={e => this.setState({inputUsername: e.target.value})}
                />
              </div>
              <div className="flex gap-2 items-center bg-white px-2 rounded-sm ">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="h-[1.5rem]"
                />
                <input
                  type="password"
                  required
                  value={inputPassword}
                  className="w-full px-3 py-1 outline-none border-l-[.5px] border-[#94a3b8]"
                  placeholder="Enter Password"
                  onChange={e => this.setState({inputPassword: e.target.value})}
                />
              </div>
              <button
                type="submit"
                className="bg-[#0b69ff] px-3 py-2 text-white font-bold self-end rounded-sm"
              >
                Add
              </button>
            </form>
          </div>
          <div className="bg-[#454f84] w-full py-3 px-4 flex flex-col gap-3 rounded-md">
            <div className="flex justify-between">
              <div className="flex items-center gap-2 text-white font-bold">
                <h1>Your Passwords</h1>
                <p className="p-1 rounded-full bg-red-500">
                  {filteredPassswords.length}
                </p>
              </div>
              <div className="flex gap-2 items-center bg-white px-2 rounded-sm ">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="h-[1rem]"
                />
                <input
                  type="Search"
                  className="w-[120px] px-1 outline-none border-l-[.5px] border-[#94a3b8]"
                  value={searchInput}
                  onChange={e => {
                    this.setState({searchInput: e.target.value})
                  }}
                  placeholder="Search"
                />
              </div>
            </div>
            <hr />
            <div className="self-end flex items-center">
              <input
                type="checkbox"
                id="showPass"
                checked={showPassword}
                onChange={e => this.setState({showPassword: e.target.checked})}
              />
              <label htmlFor="showPass" className="text-white ml-2">
                Show passwords
              </label>
            </div>
            {filteredPassswords.length === 0 && <NoPassword />}
            {filteredPassswords.length !== 0 && (
              <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredPassswords.map(each => (
                  <PasswordItem
                    key={each.id}
                    data={each}
                    deletePassword={this.deletePassword}
                    showPassword={showPassword}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
