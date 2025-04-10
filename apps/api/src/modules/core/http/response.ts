import { ApiProperty } from '@nestjs/swagger';

export enum ApiStatus {
  SUCCESS = 'success',
  FAILURE = 'fail',
}

export class ApiDataResponse<T> {
  @ApiProperty({ example: ApiStatus.SUCCESS })
  readonly status: string;

  @ApiProperty()
  readonly data: T;

  constructor(data: T) {
    this.data = data;
  }
}

export class ApiEmptyDataResponse {
  @ApiProperty({ example: ApiStatus.SUCCESS })
  readonly status: string;

  @ApiProperty({ example: null })
  readonly data: any;

  constructor(data: any) {
    this.data = data;
  }
}

export class ApiErrorResponse {
  @ApiProperty({ example: ApiStatus.FAILURE })
  readonly status: string;

  @ApiProperty({
    type: 'array',
    items: {
      type: 'object',
      properties: {
        code: { type: 'string', example: 400_037 },
        clean_message: {
          type: 'string',
          example: "L'adresse e-mail est obligatoire.",
        },
        message: {
          type: 'string',
          nullable: true,
          example: 'Le champ [email] est obligatoire',
        },
        translations: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              en: {
                type: 'object',
                properties: {
                  code: { type: 'string', example: 400_037 },
                  clean_message: {
                    type: 'string',
                    example: 'The e-mail address is required.',
                  },
                },
              },
              fr: {
                type: 'object',
                properties: {
                  code: { type: 'string', example: 400_037 },
                  clean_message: {
                    type: 'string',
                    example: "L'adresse e-mail est obligatoire.",
                  },
                },
              },
            },
          },
        },
      },
    },
  })
  readonly errors: HttpError[];

  @ApiProperty({ example: '/api/v1/auth/register' })
  readonly url: string;
}

export type HttpError = {
  code: number;
  message?: string;
  clean_message: string;
  translations: {
    en: { code: number; clean_message: string };
    fr: { code: number; clean_message: string };
  };
};
