import { sizeImage } from "@/lib/globals";
import { z } from "zod";
import { MoneyGiven } from "../users/_type";

export const addUAssisted = z.object({
  fullName: z.string().min(1, { message: "ناو داخڵ بکە" }),
  currentAddress: z.string().min(1, { message: "ناونیشانی فعلی داخڵ بکە" }),
  city: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  dateOfBirth: z.date().optional(),
  placeOfBirth: z.string().optional(),
  note: z.string().optional(),
  nationality: z.string().optional(),
  gender: z.string().optional(),
  dateOfRegistration: z.date().optional(),
  dateOfExpiry: z.date().optional(),
  salary: z.string().optional(),
  currencyType: z.string().optional(),
  currentJob: z.string().optional(),
  temporary: z.string().optional(),
  phoneNumber1: z.string().optional(),
  phoneNumber2: z.string().optional(),
  mainProblem: z.string().optional(),
  biggestProblem: z.string().optional(),
  drugs: z.string().optional(),
  imageUrl: z
    .instanceof(File)
    .refine((file) => file.size < sizeImage, {
      message: "File size must be less than 1 MB",
    })
    .nullable(),
});

export type addUAssistedType = z.infer<typeof addUAssisted>;

export const AddFamilyMember = z.object({
  fullName: z.string().min(1, { message: "ناو داخڵ بکە" }),
  dateOfBirth: z.date().optional(),
  phone: z.string().optional(),
  gender: z.string().optional(),
  typeOfJob: z.string().optional(),
  placeOfWork: z.string().optional(),
  isMarried: z.string().optional(),
  headMemberId: z.string().optional(),
});

export type AddFamilyMemberType = z.infer<typeof AddFamilyMember>;

export const AddOwning = z.object({
  typeOfOwning: z.string().optional(),
  price: z.number(),
  typeOfCurrency: z.string().optional(),
  note: z.string().optional(),
  description: z.string().optional(),
  headMemberId: z.string().optional(),
});

export type AddOwningType = z.infer<typeof AddOwning>;

export const AddCommitteeAssisted = z.object({
  committeeId: z.string().optional(),
  headMemberId: z.string().optional(),
});

export type AddCommitteeAssistedType = z.infer<typeof AddCommitteeAssisted>;

export const AddImage = z.object({
  url: z
    .instanceof(File)
    .refine((file) => file.size < sizeImage, {
      message: "File size must be less than 1 MB",
    })
    .nullable(),
  headMemberId: z.string().optional(),
});
export type AddImageType = z.infer<typeof AddImage>;

export const AddVideo = z.object({
  url: z
    .instanceof(File)
    .refine((file) => file.size < sizeImage, {
      message: "File size must be less than 1 MB",
    })
    .nullable(),
  title: z.string().optional(),
  description: z.string().optional(),
  headMemberId: z.string().optional(),
});
export type AddVideoType = z.infer<typeof AddVideo>;

export const AddDocument = z.object({
  url: z
    .instanceof(File)
    .refine((file) => file.size < sizeImage, {
      message: "File size must be less than 1 MB",
    })
    .nullable(),
  description: z.string().optional(),
  headMemberId: z.string().optional(),
});
export type AddDocumentType = z.infer<typeof AddDocument>;

export interface Assisted {
  id: string;
  fullName: string;
  currentAddress: string;
  city: string;
  latitude: number;
  longitude: number;
  placeOfBirth: string;
  note: string;
  nationality: string;
  gender: string;
  dateOfBirth: Date;
  dateOfRegistration: Date;
  dateOfExpiry: Date;
  salary: string;
  currencyType: string;
  currentJob: string;
  temporary: false;
  phoneNumber1: string;
  phoneNumber2: string | null;
  mainProblem: string;
  imageUrl: string | null;
  biggestProblem: string;
  MoneyGiven: MoneyGiven[];
  FamilyMember: FamilyMember[];
  Owning: Owning[];
  Documents: Documents[];
  videos: Videos[];
  HouseDescription: HouseDescription[];
}
export interface AssistedOnly
  extends Omit<
    Assisted,
    | "MoneyGiven"
    | "FamilyMember"
    | "Owning"
    | "Documents"
    | "Videos"
    | "HeadMemberDrug"
    | "HouseDescription"
  > {}
export interface FamilyMember {
  id: string;
  fullName: string;
  phone: string;
  dateOfBirth: Date;
  gender: string;
  typeOfJob: string;
  placeOfWork: string;
  isMarried: boolean;
  imageUrl: string | null;
  headMemberId: string;
}
export interface Owning {
  id: string;
  typeOfOwning: string;
  price: number;
  typeOfCurrency: string;
  note: string;
  description: string;
  headMemberId: string;
}
export interface HouseDescription {
  id: string;
  description: string;
  headMemberId: string;
}
export interface Documents {
  id: string;
  description: string;
  url: string | null;
  headMemberId: string;
}
export interface Videos {
  id: string;
  title: string;
  description: string;
  url: string;
  headMemberId: string;
}
