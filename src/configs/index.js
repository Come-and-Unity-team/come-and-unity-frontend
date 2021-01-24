import EventNoteIcon from '@material-ui/icons/EventNote';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PeopleIcon from '@material-ui/icons/People';

export const router = {
    pathToLoginPage: '/login',
    pathToSignupPage: '/register',
    pathToSchedulePage: '/',
    pathToProfilePage: '/profile',
    pathToLibraryPage: '/library',
    pathToGroupmatesPage: '/groupmates',
    pathToTeachersPage: '/teachers'
};

export const sideBar = {
    width: 250,
    items: [
        { text: "Schedule", Icon: EventNoteIcon, path: router.pathToSchedulePage},
        { text: "Library", Icon: CloudQueueIcon, path: router.pathToLibraryPage},
        { text: "Teachers", Icon: SupervisorAccountIcon, path: router.pathToTeachersPage},
        { text: "Groupmates", Icon: PeopleIcon, path: router.pathToGroupmatesPage},
    ]
};
