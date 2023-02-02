import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPlus,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import Button from '~/component/Button';
import styles from './Header.module.scss';
import images from '~/acsset/images';
import Menu from '~/component/Popper/Menu';
import { InboxIcon, MessageIcon, CreateEffects } from '~/component/Icons';
import Images from '~/component/Images';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedbackandhelp',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //
                break;
            default:
        }
    };

    const [numberInbox, setNumberInbox] = useState(12);

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@Tuann12',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button
                                className={cx('upload-btn')}
                                rounded
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                                onClick={onclick}
                            >
                                Upload
                            </Button>
                            <Tippy content="Create effects" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <CreateEffects className={cx('icon-btn')} />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon className={cx('icon-btn')} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon className={cx('icon-btn')} />
                                    <span className={cx('inbox-red')}>{numberInbox}</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Images
                                className={cx('user-avatar')}
                                src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/273544622_3047488055568466_7278172477705962968_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0sHW2rbAijIAX_mG6-v&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfA_AUlaf-QXGZEZemGBuMxLxoDnibGaTSfRdiXhLMsX0Q&oe=63E07709"
                                alt="Nguyen Thanh Tuan"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
