import {Card} from "../Card/Card";
import {FaJava, FaPython} from "react-icons/fa";

const LanguagesGrid = () => {
  return (
      <div>
          <p className={"p-5 ml-5 text-5xl"}>Skills</p>
      <div className={'p-4 md:p-10 grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-30'}>
          <Card name={'Python'} icon={FaPython}/>
          <Card name={'Java'} icon={FaJava}/>
          <Card name={'Typescript'}  icon={FaJava}/>
          <Card name={'PostgreSQL'}  icon={FaJava}/>
          <Card name={'Docker'}  icon={FaJava}/>
          <Card name={'Bash'}  icon={FaJava}/>
          <Card name={'Tailwind'}  icon={FaJava}/>
          <Card name={'Bootstrap'}  icon={FaJava}/>
          <Card name={'Angular'}  icon={FaJava}/>
          <Card name={'React'}  icon={FaJava}/>
          <Card name={'AWS'}  icon={FaJava}/>
          <Card name={'Git'}  icon={FaJava}/>
          <Card name={'Spring Boot'}  icon={FaJava}/>
          <Card name={'Unix type OS systems'}  icon={FaJava}/>
          <Card name={'Angular Material'}  icon={FaJava}/>
      </div>
      </div>
  )
}

export {
    LanguagesGrid
}