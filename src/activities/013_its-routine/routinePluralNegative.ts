import { getRandomVerb } from "../../database/verbData";
import { getPeople } from "../../database/peopleData";
import { getBool, getRandomElement } from "../../utils";

const getQuestion = () => {
    const subject = getPeople()
    const verb = getRandomVerb()
    const object = getRandomElement(verb.objects)
    const time = `${Math.floor((Math.random() * 8) + 2)}${getBool() ? 'am' : 'pm'}`

    const prompt = `${subject.firstName} ${verb.infinitive} ${object} at ${time}.`
    const answer = `${subject.firstName} don't ${verb.infinitive} ${object} at ${time}.`

    return { prompt, answer }
}

export default getQuestion