import { useState, useRef, useEffect } from "react";
import { Pencil } from "lucide-react";
import { currentUser, type UserProfile } from "@/data/mock-settings";

type EditableField = Exclude<keyof UserProfile, "email">;

const fieldConfig: { key: keyof UserProfile; label: string }[] = [
  { key: "email", label: "Email" },
  { key: "fullName", label: "Full name" },
  { key: "title", label: "Title" },
  { key: "phone", label: "Phone number" },
  { key: "language", label: "Language" },
  { key: "timezone", label: "Timezone" },
];

export function ProfileTab() {
  const [profile, setProfile] = useState<UserProfile>({ ...currentUser });
  const [editingField, setEditingField] = useState<EditableField | null>(null);
  const [editValue, setEditValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  useEffect(() => {
    if (editingField && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingField]);

  const startEditing = (field: EditableField) => {
    setEditingField(field);
    setEditValue(profile[field]);
  };

  const saveField = () => {
    if (editingField) {
      setProfile((prev) => ({ ...prev, [editingField]: editValue }));
      setEditingField(null);
    }
  };

  const cancelEditing = () => {
    setEditingField(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      saveField();
    } else if (e.key === "Escape") {
      cancelEditing();
    }
  };

  return (
    <div>
      {/* Profile Fields */}
      <div className="divide-y divide-[var(--border-base)]">
        {fieldConfig.map(({ key, label }) => {
          const isEmail = key === "email";
          const isEditing = editingField === key;

          return (
            <div key={key} className="group flex items-center py-4">
              <span className="w-40 text-sm text-[var(--fg-muted)] shrink-0">
                {label}
              </span>
              <div className="flex-1 flex items-center justify-between min-w-0">
                {isEditing ? (
                  <input
                    ref={inputRef}
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={saveField}
                    onKeyDown={handleKeyDown}
                    className="flex-1 h-9 px-3 rounded-lg border border-[var(--border-base)] text-sm text-[var(--fg-base)] focus:border-[var(--fg-base)] focus:outline-none"
                  />
                ) : (
                  <>
                    <span
                      className={
                        isEmail
                          ? "text-sm text-[var(--fg-disabled)]"
                          : "text-sm text-[var(--fg-base)]"
                      }
                    >
                      {profile[key]}
                    </span>
                    {!isEmail && (
                      <button
                        type="button"
                        onClick={() => startEditing(key as EditableField)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-md hover:bg-[var(--bg-component-hover)] cursor-pointer"
                      >
                        <Pencil size={14} className="text-[var(--fg-muted)]" />
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Change Password Section */}
      <div className="mt-8">
        <h2 className="text-md font-semibold text-[var(--fg-base)] mb-4">
          Change password
        </h2>
        <div className="space-y-3">
          <div>
            <label className="block text-sm text-[var(--fg-muted)] mb-1.5">
              Current password
            </label>
            <input
              type="password"
              value={passwords.current}
              onChange={(e) =>
                setPasswords((prev) => ({ ...prev, current: e.target.value }))
              }
              className="w-full h-10 px-3 rounded-lg border border-[var(--border-base)] text-sm text-[var(--fg-base)] placeholder:text-[var(--fg-disabled)] focus:border-[var(--fg-base)] focus:outline-none"
              placeholder="Enter current password"
            />
          </div>
          <div>
            <label className="block text-sm text-[var(--fg-muted)] mb-1.5">
              New password
            </label>
            <input
              type="password"
              value={passwords.new}
              onChange={(e) =>
                setPasswords((prev) => ({ ...prev, new: e.target.value }))
              }
              className="w-full h-10 px-3 rounded-lg border border-[var(--border-base)] text-sm text-[var(--fg-base)] placeholder:text-[var(--fg-disabled)] focus:border-[var(--fg-base)] focus:outline-none"
              placeholder="Enter new password"
            />
          </div>
          <div>
            <label className="block text-sm text-[var(--fg-muted)] mb-1.5">
              Confirm new password
            </label>
            <input
              type="password"
              value={passwords.confirm}
              onChange={(e) =>
                setPasswords((prev) => ({ ...prev, confirm: e.target.value }))
              }
              className="w-full h-10 px-3 rounded-lg border border-[var(--border-base)] text-sm text-[var(--fg-base)] placeholder:text-[var(--fg-disabled)] focus:border-[var(--fg-base)] focus:outline-none"
              placeholder="Confirm new password"
            />
          </div>
          <div className="flex justify-end pt-2">
            <button
              type="button"
              className="h-9 px-4 rounded-lg bg-[var(--fg-base)] text-white text-sm font-medium hover:bg-[var(--color-gray-700)] transition-colors cursor-pointer"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
