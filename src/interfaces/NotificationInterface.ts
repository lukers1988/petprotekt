interface NotificationInterface {
    notificationKind: 'danger' | 'success' | 'warning' | 'info';
    headerText: string;
    bodyText?: string;
    duration?: number;
    id?: string;
}

export default NotificationInterface;
