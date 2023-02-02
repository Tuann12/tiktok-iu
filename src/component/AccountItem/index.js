import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Images from '~/component/Images';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Images
                className={cx('avatar')}
                src="https://www.invert.vn/media/uploads/uploads/2022/12/03194208-8-anh-gai-xinh-goi-cam.jpeg"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
