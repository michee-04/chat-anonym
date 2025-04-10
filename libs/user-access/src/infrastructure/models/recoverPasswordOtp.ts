import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';

@Schema({
  collection: 'recover_password_otps',
  timestamps: true,
})
export class RecoverPasswordOtp extends Document {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ type: String, required: true })
  otp: string;

  @Prop({ type: Date, required: true })
  exp: Date;

  @Prop({ type: String, required: true })
  token: string;

  @Prop({ type: String, required: true, index: true })
  email: string;

  @Prop({ type: String, required: true })
  phone: string;

  @Prop({ type: Boolean, default: false })
  checked: boolean;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const RecoverPasswordOtpSchema =
  SchemaFactory.createForClass(RecoverPasswordOtp);

export type RecoverPasswordOtpDocument = HydratedDocument<RecoverPasswordOtp>;

RecoverPasswordOtpSchema.index({ otp: 1, token: 1, checked: 1 });
