import { useState } from 'react'
import { CloseWindowIcon, LetsChatIcon } from '../../../icons'
import DoctorChat from '../doctorChat'
import ProviderChat from '../providerChat'

export default function StartChatButton(prop) {
    const { providerId } = prop
    const [openChat, setOpenChat] = useState(false)
    const handleClickChat = () => {
        setOpenChat = !openChat
    } 

    const formWrapper = document.querySelector('.formbold-form-wrapper')
    const crossIcon = document.querySelector('.cross-icon')
    const chatIcon = document.querySelector('.chat-icon')

    function chatboxToogleHandler() {
        formWrapper.classList.toggle('hidden')
        crossIcon.classList.toggle('hidden')
        chatIcon.classList.toggle('hidden')
    }
    return (
        <>
            {/* ====== component ====== */}
            <div className="flex items-center justify-center p-5 w-full">
                <div className="w-full">
                    {/* ======= Pop up Chat ====== */}
                    <div className="formbold-form-wrapper mx-auto hidden w-full max-w-[550px] rounded-lg border border-[#e0e0e0] bg-white">
                        {/* ======= Chat header ====== */}
                        <div className="flex items-center justify-between rounded-t-lg bg-primary py-4 px-9">
                            <h3 className="text-xl font-bold text-white">
                                Let's chat? - Online
                            </h3>
                            <button
                                onClick={chatboxToogleHandler}
                                className="text-white"
                            >
                                <CloseWindowIcon />
                            </button>
                        </div>
                        {/* ========  Chat body ======= */}
                        <DoctorChat />
                    </div>

                    {/* ===== Icon start Chat and close ======= */}
                    <div className="mx-auto mt-12 flex max-w-[550px] items-center justify-end space-x-5">
                        <button
                            className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary text-white"
                            onClick={chatboxToogleHandler}
                        >
                            <span className="cross-icon hidden">
                                <CloseWindowIcon />
                            </span>
                            <span className="chat-icon">
                                <LetsChatIcon />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
