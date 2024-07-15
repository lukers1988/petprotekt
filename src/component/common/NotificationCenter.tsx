import { Toast, ToastContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import NotificationInterface from '@appInterfaces/NotificationInterface';
import { useTranslation } from 'react-i18next';
import { deleteNotification } from '@appStore/NotificationReducer';

const NotificationCenter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const notifications = useSelector((state: any) => state.notifications.list);

    return (
        <ToastContainer
            style={{
                zIndex: 10,
                position: 'fixed',
                top: 10,
                right: 10
            }}
        >
            {notifications.map((notification: NotificationInterface) => {
                const { notificationKind, headerText, bodyText, id } = notification;
                return (
                    <Toast
                        onClose={() => {
                            dispatch(deleteNotification(id!));
                        }}
                        key={id}
                        bg={notificationKind}
                        show={true}
                        style={{
                            color: 'white',
                            maxWidth: 300
                        }}
                    >
                        <Toast.Header
                            style={{
                                justifyContent: 'space-between'
                            }}
                        >
                            <strong>{headerText}</strong>
                        </Toast.Header>
                        <Toast.Body>{bodyText || t('errors:defaultError')}</Toast.Body>
                    </Toast>
                );
            })}
        </ToastContainer>
    );
};
export default NotificationCenter;
