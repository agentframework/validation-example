// 1. import
import { mandatory, optional, Validate } from '@agentframework/validation';

// 2. define data models
class Project {
  @mandatory()
  name: string;
}

class User {
  @mandatory()
  id: number;

  @mandatory()
  name: string;

  @optional()
  email: string;

  @optional()
  project: Project;
}

// 3. Create validator
const Validator = Validate(User);

// 4. The object to validate
const input = {
  id: 1,
  name: 'Ling'
};
console.log('is match?', Validator.test(input));

// 5. The object to validate
const inputWithProject = {
  id: 1,
  name: 'Ling',
  project: {
    name: 1
  }
};
console.log('project validate result?', Validator.validate(inputWithProject));
