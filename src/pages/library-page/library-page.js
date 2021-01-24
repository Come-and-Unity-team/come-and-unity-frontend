import React from 'react';
import {Grid,Typography} from "@material-ui/core";
import {useStyles} from "./library-page.style";
import Book from './book/book';
import book1 from './book1.jpg';
import book2 from './book2.jpg';
import book3 from './book3.jpg';


const LibraryPage = () => {

    const styles = useStyles();
    return (
        <div>
            <Grid className={styles.root}>
                <Typography variant={'h4'}>Library</Typography>
                <Grid className={styles.kernel}>
                    <Book photo={book1} title='Практикум з чисельних методів' authors='С.Левицька, С.Шахно,А.Дудикевич' redirect={"https://drive.google.com/file/d/1vEFcxfensxkoUbyydUnZ1kxvGB1G-ai1/view?usp=sharing"} />
                    <Book photo={book2} title='Дискретна математика' authors='Нікольський Ю. В., Пасічник В. В., Щербина Ю. М.' redirect={"https://drive.google.com/file/d/1gpeq88k3JD-WWD0afJQSi5U6mbRI1-2Y/view?usp=sharing"} />
                    <Book photo={book3} title='Лінійна алгебра і аналітична геометрія' authors='Зеліско В.Р., Зеліско Г.В.' />
                </Grid>
                <Grid className={styles.kernel}>
                    <Book photo={book2} title='Дискретна математика' authors='Нікольський Ю. В., Пасічник В. В., Щербина Ю. М.' />
                    <Book photo={book3} title='Лінійна алгебра і аналітична геометрія' authors='Зеліско В.Р., Зеліско Г.В.' />
                    <Book photo={book1} title='Практикум з чисельних методів' authors='С.Левицька, С.Шахно,А.Дудикевич' />
                </Grid>
            </Grid>
            
        </div>
    )
}

export default LibraryPage;