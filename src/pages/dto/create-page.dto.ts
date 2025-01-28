export class CreatePageDto {
  readonly title: string;
  readonly content: string;
  readonly category: string;
  readonly metadata: {
    description: string;
    keywords: string;
  };
}
