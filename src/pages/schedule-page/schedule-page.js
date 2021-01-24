import React,{useState} from 'react';
import {Grid} from "@material-ui/core";
import {useStyles} from "./schedule-page.styles";
import {
    red, green, purple, yellow
} from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import {
    ViewState,
    EditingState,
    Resources
} from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    WeekView,
    MonthView,
    Appointments,
    AppointmentTooltip,
    AppointmentForm,
    ViewSwitcher,
    Toolbar,
    DateNavigator,
    AllDayPanel,
    EditRecurrenceMenu,
    ConfirmationDialog
} from '@devexpress/dx-react-scheduler-material-ui';

const resourcesData = [
    {
        text: 'Error',
        id: 1,
        color: red,
    }, {
        text: 'University',
        id: 2,
        color: green,
    }, {
        text: 'Group',
        id: 3,
        color: purple,
    },
    {
        text: 'Individual',
        id: 4,
        color: yellow
    }
];

const initialSchedulerData = [
    {
        startDate: '2020-10-16T09:45',
        endDate: '2020-10-16T11:00',
        title: 'Meeting',
        roomId: 3,
        id: 0
    },
    {
        startDate: '2020-10-18T12:00',
        endDate: '2020-10-18T13:30',
        title: 'Go to a gym',
        roomId: 4,
        id: 1
    },
];

const initialResources = [
    {
        fieldName: 'roomId',
        title: 'Room',
        instances: resourcesData,
    },
];

const SchedulePage = () => {
    //стани календаря
    const [schedulerData,setSchedulerData] = useState(initialSchedulerData);
    const [addedAppointment,setAddedAppointment] = useState({});
    const [appointmentChanges,setAppointmentChanges] = useState({});
    const [editingAppointment,setEditingAppointment] = useState();
    const [currentDate,setCurrentDate] = useState(Date.now());
    const styles = useStyles();
    
    const handleCurrentDateChange = (date) => {
        setCurrentDate(date);
    };

    const handleAddedAppointment = (addedAppointment) =>{
        setAddedAppointment(addedAppointment);
    };

    const handleAppointmentChanges = (appointmentChanges) => {
        setAppointmentChanges(appointmentChanges);
    };

    const handleEditingAppointment = (editingAppointment) => {
        setEditingAppointment(editingAppointment);
    };

    const commitChanges = ({ added, changed, deleted }) => {
        setSchedulerData((data) => {
            if (added) {
                const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                data = [...data, { id: startingAddedId, ...added }];
            }
            if (changed) {
                data = data.map(appointment => (
                    changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
            }
            if (deleted !== undefined) {
                data = data.filter(appointment => appointment.id !== deleted);
            }
            return data;
        });
    };

    const CustomAppointment = ({children, style, ...restProps}) => (
        <Appointments.Appointment
            {...restProps}
            style={style}
            className={styles.appointment}
        >
            {children}
        </Appointments.Appointment>
    );

    return (
        <Grid className={styles.root}>
            <Paper>
                <Scheduler
                    data={schedulerData}
                    height={660}
                >
                    <ViewState
                        currentDate={currentDate}
                        onCurrentDateChange={handleCurrentDateChange}
                    />
                    <EditingState
                        onCommitChanges={commitChanges}

                        addedAppointment={addedAppointment}
                        onAddedAppointmentChange={handleAddedAppointment}

                        appointmentChanges={appointmentChanges}
                        onAppointmentChangesChange={handleAppointmentChanges}

                        editingAppointment={editingAppointment}
                        onEditingAppointmentChange={handleEditingAppointment}
                    />
                    <DayView/>
                    <WeekView/>
                    <MonthView/>
                    <Toolbar/>
                    <DateNavigator/>
                    <ViewSwitcher/>
                    <AllDayPanel/>
                    <EditRecurrenceMenu/>
                    <ConfirmationDialog/>
                    <Appointments
                        appointmentComponent={CustomAppointment}
                    />
                    <AppointmentTooltip
                        showCloseButton
                        showOpenButton
                    />
                    <Resources
                        data={initialResources}
                        mainResourceName="roomId"
                    />
                    <AppointmentForm/>
                </Scheduler>
            </Paper>
        </Grid>
    );
};

export default SchedulePage;
