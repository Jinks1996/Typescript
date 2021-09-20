const add = (a: number, b: number) : number => {
    return a+b;
}

let todaysWeather = {
    date: new Date(),
    weather: 'sunny',
}

const logWeather = ({date, weather}: {date: Date, weather: string}): void  => {
    console.log(date + weather)
}

logWeather(todaysWeather);