"use client";

import React, { useTransition } from "react";
import { Permission } from "@/app/(root)/users/_type";
import { Switch } from "@/components/ui/switch";
import { updatePermissionAction } from "../../_action";
import { TogglePermissionData } from "../../_type";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const actionOrder: ("READ" | "CREATE" | "UPDATE" | "DELETE")[] = [
  "READ",
  "CREATE",
  "UPDATE",
  "DELETE",
];

type Props = {
  permissions: Permission[];
  roleId: string;
};

function ActivePermission({ permissions, roleId }: Props) {
  const [pending, setPending] = useTransition();
  const router = useRouter();
  const grouped = permissions.reduce<Record<string, Permission[]>>(
    (acc, perm) => {
      if (!acc[perm.resource]) {
        acc[perm.resource] = [];
      }
      acc[perm.resource].push(perm);
      return acc;
    },
    {}
  );

  const handleSwitchChange = (
    permission_id: string,
    data: TogglePermissionData
  ) => {
    setPending(async () => {
      const res = await updatePermissionAction(permission_id, data);
      if (res.success) {
        router.refresh();
      } else {
        toast.error(res.message || "هەڵەیەک ڕوویدا");
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="border-b-2 border-primary">
          <tr>
            <th className="p-3 text-right font-semibold border-b">بەشکان</th>
            {actionOrder.map((action) => (
              <th
                key={action}
                className="p-3 text-center font-semibold border-b"
              >
                {actionTranslations[action]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(grouped).map(([resource, perms]) => (
            <tr key={resource} className="border-b">
              <td className="p-3 font-medium text-right">
                {resourceTranslations[resource] || resource}
              </td>
              {actionOrder.map((action) => {
                const perm = perms.find((p) => p.action === action);
                return (
                  <td key={action} className="p-3 text-center">
                    {perm ? (
                      <Switch
                        dir="ltr"
                        disabled={pending}
                        checked={perm.status}
                        onCheckedChange={() =>
                          handleSwitchChange(perm.id, {
                            action: perm.action,
                            resource: perm.resource,
                            roleId,
                            status: perm.status === true ? false : true,
                          })
                        }
                      />
                    ) : (
                      <span>-</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ActivePermission;

const resourceTranslations: Record<string, string> = {
  User: "بەکارهێنەر",
  CommitteeMember: "لیژنە",
  HeadMember: "سەرۆکی ئەندام",
  Notification: "ئاگادارکردنەوە",
  FamilyMember: "ئەندامی خێزان",
  Owning: "خاوەنداریەتی",
  HouseDescription: "پێناسەی خانوو",
  Charitable: "خێرخوازی",
  HouseImage: "وێنەی خانوو",
  Documents: "بەڵگەنامەکان",
  videos: "ڤیدیۆکان",
  Role: "ڕۆڵ",
  MoneyGiven: "پارەی دراو",
  MoneyReceived: "پارەی وەرگیراو",
  Safe: "قاسە",
};

const actionTranslations: Record<string, string> = {
  READ: "بینینی بەش",
  CREATE: "دروستکردن",
  UPDATE: "نوێکردنەوە",
  DELETE: "سڕینەوە",
};
