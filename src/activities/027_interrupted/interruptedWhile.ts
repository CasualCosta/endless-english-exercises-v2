import { getBool, getRandomElement } from "../../utils";
import { getPerson } from '../../database/peopleData'
import { getRandomVerb } from "../../database/verbData";

const getQuestion = () => {
    const isMale = getBool()
    const subject = getPerson(isMale)
    const verb = getRandomVerb()
    const object = getRandomElement(verb.objects)

    const isMaleTwo = getBool()
    const subjectTwo = getPerson(isMaleTwo)
    const verbTwo = getRandomVerb()
    const objectTwo = getRandomElement(verbTwo.objects)


    const prompt = `${subject.firstName} / ${verb.infinitive} ${object} / ${subjectTwo.firstName} / ${verbTwo.infinitive} ${objectTwo}`
    const answer = `${subject.firstName} was ${verb.gerund} ${object} while ${subjectTwo.firstName} was ${verbTwo.gerund} ${objectTwo}.`

    return { prompt, answer }
}

export default getQuestion