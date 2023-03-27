import React, { useRef, useEffect, useState } from 'react'
import { z } from "zod";
import axios from 'axios';



const todoSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});



interface Error {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const todoArraySchema = z.array(todoSchema);
type Todo = z.infer<typeof todoSchema>;

const schema = z.object({
  firstName: z.string().min(2).max(20),
  lastName: z.string().min(2).max(20),
  email: z.string().email().refine((val) => val.length >= 15, {
    message: "String can't be less than 15 characters",
  }),
  password: z.string().min(6),
});

const JustTheName = schema.partial({ email: true, })
type JustTheNameType = z.infer<typeof JustTheName>;
const user = z.object({
  email: z.string(),
  username: z.string(),
}).partial();
const requiredUser = user.required();
type partialUser = z.infer<typeof user>;
type requiredUser = z.infer<typeof requiredUser>;


type InputType = z.infer<typeof schema>;

const Ts = () : JSX.Element => {
  const [data, setData] = useState<Todo[]>([]);
  const [formData, setFormData] = useState<InputType>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState<InputType>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      const data = res.data;
      const validatedData = todoArraySchema.safeParse(data)
      if (validatedData.success) {
        setData(validatedData.data)
      } else {
        console.error(validatedData.error);
      }
    }
    fetchTodos()
  }, [])
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = schema.safeParse(formData);
    if(!validation.success){
      let errors ={} as Error;
      
      validation.error.errors.forEach((err,index) => {
        errors[err.path[0]] = err.message;
      });
      console.log(errors);
      setFormErrors(errors);
    }
  }
  return (
    <>
    <div>{JSON.stringify(data[0])}</div>
    <div>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {formErrors.firstName && (
              <div className="error">{formErrors.firstName}</div>
            )}
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {formErrors.lastName && (
              <div className="error">{formErrors.lastName}</div>
            )}
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && (
              <div className="error">{formErrors.email}</div>
            )}
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {formErrors.password && (
              <div className="error">{formErrors.password}</div>
            )}
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
    </div>
    </>
  )
}

export default Ts


const athleteSchema = z.tuple([
  z.string(), // name
  z.number(), // jersey number
  z.object({
    pointsScored: z.number(),
  }), // statistics
]);

type Athlete = z.infer<typeof athleteSchema>;
// type Athlete = [string, number, { pointsScored: number }]
const stringOrNumber = z.union([z.string(), z.number()]);
const stringOrNumber2 = z.string().or(z.number());
stringOrNumber.parse("foo"); // passes
stringOrNumber.parse(14); // passes

const myUnion = z.discriminatedUnion("status", [
  z.object({ status: z.literal("success"), data: z.string() }),
  z.object({ status: z.literal("failed"), error: z.instanceof(Error) }),
]);
type MYUnionType = z.infer<typeof myUnion>;
console.log(myUnion.parse({ status: "success", data: "yippie ki yay" }))




const NumberCache = z.record(z.number());

type NumberCache = z.infer<typeof NumberCache>;
// => { [k: string]: number }


const Person = z.object({
  name: z.string(),
});

const Employee = z.object({
  role: z.string(),
});

const EmployedPerson = z.intersection(Person, Employee);
type EmployedPerson = z.infer<typeof EmployedPerson>;

// equivalent to:
const EmployedPerson1 = Person.and(Employee);
type EmployedPerson1 = z.infer<typeof EmployedPerson1>;







const baseCategorySchema = z.object({
  name: z.string(),
});

type Category = z.infer<typeof baseCategorySchema> & {
  subcategories: Category[];
};

const categorySchema: z.ZodType<Category> = baseCategorySchema.extend({
  subcategories: z.lazy(() => categorySchema.array()),
});

categorySchema.parse({
  name: "People",
  subcategories: [
    {
      name: "Politicians",
      subcategories: [
        {
          name: "Presidents",
          subcategories: [],
        },
      ],
    },
  ],
}); // passes




