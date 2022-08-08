type AnswerModel = {
  text: string
  tag: string
  url?: string
}

type QuestionModel = {
  title: string
  answers: AnswerModel[]
}

export class Quiz {
  constructor(
    private readonly id: string,
    private readonly questions: QuestionModel[],
    private readonly quizName: string,
    private readonly listIdCrmPlataform: string,
    private readonly crmApi: string
  ) {}
}
