import { useState, useCallback, useEffect, useRef } from 'react'

function PasswordGenrator () {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*()_+<>?~`'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copypasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div
        className='flex justify-center items-center'
        style={{ width: '100vw', height: '100vh', backgroundColor: '#000' }}
      >
        <div className='w-full max-w-xl mx-auto shadow-md rounded-lg text-3xl px-4 py-3 my-8 text-orange-500 bg-gray-800'>
          <h1 className='text-white text-2xl text-center p-4'>
            Password Generator
          </h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
              type='text'
              value={password}
              className='outline-none w-full py-1 px-3 font-medium text-lg'
              placeholder='Password'
              readOnly
              ref={passwordRef}
            />
            <button
              className='bg-blue-500 hover:bg-blue-400 text-white  text-2xl py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 shrink-0'
              onClick={copypasswordToClipboard}
            >
              Copy
            </button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input
                type='range'
                min={6}
                max={100}
                value={length}
                onChange={e => {
                  setLength(e.target.value)
                }}
                className='cursor-pointer'
              />
              <label>Length: {length}</label>
            </div>
            <div className='flex text-sm gap-x-2'>
              <input
                type='checkbox'
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={() => {
                  setNumberAllowed(prev => !prev)
                }}
                className='cursor-pointer'
              />
              <label htmlFor='numberInput'>Numbers</label>
            </div>
            <div className='flex text-sm gap-x-2'>
              <input
                type='checkbox'
                defaultChecked={charAllowed}
                id='characterInput'
                onChange={() => {
                  setCharAllowed(prev => !prev)
                }}
                className='cursor-pointer'
              />
              <label htmlFor='characterInput'>Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PasswordGenrator
