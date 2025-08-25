"use client";
import React, { useState } from "react";
import { getBackupAction, restoreBackupAction } from "../client-action";
import { Button } from "@/components/ui/button";

function GetRestoreBackup() {
  const [isBackupLoading, setIsBackupLoading] = useState(false);
  const [isRestoreLoading, setIsRestoreLoading] = useState(false);
  const [backupData, setBackupData] = useState(null);
  const [message, setMessage] = useState("");

  const handleBackup = async () => {
    setIsBackupLoading(true);
    setMessage("");

    try {
      const result = await getBackupAction();
      if (result.success && result.data) {
        setBackupData(result.data);
        setMessage("پاشەکەوتی داتــابــەس وەربگرا");
      } else {
        setMessage(
          "هەڵە ڕوویدا لە پاشەکەوت کردن: " + (result.message || "هەڵەی نادیار")
        );
      }
    } catch (error) {
      console.error("Backup error:", error);
      setMessage("هەڵەی ڕوویدا لە کاتی وەرگرتنی پاشەکەوت");
    } finally {
      setIsBackupLoading(false);
    }
  };

  const handleRestore = async () => {
    if (!backupData) {
      setMessage("تکایە سەرەتا پاشەکەوت بکە پێش گەڕاندنەوە");
      return;
    }

    setIsRestoreLoading(true);
    setMessage("");

    try {
      const result = await restoreBackupAction({
        sqlFile: backupData,
        fileName: `backup_${new Date().toISOString().split("T")[0]}.sql`,
      });

      if (result.success) {
        setMessage("پاشەکەوتی داتــابــەس گەڕاندنەوەیەکی سەرکەوتووی هەیە!");
      } else {
        setMessage(
          "هەڵە ڕوویدا لە گەڕاندنەوە: " + (result.message || "هەڵەی نادیار")
        );
      }
    } catch (error) {
      console.error("Restore error:", error);
      setMessage("هەڵەی ڕوویدا لە کاتی گەڕاندنەوەی پاشەکەوت");
    } finally {
      setIsRestoreLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6  rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6  text-center">
        پــاشــەکەوتکردن و گەڕاندنەوەی داتــابــەس
      </h2>

      {message && (
        <div
          className={`mb-4 p-3 rounded ${
            message.includes("success")
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {message}
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">
          وەرگرتنی پاشەکەوت
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          پاشەکەوتی داتــابــەس وەربگرە و بیپارێزە بۆ گەڕاندنەوە.
        </p>
        <Button onClick={handleBackup} disabled={isBackupLoading}>
          {isBackupLoading ? (
            <>
              <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
              وەرگرتنی پاشەکەوت...
            </>
          ) : (
            "پاشەکەوت بکە"
          )}
        </Button>

        {backupData && (
          <div className="mt-3 p-2 bg-green-50 border border-green-300 rounded">
            <p className="text-sm text-green-700">
              ✓ زانیاری پاشەکەوت بارکرا و ئامادەیە بۆ گەڕاندنەوە
            </p>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-700">
          گەڕاندنەوەی پاشەکەوت
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          گەڕاندنەوەی داتــابــەس بۆ پاشەکەوتی وەرگرتوو.
        </p>

        <Button
          onClick={handleRestore}
          disabled={isRestoreLoading || !backupData}
        >
          {isRestoreLoading ? (
            <>
              <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
              گەڕاندنەوەی داتــابــەس...
            </>
          ) : (
            "گەڕاندنەوەی داتــابــەس"
          )}
        </Button>

        {!backupData && (
          <p className="mt-3 text-sm text-gray-500">
            تکایە سەرەتا پاشەکەوت بکە بۆ ئەوەی بتوانیت بیگەڕێنیتەوە.
          </p>
        )}

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-300 rounded">
          <p className="text-sm text-yellow-800">
            <strong>ئاگاداری:</strong> گەڕاندنەوەی پاشەکەوت هەموو زانیاریە
            نوێیەکان لە داتــابــەس لەگەڵ ئەو پاشەکەوتەی وەرگرتوو بەدلی دەکات.
            دڵنیایت لەوەی ئەم کارە بکەیت.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GetRestoreBackup;
