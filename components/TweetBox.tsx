import React, { useState, useRef, Dispatch, SetStateAction } from 'react'
import {
    CalendarIcon,
    PhotoIcon,
    FaceSmileIcon,
    MagnifyingGlassCircleIcon,
    MapIcon
} from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import { Tweet, TweetBody } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'
import toast from 'react-hot-toast'

interface Props {
  setTweets: Dispatch<SetStateAction<Tweet[]>>
}

function TweetBox({ setTweets }: Props) {
  const [input, setInput] = useState<string>('')
  const [image, setImage] = useState<string>('')

  const { data: session } = useSession ()

  const imageInputRef = useRef<HTMLInputElement>(null)

  const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false)

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    postTweet()

    setInput('')
    setImage('')
    setImageUrlBoxIsOpen(false)
  }

  const postTweet = async () => {

    const tweetInfo: TweetBody = {
      text: input,
      username: session?.user?.name || 'Unknown User',
      profileImg: session?.user?.image || 'https://links.papareact.com/gll',
      image: image
    }

    console.log(tweetInfo)
    
    const result = await fetch(`/api/addTweet`, {
      body: JSON.stringify(tweetInfo),
      method: 'POST',
    })

    const json = await result.json();
    const newTweets = await fetchTweets()
    setTweets(newTweets)
    toast('Tweet posted!')

    return json
  }

  const addImageToTweet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!imageInputRef.current?.value) return;
    setImage(imageInputRef.current?.value)
    imageInputRef.current.value = '';
    setImageUrlBoxIsOpen(false)
  }

  return (
    <div className="flex space-x-2 p-5">
        <img className="mt-4 h-14 w-14 rounded-full object-cover" src={session?.user?.image || "https://links.papareact.com/gll"} alt=""/>
        <div className="flex flex-1 items-center pl-2">
            <form className="flex flex-1 flex-col">
                <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="What's happening?" className="h-24 w-full text-xl outline-none placeholder:text-xl" />
                <div className="flex items-center justify-between ">
                <div className="flex space-x-2 text-twitter">
                  <PhotoIcon onClick={()=> setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)} className="h-5 w-5 cursor-pointer transition-all duration-150 eas-out hover:scale-150"/>
                  <MagnifyingGlassCircleIcon className="h-5 w-5 cursor-pointer transition-all duration-150 eas-out hover:scale-150"/>
                  <FaceSmileIcon className="h-5 w-5 cursor-pointer transition-all duration-150 eas-out hover:scale-150"/>
                  <CalendarIcon className="h-5 w-5 cursor-pointer transition-all duration-150 eas-out hover:scale-150"/>
                  <MapIcon className="h-5 w-5 cursor-pointer transition-all duration-150 eas-out hover:scale-150"/>
                </div>
                <button disabled={!input} onClick={handleSubmit} className="bg-twitter px-5 py-2 text-white font-bold rounded-full disabled:opacity-40">Tweet</button>
                </div>

                {imageUrlBoxIsOpen && (
                  <form className="rounded-lg mt-5 flex bg-twitter/80 py-2 px-4">
                    <input ref={imageInputRef} className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white" type="text" placeholder="Place image URL here ..."/>
                    <button type="submit" onClick={(e) => addImageToTweet(e)} className="font-bold text-white">Add image</button>
                  </form>
                )}

                {image && (
                  <img className="mt-10 h-40 w-full rounded-xl object-contain shadow-large" src={image} alt=""/>
                )}
            </form>
        </div>
    </div>
  )
}

export default TweetBox