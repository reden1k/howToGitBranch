const converTime = (time = 3665) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    console.log(`${hours} час(ов) ${minutes} минут(ы) ${seconds} секунды`);
}

converTime();