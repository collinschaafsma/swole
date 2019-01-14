export const typeDefs = /* GraphQL */ `type AggregateExercise {
  count: Int!
}

type AggregateExerciseLog {
  count: Int!
}

type AggregateExerciseRoutine {
  count: Int!
}

type AggregateProfile {
  count: Int!
}

type AggregateProgram {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateWorkout {
  count: Int!
}

type AggregateWorkoutLog {
  count: Int!
}

type AggregateWorkoutRoutine {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Exercise {
  id: ID!
  name: String!
  videoUrl: String
  isProgressive: Boolean
  warmup: String
  routine: ExerciseRoutine!
  weightProgression: Float
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  author: User!
}

type ExerciseConnection {
  pageInfo: PageInfo!
  edges: [ExerciseEdge]!
  aggregate: AggregateExercise!
}

input ExerciseCreateInput {
  name: String!
  videoUrl: String
  isProgressive: Boolean
  warmup: String
  routine: ExerciseRoutineCreateOneInput!
  weightProgression: Float
  deletedAt: DateTime
  author: UserCreateOneInput!
}

input ExerciseCreateOneInput {
  create: ExerciseCreateInput
  connect: ExerciseWhereUniqueInput
}

type ExerciseEdge {
  node: Exercise!
  cursor: String!
}

type ExerciseLog {
  id: ID!
  set: Int!
  reps: Int!
  weight: Float
  exercise: Exercise!
  createdAt: DateTime!
  workoutLog: WorkoutLog!
}

type ExerciseLogConnection {
  pageInfo: PageInfo!
  edges: [ExerciseLogEdge]!
  aggregate: AggregateExerciseLog!
}

input ExerciseLogCreateInput {
  set: Int!
  reps: Int!
  weight: Float
  exercise: ExerciseCreateOneInput!
  workoutLog: WorkoutLogCreateOneWithoutExerciseLogsInput!
}

input ExerciseLogCreateManyWithoutWorkoutLogInput {
  create: [ExerciseLogCreateWithoutWorkoutLogInput!]
  connect: [ExerciseLogWhereUniqueInput!]
}

input ExerciseLogCreateWithoutWorkoutLogInput {
  set: Int!
  reps: Int!
  weight: Float
  exercise: ExerciseCreateOneInput!
}

type ExerciseLogEdge {
  node: ExerciseLog!
  cursor: String!
}

enum ExerciseLogOrderByInput {
  id_ASC
  id_DESC
  set_ASC
  set_DESC
  reps_ASC
  reps_DESC
  weight_ASC
  weight_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ExerciseLogPreviousValues {
  id: ID!
  set: Int!
  reps: Int!
  weight: Float
  createdAt: DateTime!
}

input ExerciseLogScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  set: Int
  set_not: Int
  set_in: [Int!]
  set_not_in: [Int!]
  set_lt: Int
  set_lte: Int
  set_gt: Int
  set_gte: Int
  reps: Int
  reps_not: Int
  reps_in: [Int!]
  reps_not_in: [Int!]
  reps_lt: Int
  reps_lte: Int
  reps_gt: Int
  reps_gte: Int
  weight: Float
  weight_not: Float
  weight_in: [Float!]
  weight_not_in: [Float!]
  weight_lt: Float
  weight_lte: Float
  weight_gt: Float
  weight_gte: Float
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ExerciseLogScalarWhereInput!]
  OR: [ExerciseLogScalarWhereInput!]
  NOT: [ExerciseLogScalarWhereInput!]
}

type ExerciseLogSubscriptionPayload {
  mutation: MutationType!
  node: ExerciseLog
  updatedFields: [String!]
  previousValues: ExerciseLogPreviousValues
}

input ExerciseLogSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ExerciseLogWhereInput
  AND: [ExerciseLogSubscriptionWhereInput!]
  OR: [ExerciseLogSubscriptionWhereInput!]
  NOT: [ExerciseLogSubscriptionWhereInput!]
}

input ExerciseLogUpdateInput {
  set: Int
  reps: Int
  weight: Float
  exercise: ExerciseUpdateOneRequiredInput
  workoutLog: WorkoutLogUpdateOneRequiredWithoutExerciseLogsInput
}

input ExerciseLogUpdateManyDataInput {
  set: Int
  reps: Int
  weight: Float
}

input ExerciseLogUpdateManyMutationInput {
  set: Int
  reps: Int
  weight: Float
}

input ExerciseLogUpdateManyWithoutWorkoutLogInput {
  create: [ExerciseLogCreateWithoutWorkoutLogInput!]
  delete: [ExerciseLogWhereUniqueInput!]
  connect: [ExerciseLogWhereUniqueInput!]
  disconnect: [ExerciseLogWhereUniqueInput!]
  update: [ExerciseLogUpdateWithWhereUniqueWithoutWorkoutLogInput!]
  upsert: [ExerciseLogUpsertWithWhereUniqueWithoutWorkoutLogInput!]
  deleteMany: [ExerciseLogScalarWhereInput!]
  updateMany: [ExerciseLogUpdateManyWithWhereNestedInput!]
}

input ExerciseLogUpdateManyWithWhereNestedInput {
  where: ExerciseLogScalarWhereInput!
  data: ExerciseLogUpdateManyDataInput!
}

input ExerciseLogUpdateWithoutWorkoutLogDataInput {
  set: Int
  reps: Int
  weight: Float
  exercise: ExerciseUpdateOneRequiredInput
}

input ExerciseLogUpdateWithWhereUniqueWithoutWorkoutLogInput {
  where: ExerciseLogWhereUniqueInput!
  data: ExerciseLogUpdateWithoutWorkoutLogDataInput!
}

input ExerciseLogUpsertWithWhereUniqueWithoutWorkoutLogInput {
  where: ExerciseLogWhereUniqueInput!
  update: ExerciseLogUpdateWithoutWorkoutLogDataInput!
  create: ExerciseLogCreateWithoutWorkoutLogInput!
}

input ExerciseLogWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  set: Int
  set_not: Int
  set_in: [Int!]
  set_not_in: [Int!]
  set_lt: Int
  set_lte: Int
  set_gt: Int
  set_gte: Int
  reps: Int
  reps_not: Int
  reps_in: [Int!]
  reps_not_in: [Int!]
  reps_lt: Int
  reps_lte: Int
  reps_gt: Int
  reps_gte: Int
  weight: Float
  weight_not: Float
  weight_in: [Float!]
  weight_not_in: [Float!]
  weight_lt: Float
  weight_lte: Float
  weight_gt: Float
  weight_gte: Float
  exercise: ExerciseWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  workoutLog: WorkoutLogWhereInput
  AND: [ExerciseLogWhereInput!]
  OR: [ExerciseLogWhereInput!]
  NOT: [ExerciseLogWhereInput!]
}

input ExerciseLogWhereUniqueInput {
  id: ID
}

enum ExerciseOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  videoUrl_ASC
  videoUrl_DESC
  isProgressive_ASC
  isProgressive_DESC
  warmup_ASC
  warmup_DESC
  weightProgression_ASC
  weightProgression_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
}

type ExercisePreviousValues {
  id: ID!
  name: String!
  videoUrl: String
  isProgressive: Boolean
  warmup: String
  weightProgression: Float
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
}

type ExerciseRoutine {
  id: ID!
  sets: Int!
  reps: Int!
  restBetweenSets: Int!
}

type ExerciseRoutineConnection {
  pageInfo: PageInfo!
  edges: [ExerciseRoutineEdge]!
  aggregate: AggregateExerciseRoutine!
}

input ExerciseRoutineCreateInput {
  sets: Int!
  reps: Int!
  restBetweenSets: Int
}

input ExerciseRoutineCreateOneInput {
  create: ExerciseRoutineCreateInput
  connect: ExerciseRoutineWhereUniqueInput
}

type ExerciseRoutineEdge {
  node: ExerciseRoutine!
  cursor: String!
}

enum ExerciseRoutineOrderByInput {
  id_ASC
  id_DESC
  sets_ASC
  sets_DESC
  reps_ASC
  reps_DESC
  restBetweenSets_ASC
  restBetweenSets_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ExerciseRoutinePreviousValues {
  id: ID!
  sets: Int!
  reps: Int!
  restBetweenSets: Int!
}

type ExerciseRoutineSubscriptionPayload {
  mutation: MutationType!
  node: ExerciseRoutine
  updatedFields: [String!]
  previousValues: ExerciseRoutinePreviousValues
}

input ExerciseRoutineSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ExerciseRoutineWhereInput
  AND: [ExerciseRoutineSubscriptionWhereInput!]
  OR: [ExerciseRoutineSubscriptionWhereInput!]
  NOT: [ExerciseRoutineSubscriptionWhereInput!]
}

input ExerciseRoutineUpdateDataInput {
  sets: Int
  reps: Int
  restBetweenSets: Int
}

input ExerciseRoutineUpdateInput {
  sets: Int
  reps: Int
  restBetweenSets: Int
}

input ExerciseRoutineUpdateManyMutationInput {
  sets: Int
  reps: Int
  restBetweenSets: Int
}

input ExerciseRoutineUpdateOneRequiredInput {
  create: ExerciseRoutineCreateInput
  update: ExerciseRoutineUpdateDataInput
  upsert: ExerciseRoutineUpsertNestedInput
  connect: ExerciseRoutineWhereUniqueInput
}

input ExerciseRoutineUpsertNestedInput {
  update: ExerciseRoutineUpdateDataInput!
  create: ExerciseRoutineCreateInput!
}

input ExerciseRoutineWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  sets: Int
  sets_not: Int
  sets_in: [Int!]
  sets_not_in: [Int!]
  sets_lt: Int
  sets_lte: Int
  sets_gt: Int
  sets_gte: Int
  reps: Int
  reps_not: Int
  reps_in: [Int!]
  reps_not_in: [Int!]
  reps_lt: Int
  reps_lte: Int
  reps_gt: Int
  reps_gte: Int
  restBetweenSets: Int
  restBetweenSets_not: Int
  restBetweenSets_in: [Int!]
  restBetweenSets_not_in: [Int!]
  restBetweenSets_lt: Int
  restBetweenSets_lte: Int
  restBetweenSets_gt: Int
  restBetweenSets_gte: Int
  AND: [ExerciseRoutineWhereInput!]
  OR: [ExerciseRoutineWhereInput!]
  NOT: [ExerciseRoutineWhereInput!]
}

input ExerciseRoutineWhereUniqueInput {
  id: ID
}

type ExerciseSubscriptionPayload {
  mutation: MutationType!
  node: Exercise
  updatedFields: [String!]
  previousValues: ExercisePreviousValues
}

input ExerciseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ExerciseWhereInput
  AND: [ExerciseSubscriptionWhereInput!]
  OR: [ExerciseSubscriptionWhereInput!]
  NOT: [ExerciseSubscriptionWhereInput!]
}

input ExerciseUpdateDataInput {
  name: String
  videoUrl: String
  isProgressive: Boolean
  warmup: String
  routine: ExerciseRoutineUpdateOneRequiredInput
  weightProgression: Float
  deletedAt: DateTime
  author: UserUpdateOneRequiredInput
}

input ExerciseUpdateInput {
  name: String
  videoUrl: String
  isProgressive: Boolean
  warmup: String
  routine: ExerciseRoutineUpdateOneRequiredInput
  weightProgression: Float
  deletedAt: DateTime
  author: UserUpdateOneRequiredInput
}

input ExerciseUpdateManyMutationInput {
  name: String
  videoUrl: String
  isProgressive: Boolean
  warmup: String
  weightProgression: Float
  deletedAt: DateTime
}

input ExerciseUpdateOneRequiredInput {
  create: ExerciseCreateInput
  update: ExerciseUpdateDataInput
  upsert: ExerciseUpsertNestedInput
  connect: ExerciseWhereUniqueInput
}

input ExerciseUpsertNestedInput {
  update: ExerciseUpdateDataInput!
  create: ExerciseCreateInput!
}

input ExerciseWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  videoUrl: String
  videoUrl_not: String
  videoUrl_in: [String!]
  videoUrl_not_in: [String!]
  videoUrl_lt: String
  videoUrl_lte: String
  videoUrl_gt: String
  videoUrl_gte: String
  videoUrl_contains: String
  videoUrl_not_contains: String
  videoUrl_starts_with: String
  videoUrl_not_starts_with: String
  videoUrl_ends_with: String
  videoUrl_not_ends_with: String
  isProgressive: Boolean
  isProgressive_not: Boolean
  warmup: String
  warmup_not: String
  warmup_in: [String!]
  warmup_not_in: [String!]
  warmup_lt: String
  warmup_lte: String
  warmup_gt: String
  warmup_gte: String
  warmup_contains: String
  warmup_not_contains: String
  warmup_starts_with: String
  warmup_not_starts_with: String
  warmup_ends_with: String
  warmup_not_ends_with: String
  routine: ExerciseRoutineWhereInput
  weightProgression: Float
  weightProgression_not: Float
  weightProgression_in: [Float!]
  weightProgression_not_in: [Float!]
  weightProgression_lt: Float
  weightProgression_lte: Float
  weightProgression_gt: Float
  weightProgression_gte: Float
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  author: UserWhereInput
  AND: [ExerciseWhereInput!]
  OR: [ExerciseWhereInput!]
  NOT: [ExerciseWhereInput!]
}

input ExerciseWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createExercise(data: ExerciseCreateInput!): Exercise!
  updateExercise(data: ExerciseUpdateInput!, where: ExerciseWhereUniqueInput!): Exercise
  updateManyExercises(data: ExerciseUpdateManyMutationInput!, where: ExerciseWhereInput): BatchPayload!
  upsertExercise(where: ExerciseWhereUniqueInput!, create: ExerciseCreateInput!, update: ExerciseUpdateInput!): Exercise!
  deleteExercise(where: ExerciseWhereUniqueInput!): Exercise
  deleteManyExercises(where: ExerciseWhereInput): BatchPayload!
  createExerciseLog(data: ExerciseLogCreateInput!): ExerciseLog!
  updateExerciseLog(data: ExerciseLogUpdateInput!, where: ExerciseLogWhereUniqueInput!): ExerciseLog
  updateManyExerciseLogs(data: ExerciseLogUpdateManyMutationInput!, where: ExerciseLogWhereInput): BatchPayload!
  upsertExerciseLog(where: ExerciseLogWhereUniqueInput!, create: ExerciseLogCreateInput!, update: ExerciseLogUpdateInput!): ExerciseLog!
  deleteExerciseLog(where: ExerciseLogWhereUniqueInput!): ExerciseLog
  deleteManyExerciseLogs(where: ExerciseLogWhereInput): BatchPayload!
  createExerciseRoutine(data: ExerciseRoutineCreateInput!): ExerciseRoutine!
  updateExerciseRoutine(data: ExerciseRoutineUpdateInput!, where: ExerciseRoutineWhereUniqueInput!): ExerciseRoutine
  updateManyExerciseRoutines(data: ExerciseRoutineUpdateManyMutationInput!, where: ExerciseRoutineWhereInput): BatchPayload!
  upsertExerciseRoutine(where: ExerciseRoutineWhereUniqueInput!, create: ExerciseRoutineCreateInput!, update: ExerciseRoutineUpdateInput!): ExerciseRoutine!
  deleteExerciseRoutine(where: ExerciseRoutineWhereUniqueInput!): ExerciseRoutine
  deleteManyExerciseRoutines(where: ExerciseRoutineWhereInput): BatchPayload!
  createProfile(data: ProfileCreateInput!): Profile!
  updateProfile(data: ProfileUpdateInput!, where: ProfileWhereUniqueInput!): Profile
  updateManyProfiles(data: ProfileUpdateManyMutationInput!, where: ProfileWhereInput): BatchPayload!
  upsertProfile(where: ProfileWhereUniqueInput!, create: ProfileCreateInput!, update: ProfileUpdateInput!): Profile!
  deleteProfile(where: ProfileWhereUniqueInput!): Profile
  deleteManyProfiles(where: ProfileWhereInput): BatchPayload!
  createProgram(data: ProgramCreateInput!): Program!
  updateProgram(data: ProgramUpdateInput!, where: ProgramWhereUniqueInput!): Program
  updateManyPrograms(data: ProgramUpdateManyMutationInput!, where: ProgramWhereInput): BatchPayload!
  upsertProgram(where: ProgramWhereUniqueInput!, create: ProgramCreateInput!, update: ProgramUpdateInput!): Program!
  deleteProgram(where: ProgramWhereUniqueInput!): Program
  deleteManyPrograms(where: ProgramWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createWorkout(data: WorkoutCreateInput!): Workout!
  updateWorkout(data: WorkoutUpdateInput!, where: WorkoutWhereUniqueInput!): Workout
  updateManyWorkouts(data: WorkoutUpdateManyMutationInput!, where: WorkoutWhereInput): BatchPayload!
  upsertWorkout(where: WorkoutWhereUniqueInput!, create: WorkoutCreateInput!, update: WorkoutUpdateInput!): Workout!
  deleteWorkout(where: WorkoutWhereUniqueInput!): Workout
  deleteManyWorkouts(where: WorkoutWhereInput): BatchPayload!
  createWorkoutLog(data: WorkoutLogCreateInput!): WorkoutLog!
  updateWorkoutLog(data: WorkoutLogUpdateInput!, where: WorkoutLogWhereUniqueInput!): WorkoutLog
  updateManyWorkoutLogs(data: WorkoutLogUpdateManyMutationInput!, where: WorkoutLogWhereInput): BatchPayload!
  upsertWorkoutLog(where: WorkoutLogWhereUniqueInput!, create: WorkoutLogCreateInput!, update: WorkoutLogUpdateInput!): WorkoutLog!
  deleteWorkoutLog(where: WorkoutLogWhereUniqueInput!): WorkoutLog
  deleteManyWorkoutLogs(where: WorkoutLogWhereInput): BatchPayload!
  createWorkoutRoutine(data: WorkoutRoutineCreateInput!): WorkoutRoutine!
  updateWorkoutRoutine(data: WorkoutRoutineUpdateInput!, where: WorkoutRoutineWhereUniqueInput!): WorkoutRoutine
  updateManyWorkoutRoutines(data: WorkoutRoutineUpdateManyMutationInput!, where: WorkoutRoutineWhereInput): BatchPayload!
  upsertWorkoutRoutine(where: WorkoutRoutineWhereUniqueInput!, create: WorkoutRoutineCreateInput!, update: WorkoutRoutineUpdateInput!): WorkoutRoutine!
  deleteWorkoutRoutine(where: WorkoutRoutineWhereUniqueInput!): WorkoutRoutine
  deleteManyWorkoutRoutines(where: WorkoutRoutineWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Profile {
  id: ID!
  bodyWeight: Float
  age: Int
  birthday: DateTime
}

type ProfileConnection {
  pageInfo: PageInfo!
  edges: [ProfileEdge]!
  aggregate: AggregateProfile!
}

input ProfileCreateInput {
  bodyWeight: Float
  age: Int
  birthday: DateTime
}

input ProfileCreateOneInput {
  create: ProfileCreateInput
  connect: ProfileWhereUniqueInput
}

type ProfileEdge {
  node: Profile!
  cursor: String!
}

enum ProfileOrderByInput {
  id_ASC
  id_DESC
  bodyWeight_ASC
  bodyWeight_DESC
  age_ASC
  age_DESC
  birthday_ASC
  birthday_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProfilePreviousValues {
  id: ID!
  bodyWeight: Float
  age: Int
  birthday: DateTime
}

type ProfileSubscriptionPayload {
  mutation: MutationType!
  node: Profile
  updatedFields: [String!]
  previousValues: ProfilePreviousValues
}

input ProfileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProfileWhereInput
  AND: [ProfileSubscriptionWhereInput!]
  OR: [ProfileSubscriptionWhereInput!]
  NOT: [ProfileSubscriptionWhereInput!]
}

input ProfileUpdateDataInput {
  bodyWeight: Float
  age: Int
  birthday: DateTime
}

input ProfileUpdateInput {
  bodyWeight: Float
  age: Int
  birthday: DateTime
}

input ProfileUpdateManyMutationInput {
  bodyWeight: Float
  age: Int
  birthday: DateTime
}

input ProfileUpdateOneInput {
  create: ProfileCreateInput
  update: ProfileUpdateDataInput
  upsert: ProfileUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ProfileWhereUniqueInput
}

input ProfileUpsertNestedInput {
  update: ProfileUpdateDataInput!
  create: ProfileCreateInput!
}

input ProfileWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  bodyWeight: Float
  bodyWeight_not: Float
  bodyWeight_in: [Float!]
  bodyWeight_not_in: [Float!]
  bodyWeight_lt: Float
  bodyWeight_lte: Float
  bodyWeight_gt: Float
  bodyWeight_gte: Float
  age: Int
  age_not: Int
  age_in: [Int!]
  age_not_in: [Int!]
  age_lt: Int
  age_lte: Int
  age_gt: Int
  age_gte: Int
  birthday: DateTime
  birthday_not: DateTime
  birthday_in: [DateTime!]
  birthday_not_in: [DateTime!]
  birthday_lt: DateTime
  birthday_lte: DateTime
  birthday_gt: DateTime
  birthday_gte: DateTime
  AND: [ProfileWhereInput!]
  OR: [ProfileWhereInput!]
  NOT: [ProfileWhereInput!]
}

input ProfileWhereUniqueInput {
  id: ID
}

type Program {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  workouts(where: WorkoutWhereInput, orderBy: WorkoutOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Workout!]
  owner: User!
}

type ProgramConnection {
  pageInfo: PageInfo!
  edges: [ProgramEdge]!
  aggregate: AggregateProgram!
}

input ProgramCreateInput {
  name: String!
  deletedAt: DateTime
  workouts: WorkoutCreateManyInput
  owner: UserCreateOneInput!
}

input ProgramCreateOneInput {
  create: ProgramCreateInput
  connect: ProgramWhereUniqueInput
}

type ProgramEdge {
  node: Program!
  cursor: String!
}

enum ProgramOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
}

type ProgramPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
}

type ProgramSubscriptionPayload {
  mutation: MutationType!
  node: Program
  updatedFields: [String!]
  previousValues: ProgramPreviousValues
}

input ProgramSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProgramWhereInput
  AND: [ProgramSubscriptionWhereInput!]
  OR: [ProgramSubscriptionWhereInput!]
  NOT: [ProgramSubscriptionWhereInput!]
}

input ProgramUpdateDataInput {
  name: String
  deletedAt: DateTime
  workouts: WorkoutUpdateManyInput
  owner: UserUpdateOneRequiredInput
}

input ProgramUpdateInput {
  name: String
  deletedAt: DateTime
  workouts: WorkoutUpdateManyInput
  owner: UserUpdateOneRequiredInput
}

input ProgramUpdateManyMutationInput {
  name: String
  deletedAt: DateTime
}

input ProgramUpdateOneRequiredInput {
  create: ProgramCreateInput
  update: ProgramUpdateDataInput
  upsert: ProgramUpsertNestedInput
  connect: ProgramWhereUniqueInput
}

input ProgramUpsertNestedInput {
  update: ProgramUpdateDataInput!
  create: ProgramCreateInput!
}

input ProgramWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  workouts_every: WorkoutWhereInput
  workouts_some: WorkoutWhereInput
  workouts_none: WorkoutWhereInput
  owner: UserWhereInput
  AND: [ProgramWhereInput!]
  OR: [ProgramWhereInput!]
  NOT: [ProgramWhereInput!]
}

input ProgramWhereUniqueInput {
  id: ID
}

type Query {
  exercise(where: ExerciseWhereUniqueInput!): Exercise
  exercises(where: ExerciseWhereInput, orderBy: ExerciseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Exercise]!
  exercisesConnection(where: ExerciseWhereInput, orderBy: ExerciseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExerciseConnection!
  exerciseLog(where: ExerciseLogWhereUniqueInput!): ExerciseLog
  exerciseLogs(where: ExerciseLogWhereInput, orderBy: ExerciseLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ExerciseLog]!
  exerciseLogsConnection(where: ExerciseLogWhereInput, orderBy: ExerciseLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExerciseLogConnection!
  exerciseRoutine(where: ExerciseRoutineWhereUniqueInput!): ExerciseRoutine
  exerciseRoutines(where: ExerciseRoutineWhereInput, orderBy: ExerciseRoutineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ExerciseRoutine]!
  exerciseRoutinesConnection(where: ExerciseRoutineWhereInput, orderBy: ExerciseRoutineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExerciseRoutineConnection!
  profile(where: ProfileWhereUniqueInput!): Profile
  profiles(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile]!
  profilesConnection(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProfileConnection!
  program(where: ProgramWhereUniqueInput!): Program
  programs(where: ProgramWhereInput, orderBy: ProgramOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Program]!
  programsConnection(where: ProgramWhereInput, orderBy: ProgramOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProgramConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  workout(where: WorkoutWhereUniqueInput!): Workout
  workouts(where: WorkoutWhereInput, orderBy: WorkoutOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Workout]!
  workoutsConnection(where: WorkoutWhereInput, orderBy: WorkoutOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkoutConnection!
  workoutLog(where: WorkoutLogWhereUniqueInput!): WorkoutLog
  workoutLogs(where: WorkoutLogWhereInput, orderBy: WorkoutLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WorkoutLog]!
  workoutLogsConnection(where: WorkoutLogWhereInput, orderBy: WorkoutLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkoutLogConnection!
  workoutRoutine(where: WorkoutRoutineWhereUniqueInput!): WorkoutRoutine
  workoutRoutines(where: WorkoutRoutineWhereInput, orderBy: WorkoutRoutineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WorkoutRoutine]!
  workoutRoutinesConnection(where: WorkoutRoutineWhereInput, orderBy: WorkoutRoutineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkoutRoutineConnection!
  node(id: ID!): Node
}

type Subscription {
  exercise(where: ExerciseSubscriptionWhereInput): ExerciseSubscriptionPayload
  exerciseLog(where: ExerciseLogSubscriptionWhereInput): ExerciseLogSubscriptionPayload
  exerciseRoutine(where: ExerciseRoutineSubscriptionWhereInput): ExerciseRoutineSubscriptionPayload
  profile(where: ProfileSubscriptionWhereInput): ProfileSubscriptionPayload
  program(where: ProgramSubscriptionWhereInput): ProgramSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  workout(where: WorkoutSubscriptionWhereInput): WorkoutSubscriptionPayload
  workoutLog(where: WorkoutLogSubscriptionWhereInput): WorkoutLogSubscriptionPayload
  workoutRoutine(where: WorkoutRoutineSubscriptionWhereInput): WorkoutRoutineSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  workoutLogs(where: WorkoutLogWhereInput, orderBy: WorkoutLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WorkoutLog!]
  profile: Profile
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  deletedAt: DateTime
  workoutLogs: WorkoutLogCreateManyWithoutUserInput
  profile: ProfileCreateOneInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutWorkoutLogsInput {
  create: UserCreateWithoutWorkoutLogsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutWorkoutLogsInput {
  name: String!
  email: String!
  password: String!
  deletedAt: DateTime
  profile: ProfileCreateOneInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
  password: String
  deletedAt: DateTime
  workoutLogs: WorkoutLogUpdateManyWithoutUserInput
  profile: ProfileUpdateOneInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  deletedAt: DateTime
  workoutLogs: WorkoutLogUpdateManyWithoutUserInput
  profile: ProfileUpdateOneInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  deletedAt: DateTime
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutWorkoutLogsInput {
  create: UserCreateWithoutWorkoutLogsInput
  update: UserUpdateWithoutWorkoutLogsDataInput
  upsert: UserUpsertWithoutWorkoutLogsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutWorkoutLogsDataInput {
  name: String
  email: String
  password: String
  deletedAt: DateTime
  profile: ProfileUpdateOneInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutWorkoutLogsInput {
  update: UserUpdateWithoutWorkoutLogsDataInput!
  create: UserCreateWithoutWorkoutLogsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  workoutLogs_every: WorkoutLogWhereInput
  workoutLogs_some: WorkoutLogWhereInput
  workoutLogs_none: WorkoutLogWhereInput
  profile: ProfileWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

enum WeekDay {
  Monday
  Tuesday
  Wednesday
  Thursday
  Friday
  Saturday
  Sunday
  Any
}

type Workout {
  id: ID!
  name: String!
  weekDay: WeekDay!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  exercises(where: WorkoutRoutineWhereInput, orderBy: WorkoutRoutineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WorkoutRoutine!]
  author: User!
}

type WorkoutConnection {
  pageInfo: PageInfo!
  edges: [WorkoutEdge]!
  aggregate: AggregateWorkout!
}

input WorkoutCreateInput {
  name: String!
  weekDay: WeekDay!
  deletedAt: DateTime
  exercises: WorkoutRoutineCreateManyInput
  author: UserCreateOneInput!
}

input WorkoutCreateManyInput {
  create: [WorkoutCreateInput!]
  connect: [WorkoutWhereUniqueInput!]
}

input WorkoutCreateOneInput {
  create: WorkoutCreateInput
  connect: WorkoutWhereUniqueInput
}

type WorkoutEdge {
  node: Workout!
  cursor: String!
}

type WorkoutLog {
  id: ID!
  workout: Workout!
  program: Program!
  notes: String
  createdAt: DateTime!
  user: User!
  exerciseLogs(where: ExerciseLogWhereInput, orderBy: ExerciseLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ExerciseLog!]
}

type WorkoutLogConnection {
  pageInfo: PageInfo!
  edges: [WorkoutLogEdge]!
  aggregate: AggregateWorkoutLog!
}

input WorkoutLogCreateInput {
  workout: WorkoutCreateOneInput!
  program: ProgramCreateOneInput!
  notes: String
  user: UserCreateOneWithoutWorkoutLogsInput!
  exerciseLogs: ExerciseLogCreateManyWithoutWorkoutLogInput
}

input WorkoutLogCreateManyWithoutUserInput {
  create: [WorkoutLogCreateWithoutUserInput!]
  connect: [WorkoutLogWhereUniqueInput!]
}

input WorkoutLogCreateOneWithoutExerciseLogsInput {
  create: WorkoutLogCreateWithoutExerciseLogsInput
  connect: WorkoutLogWhereUniqueInput
}

input WorkoutLogCreateWithoutExerciseLogsInput {
  workout: WorkoutCreateOneInput!
  program: ProgramCreateOneInput!
  notes: String
  user: UserCreateOneWithoutWorkoutLogsInput!
}

input WorkoutLogCreateWithoutUserInput {
  workout: WorkoutCreateOneInput!
  program: ProgramCreateOneInput!
  notes: String
  exerciseLogs: ExerciseLogCreateManyWithoutWorkoutLogInput
}

type WorkoutLogEdge {
  node: WorkoutLog!
  cursor: String!
}

enum WorkoutLogOrderByInput {
  id_ASC
  id_DESC
  notes_ASC
  notes_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WorkoutLogPreviousValues {
  id: ID!
  notes: String
  createdAt: DateTime!
}

input WorkoutLogScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  notes: String
  notes_not: String
  notes_in: [String!]
  notes_not_in: [String!]
  notes_lt: String
  notes_lte: String
  notes_gt: String
  notes_gte: String
  notes_contains: String
  notes_not_contains: String
  notes_starts_with: String
  notes_not_starts_with: String
  notes_ends_with: String
  notes_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [WorkoutLogScalarWhereInput!]
  OR: [WorkoutLogScalarWhereInput!]
  NOT: [WorkoutLogScalarWhereInput!]
}

type WorkoutLogSubscriptionPayload {
  mutation: MutationType!
  node: WorkoutLog
  updatedFields: [String!]
  previousValues: WorkoutLogPreviousValues
}

input WorkoutLogSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WorkoutLogWhereInput
  AND: [WorkoutLogSubscriptionWhereInput!]
  OR: [WorkoutLogSubscriptionWhereInput!]
  NOT: [WorkoutLogSubscriptionWhereInput!]
}

input WorkoutLogUpdateInput {
  workout: WorkoutUpdateOneRequiredInput
  program: ProgramUpdateOneRequiredInput
  notes: String
  user: UserUpdateOneRequiredWithoutWorkoutLogsInput
  exerciseLogs: ExerciseLogUpdateManyWithoutWorkoutLogInput
}

input WorkoutLogUpdateManyDataInput {
  notes: String
}

input WorkoutLogUpdateManyMutationInput {
  notes: String
}

input WorkoutLogUpdateManyWithoutUserInput {
  create: [WorkoutLogCreateWithoutUserInput!]
  delete: [WorkoutLogWhereUniqueInput!]
  connect: [WorkoutLogWhereUniqueInput!]
  disconnect: [WorkoutLogWhereUniqueInput!]
  update: [WorkoutLogUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [WorkoutLogUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [WorkoutLogScalarWhereInput!]
  updateMany: [WorkoutLogUpdateManyWithWhereNestedInput!]
}

input WorkoutLogUpdateManyWithWhereNestedInput {
  where: WorkoutLogScalarWhereInput!
  data: WorkoutLogUpdateManyDataInput!
}

input WorkoutLogUpdateOneRequiredWithoutExerciseLogsInput {
  create: WorkoutLogCreateWithoutExerciseLogsInput
  update: WorkoutLogUpdateWithoutExerciseLogsDataInput
  upsert: WorkoutLogUpsertWithoutExerciseLogsInput
  connect: WorkoutLogWhereUniqueInput
}

input WorkoutLogUpdateWithoutExerciseLogsDataInput {
  workout: WorkoutUpdateOneRequiredInput
  program: ProgramUpdateOneRequiredInput
  notes: String
  user: UserUpdateOneRequiredWithoutWorkoutLogsInput
}

input WorkoutLogUpdateWithoutUserDataInput {
  workout: WorkoutUpdateOneRequiredInput
  program: ProgramUpdateOneRequiredInput
  notes: String
  exerciseLogs: ExerciseLogUpdateManyWithoutWorkoutLogInput
}

input WorkoutLogUpdateWithWhereUniqueWithoutUserInput {
  where: WorkoutLogWhereUniqueInput!
  data: WorkoutLogUpdateWithoutUserDataInput!
}

input WorkoutLogUpsertWithoutExerciseLogsInput {
  update: WorkoutLogUpdateWithoutExerciseLogsDataInput!
  create: WorkoutLogCreateWithoutExerciseLogsInput!
}

input WorkoutLogUpsertWithWhereUniqueWithoutUserInput {
  where: WorkoutLogWhereUniqueInput!
  update: WorkoutLogUpdateWithoutUserDataInput!
  create: WorkoutLogCreateWithoutUserInput!
}

input WorkoutLogWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  workout: WorkoutWhereInput
  program: ProgramWhereInput
  notes: String
  notes_not: String
  notes_in: [String!]
  notes_not_in: [String!]
  notes_lt: String
  notes_lte: String
  notes_gt: String
  notes_gte: String
  notes_contains: String
  notes_not_contains: String
  notes_starts_with: String
  notes_not_starts_with: String
  notes_ends_with: String
  notes_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  user: UserWhereInput
  exerciseLogs_every: ExerciseLogWhereInput
  exerciseLogs_some: ExerciseLogWhereInput
  exerciseLogs_none: ExerciseLogWhereInput
  AND: [WorkoutLogWhereInput!]
  OR: [WorkoutLogWhereInput!]
  NOT: [WorkoutLogWhereInput!]
}

input WorkoutLogWhereUniqueInput {
  id: ID
}

enum WorkoutOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  weekDay_ASC
  weekDay_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
}

type WorkoutPreviousValues {
  id: ID!
  name: String!
  weekDay: WeekDay!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
}

type WorkoutRoutine {
  id: ID!
  exercise: Exercise!
  order: Int!
}

type WorkoutRoutineConnection {
  pageInfo: PageInfo!
  edges: [WorkoutRoutineEdge]!
  aggregate: AggregateWorkoutRoutine!
}

input WorkoutRoutineCreateInput {
  exercise: ExerciseCreateOneInput!
  order: Int!
}

input WorkoutRoutineCreateManyInput {
  create: [WorkoutRoutineCreateInput!]
  connect: [WorkoutRoutineWhereUniqueInput!]
}

type WorkoutRoutineEdge {
  node: WorkoutRoutine!
  cursor: String!
}

enum WorkoutRoutineOrderByInput {
  id_ASC
  id_DESC
  order_ASC
  order_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WorkoutRoutinePreviousValues {
  id: ID!
  order: Int!
}

input WorkoutRoutineScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  order: Int
  order_not: Int
  order_in: [Int!]
  order_not_in: [Int!]
  order_lt: Int
  order_lte: Int
  order_gt: Int
  order_gte: Int
  AND: [WorkoutRoutineScalarWhereInput!]
  OR: [WorkoutRoutineScalarWhereInput!]
  NOT: [WorkoutRoutineScalarWhereInput!]
}

type WorkoutRoutineSubscriptionPayload {
  mutation: MutationType!
  node: WorkoutRoutine
  updatedFields: [String!]
  previousValues: WorkoutRoutinePreviousValues
}

input WorkoutRoutineSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WorkoutRoutineWhereInput
  AND: [WorkoutRoutineSubscriptionWhereInput!]
  OR: [WorkoutRoutineSubscriptionWhereInput!]
  NOT: [WorkoutRoutineSubscriptionWhereInput!]
}

input WorkoutRoutineUpdateDataInput {
  exercise: ExerciseUpdateOneRequiredInput
  order: Int
}

input WorkoutRoutineUpdateInput {
  exercise: ExerciseUpdateOneRequiredInput
  order: Int
}

input WorkoutRoutineUpdateManyDataInput {
  order: Int
}

input WorkoutRoutineUpdateManyInput {
  create: [WorkoutRoutineCreateInput!]
  update: [WorkoutRoutineUpdateWithWhereUniqueNestedInput!]
  upsert: [WorkoutRoutineUpsertWithWhereUniqueNestedInput!]
  delete: [WorkoutRoutineWhereUniqueInput!]
  connect: [WorkoutRoutineWhereUniqueInput!]
  disconnect: [WorkoutRoutineWhereUniqueInput!]
  deleteMany: [WorkoutRoutineScalarWhereInput!]
  updateMany: [WorkoutRoutineUpdateManyWithWhereNestedInput!]
}

input WorkoutRoutineUpdateManyMutationInput {
  order: Int
}

input WorkoutRoutineUpdateManyWithWhereNestedInput {
  where: WorkoutRoutineScalarWhereInput!
  data: WorkoutRoutineUpdateManyDataInput!
}

input WorkoutRoutineUpdateWithWhereUniqueNestedInput {
  where: WorkoutRoutineWhereUniqueInput!
  data: WorkoutRoutineUpdateDataInput!
}

input WorkoutRoutineUpsertWithWhereUniqueNestedInput {
  where: WorkoutRoutineWhereUniqueInput!
  update: WorkoutRoutineUpdateDataInput!
  create: WorkoutRoutineCreateInput!
}

input WorkoutRoutineWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  exercise: ExerciseWhereInput
  order: Int
  order_not: Int
  order_in: [Int!]
  order_not_in: [Int!]
  order_lt: Int
  order_lte: Int
  order_gt: Int
  order_gte: Int
  AND: [WorkoutRoutineWhereInput!]
  OR: [WorkoutRoutineWhereInput!]
  NOT: [WorkoutRoutineWhereInput!]
}

input WorkoutRoutineWhereUniqueInput {
  id: ID
}

input WorkoutScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  weekDay: WeekDay
  weekDay_not: WeekDay
  weekDay_in: [WeekDay!]
  weekDay_not_in: [WeekDay!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  AND: [WorkoutScalarWhereInput!]
  OR: [WorkoutScalarWhereInput!]
  NOT: [WorkoutScalarWhereInput!]
}

type WorkoutSubscriptionPayload {
  mutation: MutationType!
  node: Workout
  updatedFields: [String!]
  previousValues: WorkoutPreviousValues
}

input WorkoutSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WorkoutWhereInput
  AND: [WorkoutSubscriptionWhereInput!]
  OR: [WorkoutSubscriptionWhereInput!]
  NOT: [WorkoutSubscriptionWhereInput!]
}

input WorkoutUpdateDataInput {
  name: String
  weekDay: WeekDay
  deletedAt: DateTime
  exercises: WorkoutRoutineUpdateManyInput
  author: UserUpdateOneRequiredInput
}

input WorkoutUpdateInput {
  name: String
  weekDay: WeekDay
  deletedAt: DateTime
  exercises: WorkoutRoutineUpdateManyInput
  author: UserUpdateOneRequiredInput
}

input WorkoutUpdateManyDataInput {
  name: String
  weekDay: WeekDay
  deletedAt: DateTime
}

input WorkoutUpdateManyInput {
  create: [WorkoutCreateInput!]
  update: [WorkoutUpdateWithWhereUniqueNestedInput!]
  upsert: [WorkoutUpsertWithWhereUniqueNestedInput!]
  delete: [WorkoutWhereUniqueInput!]
  connect: [WorkoutWhereUniqueInput!]
  disconnect: [WorkoutWhereUniqueInput!]
  deleteMany: [WorkoutScalarWhereInput!]
  updateMany: [WorkoutUpdateManyWithWhereNestedInput!]
}

input WorkoutUpdateManyMutationInput {
  name: String
  weekDay: WeekDay
  deletedAt: DateTime
}

input WorkoutUpdateManyWithWhereNestedInput {
  where: WorkoutScalarWhereInput!
  data: WorkoutUpdateManyDataInput!
}

input WorkoutUpdateOneRequiredInput {
  create: WorkoutCreateInput
  update: WorkoutUpdateDataInput
  upsert: WorkoutUpsertNestedInput
  connect: WorkoutWhereUniqueInput
}

input WorkoutUpdateWithWhereUniqueNestedInput {
  where: WorkoutWhereUniqueInput!
  data: WorkoutUpdateDataInput!
}

input WorkoutUpsertNestedInput {
  update: WorkoutUpdateDataInput!
  create: WorkoutCreateInput!
}

input WorkoutUpsertWithWhereUniqueNestedInput {
  where: WorkoutWhereUniqueInput!
  update: WorkoutUpdateDataInput!
  create: WorkoutCreateInput!
}

input WorkoutWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  weekDay: WeekDay
  weekDay_not: WeekDay
  weekDay_in: [WeekDay!]
  weekDay_not_in: [WeekDay!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  exercises_every: WorkoutRoutineWhereInput
  exercises_some: WorkoutRoutineWhereInput
  exercises_none: WorkoutRoutineWhereInput
  author: UserWhereInput
  AND: [WorkoutWhereInput!]
  OR: [WorkoutWhereInput!]
  NOT: [WorkoutWhereInput!]
}

input WorkoutWhereUniqueInput {
  id: ID
}
`