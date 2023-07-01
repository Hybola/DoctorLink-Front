import React from 'react'

export default function ChatSideBar() {
    return (
        <>
            {/* start: Chat */}
            <section className="min-h-screen flex items-center justify-center shadow-lg">
                <div className="h-screen w-full">
                    {/* start: Sidebar */}
                    {/* <aside className="chat-sidebar">
                        <a href="#" className="chat-sidebar-logo">
                            <i className="ri-chat-1-fill" />
                        </a>
                        <ul className="chat-sidebar-menu">
                            <li className="active">
                                <a href="#" data-title="Chats">
                                    <i className="ri-chat-3-line" />
                                </a>
                            </li>
                            <li>
                                <a href="#" data-title="Contacts">
                                    <i className="ri-contacts-line" />
                                </a>
                            </li>
                            <li>
                                <a href="#" data-title="Documents">
                                    <i className="ri-folder-line" />
                                </a>
                            </li>
                            <li>
                                <a href="#" data-title="Settings">
                                    <i className="ri-settings-line" />
                                </a>
                            </li>
                            <li className="chat-sidebar-profile">
                                <button
                                    type="button"
                                    className="chat-sidebar-profile-toggle"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                </button>
                                <ul className="chat-sidebar-profile-dropdown">
                                    <li>
                                        <a href="#">
                                            <i className="ri-user-line" />{' '}
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="ri-logout-box-line" />{' '}
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </aside> */}
                    {/* end: Sidebar */}
                    {/* start: Content */}
                    <div className="h-full relative pl-16">
                        {/* start: Content side */}
                        <div className="w-64 bg-[color:var(--white)] flex flex-col h-full absolute left-16 top-0">
                            <div className="content-sidebar-title">Chats</div>
                            <form action="" className="relative px-4 py-0">
                                <input
                                    type="search"
                                    className="bg-[color:var(--slate-100)] border border-[color:var(--slate-300)] w-full rounded text-sm pr-8 px-4 py-2 border-solid outline: none "
                                    placeholder="Search..."
                                />
                                <button
                                    type="submit"
                                    className="absolute -translate-y-2/4 text-[color:var(--slate-400)] bg-transparent cursor-pointer transition-[color] duration-[0.15s] ease-[ease-in-out] border-[none] right-8 top-2/4 outline: transparent"
                                >
                                    <i className="ri-search-line" />
                                </button>
                            </form>
                            <div className="overflow-y-auto h-full mt-4">
                                <ul className="content-messages-list">
                                    <li className="content-message-title">
                                        <span>Recently</span>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            data-conversation="#conversation-1"
                                        >
                                            <img
                                                className="content-message-image"
                                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                                alt=""
                                            />
                                            <span className="content-message-info">
                                                <span className="content-message-name">
                                                    Someone
                                                </span>
                                                <span className="content-message-text">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur.
                                                </span>
                                            </span>
                                            <span className="content-message-more">
                                                <span className="content-message-unread">
                                                    5
                                                </span>
                                                <span className="content-message-time">
                                                    12:30
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            data-conversation="#conversation-2"
                                        >
                                            <img
                                                className="content-message-image"
                                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                                alt=""
                                            />
                                            <span className="content-message-info">
                                                <span className="content-message-name">
                                                    Someone
                                                </span>
                                                <span className="content-message-text">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur.
                                                </span>
                                            </span>
                                            <span className="content-message-more">
                                                <span className="content-message-time">
                                                    12:30
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img
                                                className="content-message-image"
                                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                                alt=""
                                            />
                                            <span className="content-message-info">
                                                <span className="content-message-name">
                                                    Someone
                                                </span>
                                                <span className="content-message-text">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur.
                                                </span>
                                            </span>
                                            <span className="content-message-more">
                                                <span className="content-message-unread">
                                                    5
                                                </span>
                                                <span className="content-message-time">
                                                    12:30
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* end: Content side */}
                        {/* start: Conversation */}
                        <div className="bg-[color:var(--slate-100)] h-full hidden pl-64 ">
                            <i className="ri-chat-3-line" />
                            <p>Select chat and view conversation!</p>
                        </div>
                        <div
                            className="bg-[color:var(--slate-100)] h-full hidden pl-64"
                            id="conversation-1"
                        >
                            <div className="bg-[color:var(--white)] flex items-center px-4 py-2">
                                <button
                                    type="button"
                                    className="bg-transparent w-8 h-8 items-center justify-center text-xl cursor-pointer text-[color:var(--slate-400)] hidden mr-3 border-[none]"
                                >
                                    <i className="ri-arrow-left-line" />
                                </button>
                                <div className="flex items-center">
                                    <img
                                        className="conversation-user-image"
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                    <div>
                                        <div className="font-medium text-[17px]">
                                            Someone
                                        </div>
                                        <div className="text-[color:var(--slate-400)] text-[13px] online">
                                            online
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center ml-auto">
                                    <button type="button">
                                        <i className="ri-phone-fill" />
                                    </button>
                                    <button type="button">
                                        <i className="ri-vidicon-line" />
                                    </button>
                                    <button type="button">
                                        <i className="ri-information-line" />
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-y-auto overflow-x-hidden h-full p-4">
                                <ul className="list-none">
                                    <div className="text-center text-[13px] text-[color:var(--slate-400)] relative mb-4">
                                        <span>Today</span>
                                    </div>
                                    <li className="flex items-end flex-row-reverse mb-4 me">
                                        <div className="ml-2">
                                            <img
                                                className="w-6 h-6 object-cover block rounded-[50%]"
                                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                                alt=""
                                            />
                                        </div>
                                        <div className="cw-full">
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit, amet
                                                            consectetur
                                                            adipisicing elit.
                                                            Amet natus
                                                            repudiandae quisquam
                                                            sequi nobis suscipit
                                                            consequatur rerum
                                                            alias odio repellat!
                                                        </p>
                                                        <div className="conversation-item-time">
                                                            12:30
                                                        </div>
                                                    </div>
                                                    <div className="conversation-item-dropdown">
                                                        <button
                                                            type="button"
                                                            className="conversation-item-dropdown-toggle"
                                                        >
                                                            <i className="ri-more-2-line" />
                                                        </button>
                                                        <ul className="conversation-item-dropdown-list">
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-share-forward-line" />{' '}
                                                                    Forward
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-delete-bin-line" />{' '}
                                                                    Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                            Eaque, tenetur!
                                                        </p>
                                                        <div className="conversation-item-time">
                                                            12:30
                                                        </div>
                                                    </div>
                                                    <div className="conversation-item-dropdown">
                                                        <button
                                                            type="button"
                                                            className="conversation-item-dropdown-toggle"
                                                        >
                                                            <i className="ri-more-2-line" />
                                                        </button>
                                                        <ul className="conversation-item-dropdown-list">
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-share-forward-line" />{' '}
                                                                    Forward
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-delete-bin-line" />{' '}
                                                                    Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="conversation-item">
                                        <div className="conversation-item-side">
                                            <img
                                                className="conversation-item-image"
                                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                                alt=""
                                            />
                                        </div>
                                        <div className="conversation-item-content">
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>
                                                            Lorem, ipsum dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                        </p>
                                                        <div className="conversation-item-time">
                                                            12:30
                                                        </div>
                                                    </div>
                                                    <div className="conversation-item-dropdown">
                                                        <button
                                                            type="button"
                                                            className="conversation-item-dropdown-toggle"
                                                        >
                                                            <i className="ri-more-2-line" />
                                                        </button>
                                                        <ul className="conversation-item-dropdown-list">
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-share-forward-line" />{' '}
                                                                    Forward
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-delete-bin-line" />{' '}
                                                                    Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipisicing elit.
                                                            Atque eos ab in?
                                                        </p>
                                                        <div className="conversation-item-time">
                                                            12:30
                                                        </div>
                                                    </div>
                                                    <div className="conversation-item-dropdown">
                                                        <button
                                                            type="button"
                                                            className="conversation-item-dropdown-toggle"
                                                        >
                                                            <i className="ri-more-2-line" />
                                                        </button>
                                                        <ul className="conversation-item-dropdown-list">
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-share-forward-line" />{' '}
                                                                    Forward
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-delete-bin-line" />{' '}
                                                                    Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                            Sint, debitis. Iste
                                                            natus est aliquam
                                                            ipsum doloremque
                                                            fugiat, quidem eos
                                                            autem? Dolor
                                                            quisquam laboriosam
                                                            enim cum laborum
                                                            suscipit perferendis
                                                            adipisci
                                                            praesentium.
                                                        </p>
                                                        <div className="conversation-item-time">
                                                            12:30
                                                        </div>
                                                    </div>
                                                    <div className="conversation-item-dropdown">
                                                        <button
                                                            type="button"
                                                            className="conversation-item-dropdown-toggle"
                                                        >
                                                            <i className="ri-more-2-line" />
                                                        </button>
                                                        <ul className="conversation-item-dropdown-list">
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-share-forward-line" />{' '}
                                                                    Forward
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-delete-bin-line" />{' '}
                                                                    Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="conversation-item me">
                                        <div className="conversation-item-side">
                                            <img
                                                className="conversation-item-image"
                                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                                alt=""
                                            />
                                        </div>
                                        <div className="conversation-item-content">
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>
                                                            Lorem ipsum, dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                            Quas, eos, magni
                                                            temporibus, placeat
                                                            consectetur nobis
                                                            incidunt dicta a
                                                            culpa vel esse.
                                                            Facilis fugiat
                                                            possimus eveniet
                                                            accusamus
                                                            dignissimos pariatur
                                                            inventore animi rem
                                                            vero, eligendi
                                                            obcaecati fugit
                                                            quaerat? Officia ex
                                                            quod eaque maxime
                                                            ipsam, tempore error
                                                            laboriosam laborum,
                                                            magnam ipsum
                                                            doloremque quas.
                                                        </p>
                                                        <div className="conversation-item-time">
                                                            12:30
                                                        </div>
                                                    </div>
                                                    <div className="conversation-item-dropdown">
                                                        <button
                                                            type="button"
                                                            className="conversation-item-dropdown-toggle"
                                                        >
                                                            <i className="ri-more-2-line" />
                                                        </button>
                                                        <ul className="conversation-item-dropdown-list">
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-share-forward-line" />{' '}
                                                                    Forward
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-delete-bin-line" />{' '}
                                                                    Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>
                                                            Lorem, ipsum dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                            Temporibus debitis
                                                            odio maiores
                                                            perferendis ipsa
                                                            repudiandae amet
                                                            blanditiis quod.
                                                            Ullam, dolorum.
                                                        </p>
                                                        <div className="conversation-item-time">
                                                            12:30
                                                        </div>
                                                    </div>
                                                    <div className="conversation-item-dropdown">
                                                        <button
                                                            type="button"
                                                            className="conversation-item-dropdown-toggle"
                                                        >
                                                            <i className="ri-more-2-line" />
                                                        </button>
                                                        <ul className="conversation-item-dropdown-list">
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-share-forward-line" />{' '}
                                                                    Forward
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-delete-bin-line" />{' '}
                                                                    Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>
                                                            Lorem ipsum, dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                            Accusantium
                                                            blanditiis ea,
                                                            voluptatum, eveniet
                                                            at harum minima
                                                            maxime enim aut non,
                                                            iure expedita
                                                            excepturi tempore
                                                            nostrum quasi natus
                                                            voluptas dolore
                                                            ducimus!
                                                        </p>
                                                        <div className="conversation-item-time">
                                                            12:30
                                                        </div>
                                                    </div>
                                                    <div className="conversation-item-dropdown">
                                                        <button
                                                            type="button"
                                                            className="conversation-item-dropdown-toggle"
                                                        >
                                                            <i className="ri-more-2-line" />
                                                        </button>
                                                        <ul className="conversation-item-dropdown-list">
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-share-forward-line" />{' '}
                                                                    Forward
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-delete-bin-line" />{' '}
                                                                    Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="conversation-form">
                                <button
                                    type="button"
                                    className="conversation-form-button"
                                >
                                    <i className="ri-emotion-line" />
                                </button>
                                <div className="conversation-form-group">
                                    <textarea
                                        className="conversation-form-input"
                                        rows={1}
                                        placeholder="Type here..."
                                        defaultValue={''}
                                    />
                                    <button
                                        type="button"
                                        className="conversation-form-record"
                                    >
                                        <i className="ri-mic-line" />
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    className="conversation-form-button conversation-form-submit"
                                >
                                    <i className="ri-send-plane-2-line" />
                                </button>
                            </div>
                        </div>
                        <div
                            className="bg-[color:var(--slate-100)] h-full hidden pl-64"
                            id="conversation-2"
                        >
                            <div className="conversation-top">
                                <button
                                    type="button"
                                    className="conversation-back"
                                >
                                    <i className="ri-arrow-left-line" />
                                </button>
                                <div className="conversation-user">
                                    <img
                                        className="conversation-user-image"
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                    <div>
                                        <div className="conversation-user-name">
                                            Someone 1
                                        </div>
                                        <div className="conversation-user-status online">
                                            online
                                        </div>
                                    </div>
                                </div>
                                <div className="conversation-buttons">
                                    <button type="button">
                                        <i className="ri-phone-fill" />
                                    </button>
                                    <button type="button">
                                        <i className="ri-vidicon-line" />
                                    </button>
                                    <button type="button">
                                        <i className="ri-information-line" />
                                    </button>
                                </div>
                            </div>
                            <div className="conversation-main">
                                <ul className="conversation-wrapper">
                                    <div className="coversation-divider">
                                        <span>Today</span>
                                    </div>
                                    <li className="conversation-item me">
                                        <div className="conversation-item-side">
                                            <img
                                                className="conversation-item-image"
                                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                                alt=""
                                            />
                                        </div>
                                        <div className="conversation-item-content">
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit, amet
                                                            consectetur
                                                            adipisicing elit.
                                                            Amet natus
                                                            repudiandae quisquam
                                                            sequi nobis suscipit
                                                            consequatur rerum
                                                            alias odio repellat!
                                                        </p>
                                                        <div className="conversation-item-time">
                                                            12:30
                                                        </div>
                                                    </div>
                                                    <div className="conversation-item-dropdown">
                                                        <button
                                                            type="button"
                                                            className="conversation-item-dropdown-toggle"
                                                        >
                                                            <i className="ri-more-2-line" />
                                                        </button>
                                                        <ul className="conversation-item-dropdown-list">
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-share-forward-line" />{' '}
                                                                    Forward
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-delete-bin-line" />{' '}
                                                                    Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                            Eaque, tenetur!
                                                        </p>
                                                        <div className="conversation-item-time">
                                                            12:30
                                                        </div>
                                                    </div>
                                                    <div className="conversation-item-dropdown">
                                                        <button
                                                            type="button"
                                                            className="conversation-item-dropdown-toggle"
                                                        >
                                                            <i className="ri-more-2-line" />
                                                        </button>
                                                        <ul className="conversation-item-dropdown-list">
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-share-forward-line" />{' '}
                                                                    Forward
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-delete-bin-line" />{' '}
                                                                    Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="conversation-item">
                                        <div className="conversation-item-side">
                                            <img
                                                className="conversation-item-image"
                                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                                alt=""
                                            />
                                        </div>
                                        <div className="conversation-item-content">
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>
                                                            Lorem, ipsum dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                        </p>
                                                        <div className="conversation-item-time">
                                                            12:30
                                                        </div>
                                                    </div>
                                                    <div className="conversation-item-dropdown">
                                                        <button
                                                            type="button"
                                                            className="conversation-item-dropdown-toggle"
                                                        >
                                                            <i className="ri-more-2-line" />
                                                        </button>
                                                        <ul className="conversation-item-dropdown-list">
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-share-forward-line" />{' '}
                                                                    Forward
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-delete-bin-line" />{' '}
                                                                    Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipisicing elit.
                                                            Atque eos ab in?
                                                        </p>
                                                        <div className="conversation-item-time">
                                                            12:30
                                                        </div>
                                                    </div>
                                                    <div className="conversation-item-dropdown">
                                                        <button
                                                            type="button"
                                                            className="conversation-item-dropdown-toggle"
                                                        >
                                                            <i className="ri-more-2-line" />
                                                        </button>
                                                        <ul className="conversation-item-dropdown-list">
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-share-forward-line" />{' '}
                                                                    Forward
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-delete-bin-line" />{' '}
                                                                    Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                            Sint, debitis. Iste
                                                            natus est aliquam
                                                            ipsum doloremque
                                                            fugiat, quidem eos
                                                            autem? Dolor
                                                            quisquam laboriosam
                                                            enim cum laborum
                                                            suscipit perferendis
                                                            adipisci
                                                            praesentium.
                                                        </p>
                                                        <div className="conversation-item-time">
                                                            12:30
                                                        </div>
                                                    </div>
                                                    <div className="conversation-item-dropdown">
                                                        <button
                                                            type="button"
                                                            className="conversation-item-dropdown-toggle"
                                                        >
                                                            <i className="ri-more-2-line" />
                                                        </button>
                                                        <ul className="conversation-item-dropdown-list">
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-share-forward-line" />{' '}
                                                                    Forward
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-delete-bin-line" />{' '}
                                                                    Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="conversation-item me">
                                        <div className="conversation-item-side">
                                            <img
                                                className="conversation-item-image"
                                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                                alt=""
                                            />
                                        </div>
                                        <div className="conversation-item-content">
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>
                                                            Lorem ipsum, dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                            Quas, eos, magni
                                                            temporibus, placeat
                                                            consectetur nobis
                                                            incidunt dicta a
                                                            culpa vel esse.
                                                            Facilis fugiat
                                                            possimus eveniet
                                                            accusamus
                                                            dignissimos pariatur
                                                            inventore animi rem
                                                            vero, eligendi
                                                            obcaecati fugit
                                                            quaerat? Officia ex
                                                            quod eaque maxime
                                                            ipsam, tempore error
                                                            laboriosam laborum,
                                                            magnam ipsum
                                                            doloremque quas.
                                                        </p>
                                                        <div className="conversation-item-time">
                                                            12:30
                                                        </div>
                                                    </div>
                                                    <div className="conversation-item-dropdown">
                                                        <button
                                                            type="button"
                                                            className="conversation-item-dropdown-toggle"
                                                        >
                                                            <i className="ri-more-2-line" />
                                                        </button>
                                                        <ul className="conversation-item-dropdown-list">
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-share-forward-line" />{' '}
                                                                    Forward
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-delete-bin-line" />{' '}
                                                                    Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>
                                                            Lorem, ipsum dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                            Temporibus debitis
                                                            odio maiores
                                                            perferendis ipsa
                                                            repudiandae amet
                                                            blanditiis quod.
                                                            Ullam, dolorum.
                                                        </p>
                                                        <div className="conversation-item-time">
                                                            12:30
                                                        </div>
                                                    </div>
                                                    <div className="conversation-item-dropdown">
                                                        <button
                                                            type="button"
                                                            className="conversation-item-dropdown-toggle"
                                                        >
                                                            <i className="ri-more-2-line" />
                                                        </button>
                                                        <ul className="conversation-item-dropdown-list">
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-share-forward-line" />{' '}
                                                                    Forward
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-delete-bin-line" />{' '}
                                                                    Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>
                                                            Lorem ipsum, dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                            Accusantium
                                                            blanditiis ea,
                                                            voluptatum, eveniet
                                                            at harum minima
                                                            maxime enim aut non,
                                                            iure expedita
                                                            excepturi tempore
                                                            nostrum quasi natus
                                                            voluptas dolore
                                                            ducimus!
                                                        </p>
                                                        <div className="conversation-item-time">
                                                            12:30
                                                        </div>
                                                    </div>
                                                    <div className="conversation-item-dropdown">
                                                        <button
                                                            type="button"
                                                            className="conversation-item-dropdown-toggle"
                                                        >
                                                            <i className="ri-more-2-line" />
                                                        </button>
                                                        <ul className="conversation-item-dropdown-list">
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-share-forward-line" />{' '}
                                                                    Forward
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="ri-delete-bin-line" />{' '}
                                                                    Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="conversation-form">
                                <button
                                    type="button"
                                    className="conversation-form-button"
                                >
                                    <i className="ri-emotion-line" />
                                </button>
                                <div className="conversation-form-group">
                                    <textarea
                                        className="conversation-form-input"
                                        rows={1}
                                        placeholder="Type here..."
                                        defaultValue={''}
                                    />
                                    <button
                                        type="button"
                                        className="conversation-form-record"
                                    >
                                        <i className="ri-mic-line" />
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    className="conversation-form-button conversation-form-submit"
                                >
                                    <i className="ri-send-plane-2-line" />
                                </button>
                            </div>
                        </div>
                        {/* end: Conversation */}
                    </div>
                    {/* end: Content */}
                </div>
            </section>
            {/* end: Chat */}
        </>
    )
}
