import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.get('/', (req: Request, res: Response) => {

    const responseMsg = executeArrayLogic();
    res.send(responseMsg);


});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

function executeArrayLogic(): string {

    interface Person {
        name: string;
        age: number;
        lottos: number[];
        numberOfLottos: number;

    }
    const person: Person = {
        name: "LuckyMan",
        age: 20,
        lottos: [],
        numberOfLottos: 50,  // adjust your number of lottery here.

    }

    for (let i = 0; i < person.numberOfLottos; i++) {

        person.lottos[i] = Math.floor(Math.random() * 99) + 1;
    }

    let firstMessage = "This person owns numbers: " + person.lottos;

    console.log(firstMessage);

    // random 2 digits for winner number 00 - 99

    const winnerNumber = Math.floor(Math.random() * 99) + 1;
    let secondMessage = "Winner number is " + winnerNumber;
    console.log(secondMessage);

    // find the winner number if it is in this person or not

    const isWinner: boolean = person.lottos.includes(winnerNumber);

    let thirdMessage = "Are you winner? " + isWinner;
    console.log(thirdMessage);

    return firstMessage + "<br>" + secondMessage + "<br>" + thirdMessage;


}