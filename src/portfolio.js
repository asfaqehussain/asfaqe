const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Test.com',
  title: 'AH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Asfaqe Hussain',
  role: 'React Native Developer',
  description: "I'm Experienced React Native Developer skilled in building cross-platform apps. Proficient in JavaScript and TypeScript, with a focus on seamless user experiences. Passionate about new technologies and open-source contributions.",  
  resume: 'https://drive.google.com/file/d/1O3a2DrBlxrVLbLhNLqqgdWtZzuillbO3/view?usp=drive_link',
  social: {
    linkedin: 'https://linkedin.com/in/asfaqehussain',
    github: 'https://github.com/asfaqehussain',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Collabstr',
    description:
      'Collabstr is an influencer marketing platform that allows brands to connect with influencers and collaborate on campaigns.',
    stack: ['React Native', 'Redux', 'Stripe', 'Deeplinks', 'Websockets'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'OtterBoutMyDay',
    description:
      'Otter Bout My Day was created with the goal of streamlining communication for both parents and their child’s therapists. We wanted to offer parents a session overview that therapists could quickly complete. Therapists can quickly upload session videos and photos for access by parents',
    stack: ['React Native', 'Firebase', 'React native IAP', 'Socket.IO'],
    livePreview: 'https://apps.apple.com/us/app/otterboutmyday/id6479358174',
  },
  {
    name: 'Neta App',
    description:
      'A trivia app for the teenager to play quiz and earn coins and share their rewards and achievement on social media. ',
    stack: ['React Native', 'RevenueCat', 'Animations', 'Social Media Sharing', 'Remote Config'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://play.google.com/store/apps/details?id=com.neta.app',
  },
]

const skills = [
  'React Native',
  'JavaScript/TypeScript',
  'Redux',
  'Firebase',
  'Rest API',
  'AWS S3',
  'Stripe',
  'RevenueCat',
  'Dooboolab',
  'SQLite',
  'GraphQL',
  'Unit testing',
  'Jira',
  'Android Studio',
  'Xcode',
  'Postman',
  'Chrome Debugger',
  'Sourcetree',
  'CI/CD',
]

const contact = {
  email: 'asfaqeh@mail.com',
}

export { header, about, projects, skills, contact }
