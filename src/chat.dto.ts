import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class ChatDTO {
  @IsNotEmpty()
  @IsNumber()
  chatId: number;

  @IsNotEmpty()
  @IsString()
  // @MaxLength(2)
  message: string;
}