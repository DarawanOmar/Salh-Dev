import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Construction, Clock } from "lucide-react";

function Backup() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-lg mx-auto">
        <CardContent className="p-8 text-center space-y-6">
          {/* Construction Icon */}
          <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
            <Construction className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">
              پاشەکەوت لە ژێر کارکردندایە
            </h1>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <p className="text-foreground">
              ئێمە بە چالاکی لەسەر ئەم بەشە کار دەکەین
            </p>
          </div>

          {/* Call to Action */}
          <div className="border rounded-lg p-4 bg-muted/50">
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-sm">دواتر بگەڕێوە</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Backup;
