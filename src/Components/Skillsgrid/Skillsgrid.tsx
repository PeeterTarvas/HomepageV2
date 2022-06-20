import {Card} from "../Card/Card";
import {FaJava, FaPython} from "react-icons/fa";

const LanguagesGrid = () => {
  return (
      <div className={'p-4 md:p-10 grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-30'}>
          <Card name={'Python'} description={'2+ years experience. Mainly done Python 3 but have also worked with 2.7.' +
              ' Have also had some experience with pandas, scikit-learn and numpy.'} icon={FaPython}/>
          <Card name={'Java'} description={'1.5 years experience. Have done 2 applications that have Java - SpringBoot -  back-end. ' +
              'Currently I am working with Java at Twilio.'} icon={FaJava}/>
          <Card name={'Typescript'} description={'~1 year of experience. Have done 3 applications that use Typescript as its front-end framework.' +
              'Two of those are Angular and one is a React project.'} icon={FaJava}/>
          <Card name={'PostgreSQL'} description={'Less than a year of experience. Have done one project with it where I' +
              ' needed to write a database for a team project in school.'} icon={FaJava}/>
      </div>
  )
}

export {
    LanguagesGrid
}