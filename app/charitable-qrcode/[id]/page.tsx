import { DetailInfo } from "@/app/(root)/assisted/[id]/_components/details-info";
import DocumentVideoImage from "@/app/(root)/assisted/[id]/_components/document-video-image";
import TableCommitteeAssisted from "@/app/(root)/assisted/[id]/_components/page/committee-assisted/table";
import TableFamilyMember from "@/app/(root)/assisted/[id]/_components/page/family-member/table";
import TableOwning from "@/app/(root)/assisted/[id]/_components/page/owning/table";
import TabChange from "@/app/(root)/assisted/[id]/_components/tab-lang-change";
import { getOneAssisted } from "@/app/(root)/assisted/_lib";
import { Assisted } from "@/app/(root)/assisted/_type";
import OneUserSkleton from "@/app/(root)/users/[id]/_components/skleton";
import { getParams } from "@/lib/utils";
import React, { Suspense } from "react";

function OneCharitableQRCode({
  params,
  searchParams,
}: ParamsSearchParamsTypeUser) {
  return (
    <div className="space-y-5 p-5">
      <Suspense fallback={<OneUserSkleton isAssisted />}>
        <FeedPage params={params} searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

export default OneCharitableQRCode;

async function FeedPage({ params, searchParams }: ParamsSearchParamsTypeUser) {
  const id = (await params).id || "";
  const { tab } = await getParams(searchParams, [
    { key: "tab", defaultValue: "family_member" },
  ]);
  const oneCommittee = await getOneAssisted(id);
  return (
    <>
      <DetailInfo oneCommittee={oneCommittee.data || ({} as Assisted)} />
      <div className="max-w-3xl mx-auto mt-10">
        <TabChange />
      </div>
      {tab === "family_member" ? (
        <TableFamilyMember
          data={oneCommittee.data?.FamilyMember || []}
          isQrcodePage
        />
      ) : tab === "owning" ? (
        <TableOwning data={oneCommittee.data?.Owning || []} isQrcodePage />
      ) : (
        <TableCommitteeAssisted
          data={oneCommittee.data?.CommitteeMember || []}
          isQrcodePage
        />
      )}
      <DocumentVideoImage
        houseDescription={oneCommittee.data?.houseImages || []}
        Documents={oneCommittee.data?.Documents || []}
        videos={oneCommittee.data?.videos || []}
        isQrcodePage
      />
    </>
  );
}
