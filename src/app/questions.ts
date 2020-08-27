export class Questions {
  constructor(public questionId: number, public options: Array<string>,
              public description: string, public answer: number) {
  }
}
