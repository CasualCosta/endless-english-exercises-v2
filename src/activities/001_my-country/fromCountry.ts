import countries from "../../database/countryData";
import { getPerson, getPeople } from "../../database/peopleData";
import { capitalizeFirstLetter } from "../../utils";

const getQuestion = () => {
    const isMale = Math.floor(Math.random() * 2) === 0
    const isPlural = Math.floor(Math.random() * 2) === 0
    let subject;
    if(isPlural)
        subject = getPeople();
    else
        subject = getPerson(isMale);
    const country = countries[Math.floor(Math.random() * countries.length)].name;
    const prompt = `${country} / ${subject.firstName}`
    const answer = capitalizeFirstLetter(`${subject.subjectivePronoun} ${isPlural ? 'are' : 'is'} from ${country}.`);
    return {prompt, answer}
}

export default getQuestion;