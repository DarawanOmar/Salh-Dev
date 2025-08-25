"use server";

import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";
import {
  AddCommitteeAssistedType,
  AddFamilyMemberType,
  AddOwningType,
  addUAssistedType,
} from "./_type";

// -------------------------------POST--------------------------------

export const AddAssistedAction = async (data: addUAssistedType) => {
  const dataSend = {
    ...data,
    temporary: data.temporary === "true" ? true : false,
  };
  const result = await apiRequest({
    method: "POST",
    url: EndPoints.head_members.add,
    data: dataSend,
  });
  console.log("Data => ", dataSend);
  console.log("URL => ", EndPoints.head_members.add);
  console.log("object", result);
  return result;
};

export const AddFamilyMemberAction = async (data: AddFamilyMemberType) => {
  const dataFormatted = {
    ...data,
    isMarried: data.isMarried === "true" ? true : false,
  };
  const result = await apiRequest({
    method: "POST",
    url: EndPoints.family_member.add,
    data: dataFormatted,
  });
  console.log("Data => ", dataFormatted);
  console.log("URL => ", EndPoints.family_member.add);
  console.log("object", result);
  return result;
};
export const AddOwningAction = async (data: AddOwningType) => {
  const result = await apiRequest({
    method: "POST",
    url: EndPoints.owning.add,
    data,
  });
  console.log("URL => ", EndPoints.owning.add);
  console.log("object", result);
  return result;
};
export const AddCommitteeAssistedAction = async (
  data: AddCommitteeAssistedType
) => {
  const result = await apiRequest({
    method: "POST",
    url: EndPoints.assisted_committee.add,
    data,
  });
  console.log("URL => ", EndPoints.assisted_committee.add);
  console.log("object", result);
  return result;
};

// -------------------------------PATCH--------------------------------

export const UpdateAssistedAction = async (
  id: string,
  data: addUAssistedType
) => {
  const result = await apiRequest({
    method: "POST",
    url: EndPoints.head_members.update(id),
    data: {
      ...data,
      temporary: data.temporary === "true" ? true : false,
    },
  });
  console.log("Data => ", data);
  console.log("URL => ", EndPoints.head_members.update(id));
  console.log("object", result);
  return result;
};
export const updateOwningAction = async (id: string, data: AddOwningType) => {
  const result = await apiRequest({
    method: "PATCH",
    url: EndPoints.owning.update(id),
    data,
  });
  return result;
};
export const updateCommitteeAssistedAction = async (
  id: string,
  data: AddCommitteeAssistedType
) => {
  const result = await apiRequest({
    method: "PATCH",
    url: EndPoints.assisted_committee.update(id),
    data,
  });
  return result;
};
export const updateFamilyMemberAction = async (
  id: string,
  data: AddFamilyMemberType
) => {
  const result = await apiRequest({
    method: "PATCH",
    url: EndPoints.family_member.update(id),
    data: {
      ...data,
      isMarried: data.isMarried === "true" ? true : false,
    },
  });
  return result;
};

// -------------------------------DELETE--------------------------------

export const deleteFamilyMemberAction = async (id: string) => {
  const result = await apiRequest({
    method: "DELETE",
    url: EndPoints.family_member.delete(id),
  });
  console.log("URL => ", EndPoints.family_member.delete(id));
  console.log("Result => ", result);
  return result;
};

export const deleteOwningAction = async (id: string) => {
  const result = await apiRequest({
    method: "DELETE",
    url: EndPoints.owning.delete(id),
  });
  console.log("URL => ", EndPoints.owning.delete(id));
  console.log("Result => ", result);
  return result;
};

export const deleteCommitteeAssistedAction = async (id: string) => {
  const result = await apiRequest({
    method: "DELETE",
    url: EndPoints.assisted_committee.delete(id),
  });
  return result;
};
export const deleteAssistedAction = async (id: string) => {
  const result = await apiRequest({
    method: "DELETE",
    url: EndPoints.head_members.delete(id),
  });
  return result;
};
