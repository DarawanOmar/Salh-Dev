"use client";
import React, { useState, useEffect, useTransition } from "react";
import { getBackupAction, restoreBackupAction } from "../client-action";
import { Button } from "@/components/ui/button";

function GetRestoreBackup() {
  const [pendingBackup, setPendingBackup] = useTransition();
  const [pendingRestore, setPendingRestore] = useTransition();
  const [backupUrl, setBackupUrl] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedBackupUrl = localStorage.getItem("backupUrl");
    if (savedBackupUrl) {
      setBackupUrl(savedBackupUrl);
    }
  }, []);

  const handleBackup = async () => {
    setMessage("");
    try {
      setPendingBackup(async () => {
        const result = await getBackupAction();
        if (result.message === "Backup completed" && result.data?.backupUrl) {
          setBackupUrl(result.data?.backupUrl);
          localStorage.setItem("backupUrl", result.data?.backupUrl);
          setMessage("پاشەکەوتی داتــابــەس وەربگرا");
        } else {
          setMessage(
            "هەڵە ڕوویدا لە پاشەکەوت کردن: " +
              (result.message || "هەڵەی نادیار")
          );
        }
      });
    } catch (error) {
      console.error("Backup error:", error);
      setMessage("هەڵەی ڕوویدا لە کاتی وەرگرتنی پاشەکەوت");
    }
  };

  const handleRestore = async () => {
    if (!backupUrl) {
      setMessage("تکایە سەرەتا پاشەکەوت بکە پێش گەڕاندنەوە");
      return;
    }
    setMessage("");
    try {
      setPendingRestore(async () => {
        const result = await restoreBackupAction(backupUrl);
        if (result.success) {
          setMessage("پاشەکەوتی داتــابــەس گەڕاندنەوەیەکی سەرکەوتووی هەیە!");
          clearBackup();
        } else {
          setMessage(
            "هەڵە ڕوویدا لە گەڕاندنەوە: " + (result.message || "هەڵەی نادیار")
          );
        }
      });
    } catch (error) {
      console.error("Restore error:", error);
      setMessage("هەڵەی ڕوویدا لە کاتی گەڕاندنەوەی پاشەکەوت");
    }
  };

  const clearBackup = () => {
    setBackupUrl("");
    localStorage.removeItem("backupUrl");
    setMessage("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        پــاشــەکەوتکردن و گەڕاندنەوەی داتــابــەس
      </h2>

      {message && (
        <div
          className={`mb-4 p-3 rounded ${
            message.includes("سەرکەوتوو") || message.includes("وەربگرا")
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
        <Button onClick={handleBackup} disabled={pendingBackup}>
          {pendingBackup ? (
            <>
              <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
              وەرگرتنی پاشەکەوت...
            </>
          ) : (
            "پاشەکەوت بکە"
          )}
        </Button>

        {backupUrl && (
          <div className="mt-3 p-2 bg-green-50 border border-green-300 rounded">
            <p className="text-sm text-green-700 mb-2">
              ✓ پاشەکەوت ئامادەیە بۆ گەڕاندنەوە
            </p>
            <div className="flex items-center justify-between">
              <p className="text-xs text-green-600 truncate flex-1 mr-2">
                {backupUrl}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={clearBackup}
                className="text-xs"
              >
                پاککردنەوە
              </Button>
            </div>
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

        <Button onClick={handleRestore} disabled={pendingRestore || !backupUrl}>
          {pendingRestore ? (
            <>
              <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
              گەڕاندنەوەی داتــابــەس...
            </>
          ) : (
            "گەڕاندنەوەی داتــابــەس"
          )}
        </Button>

        {!backupUrl && (
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
